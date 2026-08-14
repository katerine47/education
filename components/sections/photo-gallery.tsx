"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Атмосферная галерея с фотографиями Испании: панадерия, дворик в Валенсии
 * и паэлья. Порядок фотографий перемешивается случайным образом при
 * каждом заходе на сайт.
 */
const photos = [
  {
    src: "/photos/panaderia.jpg",
    alt: "Старинная панадерия-пастелерия в испанском городке",
  },
  {
    src: "/photos/patio-valencia.jpg",
    alt: "Уютный дворик с мандариновым деревом среди жёлтых фасадов",
  },
  {
    src: "/photos/paella.jpg",
    alt: "Паэлья с морепродуктами на побережье",
  },
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function PhotoGallery() {
  const [shuffled, setShuffled] = useState(photos);

  useEffect(() => {
    setShuffled(shuffle(photos));
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-3">
        {shuffled.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
