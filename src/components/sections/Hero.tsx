import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { SOCIAL_LINKS } from "@/utils/constants";

const TITLES = ["Creative Developer", "Digital Architect", "UI Engineer", "Design Technologist"];

/* ═══════════════════════════════════════════════════════════════
   ANIMATED GRADIENT ORB — CSS-only, no Three.js
   ═══════════════════════════════════════════════════════════════ */
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Main center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-secondary/15 to-accent-cyan/10 blur-[120px] animate-orb" />
      
      {/* Top accent */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent-primary/10 blur-[100px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[15%] w-[300px] h-[300px] rounded-full bg-accent-secondary/8 blur-[80px] animate-float" />
      <div className="absolute bottom-1/4 right-[15%] w-[250px] h-[250px] rounded-full bg-accent-cyan/8 blur-[80px] animate-float-delayed" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING GLASS CARDS — Decorative elements
   ═══════════════════════════════════════════════════════════════ */
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Left floating card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-1/3 left-[8%] hidden lg:block"
      >
        <div className="w-48 h-32 rounded-2xl glass p-4 animate-float">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-accent-emerald" />
            <span className="text-[10px] font-mono text-text-muted">EXPERIENCE</span>
          </div>
          <div className="text-3xl font-display font-bold text-text-primary">8+</div>
          <div className="text-xs text-text-secondary">Years of craft</div>
        </div>
      </motion.div>

      {/* Right floating card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-1/2 right-[8%] hidden lg:block"
      >
        <div className="w-52 h-28 rounded-2xl glass p-4 animate-float-delayed">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-primary" />
            <span className="text-[10px] font-mono text-text-muted">PROJECTS</span>
          </div>
          <div className="text-2xl font-display font-bold text-text-primary">150+</div>
          <div className="text-xs text-text-secondary">Shipped to production</div>
        </div>
      </motion.div>

      {/* Bottom left tech badge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-[20%] left-[12%] hidden xl:block"
      >
        <div className="px-4 py-2 rounded-full glass text-xs font-mono text-text-secondary flex items-center gap-2 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          React • TypeScript • Next.js
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED TEXT WITH STAGGER
   ═══════════════════════════════════════════════════════════════ */
function AnimatedHeadline() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setIsVisible(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-display font-bold text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-tight"
      >
        <span className="block text-text-primary">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="gradient-text">Mahdi</span>
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-primary to-accent-secondary origin-left rounded-full"
            />
          </span>
        </span>
        <span className="block mt-2 h-[1.1em] overflow-hidden">
          <motion.span
            key={titleIndex}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: isVisible ? 0 : -40, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block gradient-text"
          >
            {TITLES[titleIndex]}
          </motion.span>
        </span>
      </motion.h1>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL ICONS
   ═══════════════════════════════════════════════════════════════ */
function SocialIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    github: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    linkedin: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    twitter: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    dribbble: <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.29zm10.335 3.483c-.218.29-1.89 2.478-5.64 4.023.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.4-6.37z"/></svg>,
  };
  return icons[icon] || null;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN HERO COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      
      {/* Gradient orbs */}
      <GradientOrbs />

      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
        {/* Headline */}
        <AnimatedHeadline />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto max-w-2xl mt-8 text-lg md:text-xl text-text-secondary leading-relaxed"
        >
          I design and build{" "}
          <span className="text-text-primary font-medium">exceptional digital experiences</span>{" "}
          that combine stunning visuals with flawless performance. Specializing in
          modern web applications and creative development.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <MagneticButton variant="primary" size="lg" href="#projects">
            View My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MagneticButton>
          <MagneticButton variant="secondary" size="lg" href="#contact">
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-2 mt-14"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-glass border border-transparent hover:border-border-default transition-all duration-200"
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-border-default flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
