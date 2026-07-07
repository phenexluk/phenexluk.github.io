"use client";

import { motion } from "framer-motion";
import type { Messages } from "@/lib/data";
import { siteConfig } from "@/lib/data";
import { KeySkills } from "@/components/KeySkills";

type HeroProps = {
  messages: Messages;
};

export function Hero({ messages }: HeroProps) {
  const h = messages.hero;

  return (
    <section className="py-16 md:py-24 pt-10 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-kicker mt-6">{h.kicker}</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-ink md:text-7xl">
            {siteConfig.name}
            <span className="ml-3 align-middle text-2xl text-ink-3 md:text-3xl">
              {siteConfig.chineseName}
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-2">{h.summary}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-3">{h.detail}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-2">{h.aiWorkflow}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { value: h.statYears, label: h.statYearsLabel },
            { value: h.statPlatforms, label: h.statPlatformsLabel },
            { value: h.statBrands, label: h.statBrandsLabel },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-6">
              <p className="font-mono text-xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-ink-2">{stat.label}</p>
            </div>
          ))}
          <div className="surface-card p-6">
            <p className="text-lg font-semibold text-ink">{h.status}</p>
            <p className="mt-2 text-sm leading-6 text-ink-2">{h.tagline}</p>
            <p className="mt-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Now
            </p>
            <p className="mt-2 text-base font-semibold text-ink">{h.nextTitle}</p>
            <p className="mt-2 text-sm leading-6 text-ink-2">{h.nextBody}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
            {h.focus}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {h.focusItems.map((item) => (
              <span key={item} className="tech-pill">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <KeySkills messages={messages} />
      </div>
    </section>
  );
}
