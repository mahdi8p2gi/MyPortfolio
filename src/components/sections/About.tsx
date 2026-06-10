import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const EXPERTISE_AREAS = [
  {
    title: "Frontend Architecture",
    description: "Building scalable, performant interfaces with React, Next.js, and TypeScript that handle millions of users.",
    icon: "⚡",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/20",
  },
  {
    title: "Creative Development",
    description: "Crafting immersive experiences with WebGL, Three.js, and advanced animations that captivate users.",
    icon: "✨",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
  },
  {
    title: "Design Systems",
    description: "Creating cohesive component libraries and design tokens that scale across products and teams.",
    icon: "🎨",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/20",
  },
  {
    title: "Performance",
    description: "Obsessed with Core Web Vitals, bundle optimization, and delivering sub-second experiences.",
    icon: "🚀",
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/20",
  },
];

const TECH_STACK = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Three.js", icon: "🎮" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Node.js", icon: "💚" },
  { name: "Python", icon: "🐍" },
  { name: "Figma", icon: "🎯" },
];

const ACHIEVEMENTS = [
  { value: "8+", label: "Years Experience" },
  { value: "150+", label: "Projects Shipped" },
  { value: "50M+", label: "Users Reached" },
  { value: "99.9%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-label="About"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-primary/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Excellence"
        />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left column - Story */}
          <div className="lg:col-span-5 space-y-8">
            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl border border-border-default bg-bg-elevated p-8 overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-primary/10 to-transparent" />
                
                <div className="relative">
                  <p className="text-lg text-text-secondary leading-relaxed mb-6">
                    I'm a <span className="text-text-primary font-medium">multidisciplinary developer</span> with a passion for building products that make a difference. With over 8 years in the industry, I've shipped software used by millions.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    From real-time collaboration at <span className="text-accent-primary font-medium">Figma</span> to interactive experiments at <span className="text-accent-primary font-medium">Google Creative Lab</span>, I've had the privilege of working on products that shape how people create.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Currently at <span className="text-accent-primary font-medium">Vercel</span>, I focus on next-gen web experiences—combining cutting-edge frontend with thoughtful design.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-bg-glass border border-border-default hover:border-border-hover hover:bg-bg-glass-hover transition-all cursor-default"
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {ACHIEVEMENTS.map((item) => (
                <div key={item.label} className="text-center p-4 rounded-2xl bg-bg-glass border border-border-default">
                  <div className="text-2xl md:text-3xl font-display font-bold gradient-text mb-1">{item.value}</div>
                  <div className="text-xs text-text-muted">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Expertise cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {EXPERTISE_AREAS.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                  
                  <div className={`relative h-full rounded-2xl border ${area.borderColor} bg-bg-elevated p-6 group-hover:border-border-hover transition-all duration-300`}>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-bg-glass border border-border-default flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-accent-secondary/5 to-accent-cyan/5 rounded-2xl" />
              <div className="relative rounded-2xl border border-border-default p-6 flex items-start gap-4">
                <svg className="w-10 h-10 text-accent-primary/30 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <div>
                  <p className="text-text-secondary italic leading-relaxed mb-3">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </p>
                  <p className="text-sm font-medium text-text-primary">— Steve Jobs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
