import { BookOpen, MessageCircle, GraduationCap, Guitar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-alt">
      <div className="flag-stripe pointer-events-none absolute inset-x-0 top-0 h-1.5" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
      />
      <Sun
        aria-hidden
        size={64}
        className="pointer-events-none absolute right-8 top-10 hidden text-accent/50 sm:block"
      />
      <Guitar
        aria-hidden
        size={72}
        className="pointer-events-none absolute -left-2 bottom-8 hidden -rotate-12 text-primary/20 sm:block"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-primary-dark">
            <GraduationCap size={16} />
            Онлайн-школа испанского языка
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Говорите по-испански уверенно —{" "}
            <span className="text-primary">с первого урока</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Индивидуальные занятия для детей от 8 лет и взрослых. Учу с нуля,
            готовлю к экзаменам и помогаю говорить свободно — в тёплой,
            дружелюбной атмосфере.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/booking" size="lg">
              <MessageCircle size={18} />
              Записаться на пробный урок
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              <BookOpen size={18} />
              Смотреть цены
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
