import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { BookingForm } from "@/components/booking-form";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Записаться",
  description:
    "Запишитесь на пробный урок испанского языка. Оставьте заявку — я свяжусь с вами, чтобы подобрать удобное время.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Телефон",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "Написать в Telegram",
    href: siteConfig.telegram,
  },
];

export default function BookingPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Записаться на урок
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Заполните форму ниже — я свяжусь с вами в течение дня, чтобы
            подтвердить удобное время первого занятия
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <BookingForm />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-border bg-background-alt p-7 sm:p-9">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Контакты
            </h2>
            <p className="mt-2 text-sm text-muted">
              Можно написать напрямую — отвечаю обычно в течение нескольких
              часов
            </p>

            <ul className="mt-6 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block transition-opacity hover:opacity-80"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
