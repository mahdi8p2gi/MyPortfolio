import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/utils/constants";
import { cn } from "@/utils/cn";

export default function Experience() {
  const [activeId, setActiveId] = useState<number>(EXPERIENCES[0].id);
  const active = EXPERIENCES.find((e) => e.id === activeId) ?? EXPERIENCES[0];

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden" aria-label="Experience">
      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] rounded-full bg-accent-primary/5 blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Career"
          title="Professional Journey"
          description="Key roles where I've grown as an engineer and made meaningful impact."
        />

        {/* Mobile: Vertical tabs + content below */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Tab Selector */}
          <div className="grid grid-cols-2 gap-3">
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={cn(
                  "relative text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer",
                  activeId === exp.id
                    ? "bg-bg-elevated border-accent-primary/30 shadow-md"
                    : "bg-bg-glass border-border-default hover:border-border-hover"
                )}
              >
                {activeId === exp.id && (
                  <motion.div
                    layoutId="activeMobileExp"
                    className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-accent-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="flex items-center gap-2.5 mb-1.5 pl-2">
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-bold shrink-0",
                    activeId === exp.id
                      ? "bg-accent-primary/15 text-accent-primary"
                      : "bg-bg-tertiary text-text-muted"
                  )}>
                    {exp.logo}
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn(
                      "font-semibold text-sm truncate",
                      activeId === exp.id ? "text-text-primary" : "text-text-secondary"
                    )}>
                      {exp.company}
                    </h3>
                    <p className="text-[10px] text-text-muted font-mono">{exp.period}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-border-default bg-bg-elevated p-6 shadow-sm"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                {active.period}
              </span>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                {active.role}
              </h3>
              <p className="text-base font-medium text-accent-secondary mb-4">{active.company}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {active.description}
              </p>
              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {active.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-bg-glass border border-border-default text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Left: Role selector cards */}
          <div className="flex flex-col gap-3">
            {EXPERIENCES.map((exp, i) => (
              <motion.button
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setActiveId(exp.id)}
                className={cn(
                  "relative w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer group",
                  activeId === exp.id
                    ? "bg-bg-elevated border-accent-primary/30 shadow-lg shadow-accent-primary/5"
                    : "bg-bg-glass border-border-default hover:border-border-hover hover:bg-bg-glass-hover"
                )}
              >
                {/* Active indicator */}
                {activeId === exp.id && (
                  <motion.div
                    layoutId="activeExp"
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-accent-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-display font-bold shrink-0 transition-colors",
                    activeId === exp.id
                      ? "bg-accent-primary/15 text-accent-primary"
                      : "bg-bg-tertiary text-text-muted group-hover:text-text-secondary"
                  )}>
                    {exp.logo}
                  </div>
                  <div className="min-w-0">
                    <h3 className={cn(
                      "font-display font-semibold text-sm truncate transition-colors",
                      activeId === exp.id ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                    )}>
                      {exp.company}
                    </h3>
                    <p className="text-xs text-text-muted font-mono">{exp.period}</p>
                  </div>
                </div>
                <p className={cn(
                  "text-xs truncate transition-colors pl-[52px]",
                  activeId === exp.id ? "text-accent-primary" : "text-text-muted"
                )}>
                  {exp.role}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right: Detail card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border-default bg-bg-elevated p-8 md:p-10 shadow-sm relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                      {active.period}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary mb-1">
                      {active.role}
                    </h3>
                    <p className="text-lg font-medium text-accent-secondary">{active.company}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-2xl font-display font-bold text-accent-primary shrink-0">
                    {active.logo}
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-8">
                  {active.description}
                </p>

                {/* Technologies */}
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {active.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-bg-glass border border-border-default text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-primary/5 to-transparent rounded-tr-2xl pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
