import Image from "next/image";

/**
 * Фоновые изображения, связанные с Испанией: паэлья, Саграда Фамилия,
 * испанские улочки, море и цветущие андалузские дворики.
 * Показываются полупрозрачно и декоративно на каждой странице сайта,
 * не мешая читаемости основного контента.
 */
const backgroundPhotos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Plato_de_paella%2C_Capicorb_%28Castell%C3%B3n%29.jpg/960px-Plato_de_paella%2C_Capicorb_%28Castell%C3%B3n%29.jpg",
    alt: "Паэлья — традиционное испанское блюдо",
    className: "left-[-6%] top-[6%] h-56 w-72 -rotate-6 sm:h-64 sm:w-80",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sagrada_Fam%C3%ADlia_%2851970333757%29.jpg/960px-Sagrada_Fam%C3%ADlia_%2851970333757%29.jpg",
    alt: "Саграда Фамилия в Барселоне",
    className: "right-[-5%] top-[2%] h-64 w-56 rotate-6 sm:h-80 sm:w-64",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Alley_of_Barcelona_--_2002.jpg/960px-Alley_of_Barcelona_--_2002.jpg",
    alt: "Узкая улочка в Барселоне",
    className: "left-[-4%] top-[52%] h-64 w-56 rotate-3 sm:h-72 sm:w-64",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Costa_del_Sol_bei_Nerja.jpg/960px-Costa_del_Sol_bei_Nerja.jpg",
    alt: "Средиземноморское побережье Испании",
    className: "right-[-6%] top-[46%] h-56 w-72 -rotate-3 sm:h-64 sm:w-80",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C%C3%B3rdoba%2C_Patios_de_Viana_1990_02.jpg",
    alt: "Цветущий андалузский дворик в Кордове",
    className: "left-[10%] bottom-[-4%] h-56 w-72 rotate-6 sm:h-64 sm:w-80",
  },
];

export function BackgroundImages() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {backgroundPhotos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-3xl opacity-45 shadow-2xl dark:opacity-30 ${photo.className}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-background/35 dark:bg-background/55" />
    </div>
  );
}
