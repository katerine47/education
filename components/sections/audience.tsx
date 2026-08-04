import { Baby, Briefcase, PlaneTakeoff, Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const groups = [
  {
    icon: Baby,
    title: "Детям от 8 лет",
    text: "Игровые уроки с карточками, песнями и мультфильмами — испанский без скуки.",
  },
  {
    icon: Briefcase,
    title: "Взрослым с нуля",
    text: "Понятная система, разговорная практика с первых занятий, без зубрёжки.",
  },
  {
    icon: PlaneTakeoff,
    title: "Тем, кто планирует переезд",
    text: "Бытовая лексика, разговорные ситуации, уверенность в повседневном общении.",
  },
  {
    icon: Award,
    title: "Тем, кто готовится к экзамену",
    text: "Подготовка к DELE и SIELE: структура экзамена, практика по всем секциям.",
  },
];

export function Audience() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <h2 className="font-heading text-center text-3xl font-semibold text-foreground sm:text-4xl">
          Для кого эти занятия
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Подбираю программу индивидуально — под ваш возраст, уровень и цель
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{group.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
