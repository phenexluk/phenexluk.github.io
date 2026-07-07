"use client";

import { motion } from "framer-motion";
import type { Messages } from "@/lib/data";
import { skillGroups } from "@/lib/data";

type KeySkillsProps = {
  messages: Messages;
};

export function KeySkills({ messages }: KeySkillsProps) {
  const s = messages.skills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mt-12"
    >
      <p className="section-kicker">{s.kicker}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        {s.title}
      </h2>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
          >
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
              {s.groups[group.id]}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
