"use client";

import { motion } from "framer-motion";
import type { Messages } from "@/lib/data";
import { showcases } from "@/lib/data";

type ShowcaseProps = {
  messages: Messages;
};

const PLATFORM_GLYPH: Record<string, string> = {
  "hk-bus-flutter": "BUS",
  "hk-weather-android": "WX",
  "hk-road-ios": "RD",
};

const PLATFORM_GRADIENT: Record<string, string> = {
  "hk-bus-flutter": "from-sky-950 via-blue-900 to-indigo-950",
  "hk-weather-android": "from-violet-950 via-purple-900 to-fuchsia-950",
  "hk-road-ios": "from-emerald-950 via-teal-900 to-slate-950",
};

export function Showcase({ messages }: ShowcaseProps) {
  const s = messages.showcase;

  return (
    <section id="showcase" className="border-t border-line/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="section-kicker">{s.kicker}</p>
        <h2 className="mt-4 section-title">{s.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-2">{s.subtitle}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcases.map((item, i) => {
            const copy = s.items[item.id];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="surface-card flex flex-col overflow-hidden transition-shadow hover:shadow-glow"
              >
                <div
                  className={`flex items-center gap-4 bg-gradient-to-br ${PLATFORM_GRADIENT[item.id] ?? "from-slate-900 to-slate-950"} px-6 py-5`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 font-mono text-sm font-bold tracking-wider text-white backdrop-blur">
                    {PLATFORM_GLYPH[item.id] ?? "App"}
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                      {s.platforms[item.platform]}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{copy.title}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-7 text-ink-2">{copy.description}</p>

                  <ul className="mt-5 space-y-2">
                    {copy.highlights.map((line) => (
                      <li key={line} className="flex gap-2 text-sm leading-6 text-ink-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-line bg-panel/70 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    {s.viewOnGithub}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
