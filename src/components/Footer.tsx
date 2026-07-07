import type { Messages } from "@/lib/data";
import { siteConfig } from "@/lib/data";

type FooterProps = {
  messages: Messages;
};

export function Footer({ messages }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/50 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-ink-3 md:flex-row md:px-6 lg:px-8">
        <p>
          © {year} {siteConfig.name}. {messages.footer.copyright}
        </p>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          {messages.footer.viewSource}
        </a>
      </div>
    </footer>
  );
}
