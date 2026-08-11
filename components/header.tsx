"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sailboat } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="flag-stripe h-1 w-full" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-primary-dark"
          onClick={() => setOpen(false)}
        >
          <Sailboat size={22} className="text-primary" aria-hidden />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                  isActive && "text-primary"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/booking" size="md">
            Записаться
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-5 pt-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-background-alt hover:text-primary",
                pathname === link.href && "bg-background-alt text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/booking" size="md" className="mt-2 w-full">
            Записаться
          </Button>
        </nav>
      )}
    </header>
  );
}
