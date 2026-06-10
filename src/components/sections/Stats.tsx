import { motion } from "framer-motion";
import { STATS } from "@/utils/constants";
import { useInView } from "@/hooks/useInView";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

function StatItem({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useAnimatedCounter(stat.value, isInView, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative text-center group"
    >
      <div className="relative px-4 py-8 rounded-2xl bg-bg-elevated border border-border-default hover:border-border-hover transition-all duration-200 shadow-sm">
        <div className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-2">
          <span className="gradient-text">{count}</span>
          <span className="text-accent-primary">{stat.suffix}</span>
        </div>
        <p className="text-sm text-text-secondary">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" aria-label="Statistics">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
