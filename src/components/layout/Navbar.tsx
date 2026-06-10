import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/utils/constants";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isDrawerOpen]);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      {/* Main Header — Solid background, no glass effect */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3" : "py-4",
          "bg-bg-primary" // Always solid background
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <a href="#" className="relative z-50 flex items-center gap-2.5 group" aria-label="Home">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-lg shadow-accent-primary/20 group-hover:shadow-accent-primary/30 transition-all">
              <span className="text-white font-display font-bold text-sm">M</span>
            </div>
            <span className="font-display font-semibold text-text-primary text-lg tracking-tight hidden sm:block">
              mahdi<span className="text-accent-primary">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-glass relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent-primary group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-glass border border-transparent hover:border-border-default transition-all cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-accent-primary hover:bg-accent-secondary text-white transition-colors shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30"
            >
              Let&apos;s Talk
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative z-50 md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer rounded-xl hover:bg-bg-glass transition-colors"
              aria-label="Open menu"
            >
              <span className="w-5 h-0.5 bg-text-primary block" />
              <span className="w-5 h-0.5 bg-text-primary block" />
              <span className="w-3.5 h-0.5 bg-text-primary block self-end mr-[7px]" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-bg-primary border-l border-border-default md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-border-default">
                <span className="font-display font-semibold text-text-primary">Menu</span>
                <button
                  onClick={closeDrawer}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-glass transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Navigation */}
              <nav className="flex-1 p-5 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={closeDrawer}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-glass transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="p-5 border-t border-border-default space-y-4">
                <a
                  href="#contact"
                  onClick={closeDrawer}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-accent-primary hover:bg-accent-secondary text-white font-medium transition-colors"
                >
                  Let&apos;s Talk
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
                <p className="text-xs text-text-muted text-center">
                  © 2024 Mahdi Karimi
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
