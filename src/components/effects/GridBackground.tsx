import { useEffect, useRef } from "react";

export default function GridBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.setProperty("--gx", `${e.clientX}px`);
          glowRef.current.style.setProperty("--gy", `${e.clientY}px`);
        }
      });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "radial-gradient(600px circle at var(--gx, 50%) var(--gy, 50%), rgba(99,102,241,0.04), transparent 60%)",
        }}
      />
      
      {/* Top radial gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: "var(--gradient-radial-dark)",
        }}
      />
    </div>
  );
}
