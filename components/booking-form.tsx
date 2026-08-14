"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormValues {
  name: string;
  contact: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  contact: "",
  message: "",
};

/** Клиентская валидация — быстрая обратная связь до отправки на сервер. */
function validate(current: FormValues): FormErrors {
  const nextErrors: FormErrors = {};
  if (current.name.trim().length < 2) {
    nextErrors.name = "Пожалуйста, укажите имя (минимум 2 символа)";
  }
  if (current.contact.trim().length < 3) {
    nextErrors.contact = "Укажите телефон или ссылку на соцсеть для связи";
  }
  return nextErrors;
}

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange<K extends keyof FormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: { ok: boolean; error?: string } = await response.json();

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Не удалось отправить заявку, попробуйте позже");
        return;
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setErrorMessage("Не удалось отправить заявку. Проверьте подключение к интернету.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="font-heading mt-5 text-xl font-semibold text-foreground">
          Спасибо, заявка отправлена
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Я свяжусь с вами в ближайшее время по указанным контактам, чтобы
          подобрать удобное время для урока.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Имя *
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Как к вам обращаться"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-60"
            aria-invalid={Boolean(errors.name)}
            disabled={isSending}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-primary-dark">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm font-medium text-foreground">
            Телефон или ссылка на соцсеть *
          </label>
          <input
            id="contact"
            type="text"
            value={values.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
            placeholder="+7 900 000-00-00 или ссылка на VK/Telegram"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-60"
            aria-invalid={Boolean(errors.contact)}
            disabled={isSending}
          />
          {errors.contact && (
            <p className="mt-1.5 text-xs text-primary-dark">{errors.contact}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            Комментарий
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Расскажите о своей цели: путешествия, работа, экзамен..."
            rows={4}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:opacity-60"
            disabled={isSending}
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-primary-dark">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" disabled={isSending}>
        {isSending ? "Отправляем…" : "Отправить заявку"}
      </Button>
      <p className="mt-3 text-xs text-muted">
        Нажимая «Отправить заявку», вы соглашаетесь на обработку указанных
        контактных данных для связи с вами.
      </p>
    </form>
  );
}
