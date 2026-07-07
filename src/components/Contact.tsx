import type { Messages } from "@/lib/data";
import { siteConfig } from "@/lib/data";

type ContactProps = {
  messages: Messages;
};

export function Contact({ messages }: ContactProps) {
  const c = messages.contact;

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-line/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="surface-card p-8 md:p-12">
          <p className="section-kicker">{c.kicker}</p>
          <h2 className="mt-4 section-title">{c.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-2">{c.subtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-3">{c.email}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-ink transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-3">
                {c.location}
              </p>
              <p className="mt-2 text-ink">{siteConfig.location}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {c.cta}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              {c.github}
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              {c.linkedin}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
