import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundImages } from "@/components/background-images";

const neutralFace = localFont({
  variable: "--font-neutral-face",
  src: [
    { path: "./fonts/NeutralFace.woff", weight: "400", style: "normal" },
    { path: "./fonts/NeutralFaceBold.woff", weight: "700", style: "normal" },
  ],
  display: "swap",
});

// Кириллический фолбэк: у Neutral Face нет кириллицы,
// поэтому русский текст будет отрисован Nunito.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hola, Español — школа испанского языка",
    template: "%s | Hola, Español",
  },
  description:
    "Индивидуальные уроки испанского языка для детей от 8 лет и взрослых. Онлайн-занятия, подготовка к экзаменам DELE и SIELE. Запишитесь на пробный урок.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${neutralFace.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BackgroundImages />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
