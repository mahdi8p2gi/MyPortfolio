import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 25 });
  const springY = useSpring(y, { stiffness: 350, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.1);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base = "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all cursor-pointer overflow-hidden group";

  const variants = {
    primary: "bg-accent-primary hover:bg-accent-secondary text-white shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30",
    secondary: "bg-bg-elevated border border-border-default hover:border-border-hover text-text-primary hover:bg-bg-glass shadow-sm",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-[15px]",
  };

  const sharedProps = {
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.98 } as const,
    className: cn(base, variants[variant], sizes[size], disabled && "opacity-60 cursor-not-allowed pointer-events-none", className),
  };

  const shimmer = variant === "primary" && (
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
  );

  if (href) {
    return (
      <motion.a
        // @ts-expect-error motion ref typing
        ref={ref}
        href={href}
        {...sharedProps}
      >
        {shimmer}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      // @ts-expect-error motion ref typing
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...sharedProps}
    >
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
