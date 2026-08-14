import Image from "next/image";

const photos = [
  {
    src: "/photos/sagrada.jpg",
    alt: "",
    className: "left-[-4%] top-[4%] h-56 w-40 -rotate-6 sm:h-72 sm:w-52 md:left-[2%] md:top-[8%]",
  },
  {
    src: "/photos/panaderia.jpg",
    alt: "",
    className: "right-[-3%] top-[26%] h-52 w-40 rotate-6 sm:h-64 sm:w-48 md:right-[3%] md:top-[22%]",
  },
  {
    src: "/photos/patio.jpg",
    alt: "",
    className: "left-[-3%] bottom-[22%] h-56 w-44 rotate-3 sm:h-72 sm:w-56 md:left-[4%] md:bottom-[16%]",
  },
  {
    src: "/photos/paella.jpg",
    alt: "",
    className: "right-[-4%] bottom-[4%] h-52 w-44 -rotate-3 sm:h-64 sm:w-52 md:right-[2%] md:bottom-[8%]",
  },
];

export function BackgroundImages() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/85" />
      {photos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-2xl border-4 border-card shadow-lg opacity-60 ${photo.className}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
