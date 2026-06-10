import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ 
  label, 
  title, 
  description,
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 md:mb-18 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-accent-primary/10 text-accent-primary border border-accent-primary/20 mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold tracking-tight text-text-primary mb-5"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
