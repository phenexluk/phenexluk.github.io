"use client";

import type { Messages } from "@/lib/data";
import { projects } from "@/lib/data";
import { ProjectPhoneShowcase } from "./ProjectPhoneShowcase";

type ProjectsProps = {
  messages: Messages;
};

export function Projects({ messages }: ProjectsProps) {
  const p = messages.projects;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="section-kicker">{p.kicker}</p>
        <h2 className="mt-4 section-title">{p.title}</h2>
        <p className="mt-4 text-base leading-7 text-ink-2">{p.subtitle}</p>

        <ProjectPhoneShowcase projects={projects} messages={p} />

        <div className="mt-16">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-ink-3">
            {p.viewAll}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((project) => {
              const item = p.items[project.id];
              return (
                <article
                  key={project.id}
                  className="surface-card p-6 transition-shadow hover:shadow-glow"
                >
                  <p className="font-mono text-xs text-accent">{p.platforms[project.platform]}</p>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-2">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
