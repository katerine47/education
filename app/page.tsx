import { Hero } from "@/components/sections/hero";
import { Audience } from "@/components/sections/audience";
import { WhyChoose } from "@/components/sections/why-choose";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Audience />
      <WhyChoose />
      <PhotoGallery />
      <PricingPreview />
      <CtaBanner
        title="Готовы начать говорить по-испански?"
        text="Запишитесь на пробный урок — определим ваш уровень и подберём программу, которая подойдёт именно вам."
      />
    </>
  );
}
