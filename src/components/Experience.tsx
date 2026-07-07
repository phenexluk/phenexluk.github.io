"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/lib/data";
import { experiences, formatDate } from "@/lib/data";

type ExperienceProps = {
  locale: Locale;
  messages: Messages;
};

export function Experience({ locale, messages }: ExperienceProps) {
  const e = messages.experience;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-line/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="section-kicker">{e.kicker}</p>
        <h2 className="mt-4 section-title">{e.title}</h2>

        <div className="mt-10 space-y-6">
          {experiences.map((exp, i) => {
            const item = e.items[exp.id];
            const dateRange = `${formatDate(exp.start, locale)} — ${
              exp.end ? formatDate(exp.end, locale) : e.present
            }`;

            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="surface-card p-6 md:p-8"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-accent font-medium">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-ink-3 shrink-0">{dateRange}</p>
                </div>

                <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
                  {e.responsibilities}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-ink-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
