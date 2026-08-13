import { Hero } from "@/components/sections/hero";
import { Audience } from "@/components/sections/audience";
import { WhyChoose } from "@/components/sections/why-choose";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Audience />
      <WhyChoose />
      <PricingPreview />
      <CtaBanner
        title="Комфортное изучение испанского языка без зубрёжки, чтобы иметь преимущество перед другими и открыть для себя новые возможности"
        text="Запишитесь на пробный урок — определим ваш уровень и подберём программу, которая подойдёт именно вам."
      />
    </>
  );
}
