interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Логотип школы испанского языка: диалоговый "пузырь" в цветах испанского
 * флага с монограммой "¡H!" — перевёрнутый восклицательный знак является
 * узнаваемой особенностью испанской пунктуации.
 */
export function Logo({ size = 36, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Жёлтый слой-подложка, сдвинутый вниз-вправо — второй цвет флага */}
      <rect x="6" y="8" width="34" height="26" rx="10" fill="var(--accent)" />

      {/* Основной красный диалоговый пузырь */}
      <path
        d="M4 16C4 10.4772 8.47715 6 14 6H30C35.5228 6 40 10.4772 40 16V22C40 27.5228 35.5228 32 30 32H16.5L8 39V31.2C5.53214 29.4813 4 26.5942 4 23.4V16Z"
        fill="var(--primary)"
      />

      {/* Монограмма ¡H! — фирменная испанская пунктуация */}
      <text
        x="22"
        y="23.5"
        textAnchor="middle"
        fontFamily="var(--font-heading), serif"
        fontWeight={700}
        fontSize="15"
        fill="var(--primary-foreground)"
        letterSpacing="0.5"
      >
        ¡H!
      </text>
    </svg>
  );
}
