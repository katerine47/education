import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Faq } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { pricingPlans } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Цены",
  description:
    "Стоимость уроков испанского языка: пробное занятие, индивидуальные уроки и пакеты занятий со скидкой.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-background-alt px-5 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Стоимость уроков
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Выберите подходящий формат — от разового пробного урока до
            регулярных занятий со скидкой
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 100}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7 shadow-sm",
                  plan.featured
                    ? "border-primary bg-card ring-2 ring-primary/30 lg:-translate-y-2"
                    : "border-border bg-card"
                )}
              >
                {plan.featured && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Популярный выбор
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {plan.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold text-primary-dark">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.unit}</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/booking"
                  variant={plan.featured ? "primary" : "outline"}
                  className="mt-7 w-full"
                >
                  Записаться
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted">
            Групповые занятия и корпоративные программы — обсудим
            индивидуально, напишите мне на странице{" "}
            <a href="/booking" className="font-medium text-primary underline">
              «Записаться»
            </a>
          </p>
        </Reveal>
      </section>

      <div className="bg-background-alt">
        <Faq />
      </div>

      <CtaBanner
        title="Не уверены, какой формат выбрать?"
        text="Начните с пробного урока — вместе определим уровень и подберём подходящий тариф."
      />
    </>
  );
}
