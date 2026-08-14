import { NextResponse } from "next/server";

/**
 * Что делает этот файл (простыми словами):
 * ------------------------------------------------------------------
 * Это серверный обработчик (Route Handler), который получает данные
 * формы заявки с сайта и пересылает их вам в личные сообщения ВКонтакте
 * через официальное API VK (messages.send).
 *
 * Он выполняется только на сервере — браузер никогда не видит токен
 * доступа VK. Ключи читаются из переменных окружения (.env.local),
 * которые не попадают в git и не отправляются на клиент.
 *
 * Как проверить, что заявка дошла:
 * 1. Заполните и отправьте форму на сайте (страница «Записаться»).
 * 2. Проверьте личные сообщения указанного VK-сообщества/аккаунта —
 *    должно прийти сообщение с именем, контактом и комментарием.
 * 3. Если что-то пошло не так, посмотрите логи сервера (терминал,
 *    где запущен `next dev`/`next start`, либо логи хостинга) —
 *    туда пишется текст ошибки (без самого токена).
 */

const VK_API_VERSION_DEFAULT = "5.199";
const VK_API_URL = "https://api.vk.com/method/messages.send";

interface LeadPayload {
  name?: unknown;
  contact?: unknown;
  message?: unknown;
}

interface ValidatedLead {
  name: string;
  contact: string;
  message: string;
}

/** Проверка данных заявки на сервере (не доверяем клиенту). */
function validateLead(payload: LeadPayload): { data: ValidatedLead } | { error: string } {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const contact = typeof payload.contact === "string" ? payload.contact.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (name.length < 2) {
    return { error: "Укажите имя (минимум 2 символа)" };
  }
  if (contact.length < 3) {
    return { error: "Укажите телефон или ссылку на соцсеть для связи" };
  }

  return { data: { name, contact, message } };
}

/** Собирает читаемый текст сообщения для VK. */
function buildMessageText({ name, contact, message }: ValidatedLead): string {
  const lines = [
    "Новая заявка с сайта",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
  ];
  if (message) {
    lines.push(`Комментарий: ${message}`);
  }
  return lines.join("\n");
}

/** Генерирует random_id, который требует VK API, чтобы не задваивать сообщения. */
function generateRandomId(): number {
  // timestamp (мс) + случайное число — умещается в диапазон Int32,
  // который ожидает VK API.
  return Math.floor(Date.now() % 1_000_000) * 1000 + Math.floor(Math.random() * 1000);
}

export async function POST(request: Request) {
  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректный формат запроса" },
      { status: 400 }
    );
  }

  const validation = validateLead(payload);
  if ("error" in validation) {
    return NextResponse.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const accessToken = process.env.VK_ACCESS_TOKEN;
  const peerId = process.env.VK_PEER_ID;
  const apiVersion = process.env.VK_API_VERSION || VK_API_VERSION_DEFAULT;

  if (!accessToken || !peerId) {
    // Секреты не заданы — не падаем с 500, а логируем и отвечаем понятно.
    console.error(
      "[api/lead] VK_ACCESS_TOKEN или VK_PEER_ID не заданы в переменных окружения"
    );
    return NextResponse.json(
      { ok: false, error: "Форма временно недоступна, попробуйте позже" },
      { status: 503 }
    );
  }

  const messageText = buildMessageText(validation.data);

  const params = new URLSearchParams({
    access_token: accessToken,
    peer_id: peerId,
    message: messageText,
    v: apiVersion,
    random_id: String(generateRandomId()),
  });

  let vkResponse: Response;
  try {
    vkResponse = await fetch(VK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch (err) {
    console.error("[api/lead] Сетевая ошибка при обращении к VK API:", err);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку, попробуйте позже" },
      { status: 502 }
    );
  }

  let vkData: { error?: { error_code?: number; error_msg?: string }; response?: unknown };
  try {
    vkData = await vkResponse.json();
  } catch (err) {
    console.error("[api/lead] Не удалось разобрать ответ VK API:", err);
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку, попробуйте позже" },
      { status: 502 }
    );
  }

  // ВК всегда отвечает HTTP 200, даже при ошибке — реальный статус
  // нужно смотреть в теле ответа, в поле `error`.
  if (!vkResponse.ok || vkData.error) {
    console.error(
      "[api/lead] VK API вернул ошибку:",
      vkData.error?.error_code,
      vkData.error?.error_msg
    );
    return NextResponse.json(
      { ok: false, error: "Не удалось отправить заявку, попробуйте позже" },
      { status: 502 }
    );
  }

  console.log("[api/lead] Заявка успешно отправлена:", messageText.replace(/\n/g, " | "));

  return NextResponse.json({ ok: true });
}
