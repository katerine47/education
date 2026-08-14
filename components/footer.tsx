import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt/90">
      <div className="flag-stripe h-1 w-full" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-heading text-xl font-semibold text-primary-dark">
            <Logo size={28} />
            {siteConfig.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            {siteConfig.tagline}. Учу говорить по-испански уверенно — детей и
            взрослых, с нуля и до подготовки к экзаменам.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            Навигация
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-foreground">
            Контакты
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-sm text-muted">
              <Phone size={16} className="shrink-0 text-primary" />
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted">
              <Mail size={16} className="shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
      </div>
    </footer>
  );
}
