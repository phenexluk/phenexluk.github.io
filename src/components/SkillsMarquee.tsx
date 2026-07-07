import { skillGroups } from "@/lib/data";

const marqueeSkills = skillGroups.flatMap((g) => g.skills);

export function SkillsMarquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="relative z-10 border-y border-line/70 bg-panel/40 py-2 backdrop-blur-sm">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {items.map((skill, i) => (
            <span key={`${skill}-${i}`} className="inline-flex items-center gap-2 px-5 font-mono text-xs">
              <span className="font-semibold text-ink-2">{skill}</span>
              <span className="text-line">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
