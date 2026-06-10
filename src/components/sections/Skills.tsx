import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/utils/constants";
import { cn } from "@/utils/cn";
import { useInView } from "@/hooks/useInView";

const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "devops", label: "DevOps" },
  { id: "design", label: "Design" },
] as const;

const TECH_ICONS = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Three.js", icon: "🎮" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-accent-primary transition-colors">{name}</span>
        <span className="text-xs font-mono text-text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-bg-tertiary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all" ? SKILLS : SKILLS.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden" aria-label="Skills">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          description="A deep toolkit of modern technologies, honed through years of building products at scale."
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer",
                activeCategory === cat.id
                  ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/20"
                  : "bg-bg-elevated border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 mb-16">
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <SkillBar name={skill.name} level={skill.level} delay={i * 0.05} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {TECH_ICONS.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-bg-elevated border border-border-default group-hover:border-border-hover group-hover:scale-105 transition-all duration-200 shadow-sm text-xl">
                {tech.icon}
              </div>
              <span className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
