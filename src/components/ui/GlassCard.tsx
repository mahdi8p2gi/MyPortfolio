import { type ReactNode, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}

export default function GlassCard({ children, className, tilt = false }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !tilt) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.08), transparent 70%)
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ background: tilt ? background : undefined }}
      className={cn(
        "relative rounded-2xl border border-border-default bg-bg-elevated overflow-hidden",
        "shadow-sm shadow-black/[0.02]",
        "dark:shadow-none",
        "transition-colors duration-200 hover:border-border-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
