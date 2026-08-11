import { Heart, Clock, MessageSquareText, Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    icon: Heart,
    title: "Тёплая атмосфера",
    text: "Без стресса и оценок — учиться должно быть приятно и спокойно.",
  },
  {
    icon: Clock,
    title: "Гибкое расписание",
    text: "Подбираем удобное время для занятий и легко переносим при необходимости.",
  },
  {
    icon: MessageSquareText,
    title: "Упор на разговор",
    text: "Уже на первых уроках вы начинаете говорить, а не только зубрить грамматику.",
  },
  {
    icon: Leaf,
    title: "Погружение в культуру",
    text: "Побережье, кухня и традиции испаноговорящих стран — язык через живую средиземноморскую культуру.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-background-alt py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-heading text-center text-3xl font-semibold text-foreground sm:text-4xl">
            Почему выбирают меня
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={i * 80}>
                <div className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
