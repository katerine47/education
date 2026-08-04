import type { Metadata } from "next";
import { GraduationCap, Heart, Languages, Users } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Преподаватель испанского языка с опытом работы со взрослыми и детьми. Расскажу о своём подходе к обучению и образовании.",
};

const facts = [
  { icon: GraduationCap, text: "Профильное лингвистическое образование" },
  { icon: Languages, text: "Свободное владение испанским (уровень C1–C2)" },
  { icon: Users, text: "Опыт работы с детьми и взрослыми" },
  { icon: Heart, text: "Люблю испанский язык и культуру всем сердцем" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-primary text-8xl font-heading text-primary-foreground shadow-lg">
              ¡Hola!
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-alt px-4 py-1.5 text-sm font-medium text-primary-dark">
              Обо мне
            </span>
            <h1 className="font-heading mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Преподаю испанский с любовью к языку и к своим ученикам
            </h1>
            <p className="mt-5 text-muted">
              Меня зовут преподаватель школы «Hola, Español». Уже много лет
              я помогаю взрослым и детям заговорить по-испански — начиная с
              самых первых слов и заканчивая уверенным общением на бытовые и
              рабочие темы.
            </p>
            <p className="mt-4 text-muted">
              Мой подход — это баланс структуры и живого общения. Мы
              разбираем грамматику ровно настолько, чтобы она помогала, а не
              пугала, и много говорим с первых занятий. Для детей я использую
              игровые форматы, а со взрослыми выстраиваю программу под
              конкретную цель: путешествия, работу, переезд или экзамен.
            </p>

            <ul className="mt-7 space-y-3">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <li
                    key={fact.text}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon size={16} />
                    </span>
                    {fact.text}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-background-alt py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Мой принцип в обучении
            </h2>
            <p className="mt-5 text-lg italic text-muted">
              «Испанский — это не про правильные окончания глаголов, а про
              возможность рассказать о себе, понять другого человека и
              чувствовать себя свободно в новом языке. Именно к этому мы
              идём вместе на каждом уроке».
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Хотите позаниматься со мной?"
        text="Запишитесь на пробный урок, познакомимся и определим, с чего лучше начать именно вам."
      />
    </>
  );
}
