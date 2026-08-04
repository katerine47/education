import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

interface CtaBannerProps {
  title: string;
  text: string;
  buttonLabel?: string;
}

export function CtaBanner({
  title,
  text,
  buttonLabel = "Записаться на пробный урок",
}: CtaBannerProps) {
  return (
    <section className="px-5 pb-20 sm:px-8">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-8 py-14 text-center shadow-lg sm:px-16">
          <h2 className="font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            {text}
          </p>
          <Button
            href="/booking"
            size="lg"
            className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {buttonLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
