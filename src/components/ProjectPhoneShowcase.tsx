"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import type { Messages, Project } from "@/lib/data";

type ProjectPhoneShowcaseProps = {
  projects: Project[];
  messages: Messages["projects"];
};

const PROJECT_THEMES: Record<string, { gradient: string; glyph: string; iconSrc?: string }> = {
  "ctf-club": {
    gradient: "from-amber-950 via-rose-950 to-amber-800",
    glyph: "CTF",
    iconSrc: "/projects/ctf_app_icon.png",
  },
  "cathay-mall": { gradient: "from-emerald-950 via-teal-900 to-slate-900", glyph: "CX" },
  gamesbond: {
    gradient: "from-violet-950 via-fuchsia-950 to-indigo-950",
    glyph: "GB",
    iconSrc: "/projects/gamesbond_app_icon.png",
  },
  "versus-arena-flutter": {
    gradient: "from-orange-950 via-red-950 to-zinc-900",
    glyph: "VA",
    iconSrc: "/projects/versusarena_app_icon.png",
  },
  "versus-arena": {
    gradient: "from-orange-900 via-amber-950 to-zinc-900",
    glyph: "VA",
    iconSrc: "/projects/versusarena_app_icon.png",
  },
  "cga-esports": {
    gradient: "from-blue-950 via-indigo-950 to-slate-900",
    glyph: "CGA",
    iconSrc: "/projects/cga_app_icon.png",
  },
  "zou-gwai": {
    gradient: "from-red-950 via-orange-950 to-stone-900",
    glyph: "走",
    iconSrc: "/projects/runghost_app_icon.png",
  },
  "viatris-vclub": {
    gradient: "from-sky-950 via-cyan-950 to-slate-900",
    glyph: "VC",
    iconSrc: "/projects/vclub_app_icon.png",
  },
};

const SWIPE_THRESHOLD = 56;

export function ProjectPhoneShowcase({ projects, messages }: ProjectPhoneShowcaseProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      if (next < 0 || next >= projects.length || next === index) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [projects.length, index],
  );

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  const project = projects[index];
  const item = messages.items[project.id];
  const theme = PROJECT_THEMES[project.id] ?? {
    gradient: "from-slate-900 via-slate-800 to-slate-950",
    glyph: "App",
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 280 : -280, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -280 : 280, opacity: 0 }),
  };

  return (
    <div className="mt-12">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 xl:gap-10">
        {/* Left — description (desktop) */}
        <div className="hidden lg:block lg:pr-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`left-${project.id}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {messages.platforms[project.platform]}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-2">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center — phone */}
        <div className="flex flex-col items-center">
          <p className="mb-4 font-mono text-xs text-ink-3 lg:hidden">{messages.swipeHint}</p>

          <div className="relative">
            <div className="phone-shell w-[260px] sm:w-[280px]">
              <div className="phone-notch" aria-hidden="true" />
              <motion.div
                className="phone-screen relative touch-pan-y"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={onDragEnd}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={project.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`absolute inset-0 flex flex-col bg-gradient-to-br ${theme.gradient} p-5`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-medium text-white/70">
                      <span>9:41</span>
                      <span className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-white/80" />
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                      </span>
                    </div>

                    <div className="mt-8 flex flex-1 flex-col">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-white/10 text-lg font-bold tracking-wide text-white backdrop-blur">
                        {theme.iconSrc ? (
                          // Using <img> keeps static export simple.
                          <img
                            src={theme.iconSrc}
                            alt={`${item.title} icon`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          theme.glyph
                        )}
                      </div>
                      <p className="mt-5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                        {messages.platforms[project.platform]}
                      </p>
                      <h4 className="mt-2 text-center text-base font-semibold leading-snug text-white">
                        {item.title}
                      </h4>
                      <p className="mt-3 line-clamp-4 text-center text-xs leading-5 text-white/75">
                        {item.description}
                      </p>
                      <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/20 bg-black/20 px-2 py-0.5 font-mono text-[9px] text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <div className="h-1 w-24 rounded-full bg-white/30" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="absolute top-1/2 -left-12 hidden -translate-y-1/2 rounded-full border border-line bg-panel/80 p-2 text-ink-2 transition-colors hover:border-accent hover:text-accent disabled:opacity-30 sm:flex"
              aria-label={messages.prev}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === projects.length - 1}
              className="absolute top-1/2 -right-12 hidden -translate-y-1/2 rounded-full border border-line bg-panel/80 p-2 text-ink-2 transition-colors hover:border-accent hover:text-accent disabled:opacity-30 sm:flex"
              aria-label={messages.next}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="mt-4 hidden font-mono text-xs text-ink-3 lg:block">{messages.swipeHint}</p>

          <div className="mt-5 flex items-center gap-2">
            {projects.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-2 bg-line hover:bg-ink-3"
                }`}
                aria-label={`${messages.items[p.id].title} (${i + 1}/${projects.length})`}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>

        {/* Right — outcome (desktop) */}
        <div className="hidden lg:block lg:pl-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`right-${project.id}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
              transition={{ duration: 0.25 }}
              className="surface-card p-6"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ink-3">
                {messages.outcome}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink-2">{item.outcome}</p>
              <p className="mt-6 font-mono text-xs text-ink-3">
                {index + 1} / {projects.length}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile details below phone */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`mobile-${project.id}`}
          custom={direction}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="mt-8 surface-card p-6 lg:hidden"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {messages.platforms[project.platform]}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-2">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ink-3">
            {messages.outcome}
          </p>
          <p className="mt-2 text-sm leading-6 text-ink-2">{item.outcome}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
