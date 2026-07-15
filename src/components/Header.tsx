"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/data";
import { siteConfig } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  locale: Locale;
  messages: Messages;
};

const navItems = ["home", "projects", "showcase", "experience", "contact"] as const;

export function Header({ locale, messages }: HeaderProps) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "zh" : "en";

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link href={`/${locale}/`} className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-line bg-panel/70 font-mono text-sm font-semibold tracking-[0.16em] text-ink transition-colors group-hover:border-accent group-hover:text-accent">
            PL
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-ink">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-ink-3">
              {messages.nav.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-panel/60 px-2 py-1.5 backdrop-blur md:flex">
          {navItems.map((item) => {
            const href = item === "home" ? `/${locale}/` : `/${locale}/#${item}`;
            const isActive =
              item === "home"
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : false;
            return (
              <a
                key={item}
                href={href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-accent text-white"
                    : "text-ink-2 hover:text-accent"
                }`}
              >
                {messages.nav[item]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`/${otherLocale}/`}
            className="appearance-none rounded-full border border-line bg-panel/70 px-4 py-2 text-sm font-medium text-ink-2 backdrop-blur transition-colors hover:border-accent hover:text-accent"
            aria-label="Switch language"
          >
            {locale === "en" ? "中文" : "EN"}
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
