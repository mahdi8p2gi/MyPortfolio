import { motion } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-default" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/[0.02] to-transparent pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">M</span>
              </div>
              <span className="font-display font-semibold text-text-primary text-lg tracking-tight">
                mahdi<span className="text-accent-primary">.dev</span>
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Building premium digital experiences at the intersection of design, technology, and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-mono font-medium text-text-muted uppercase tracking-wider mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xs font-mono font-medium text-text-muted uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center gap-2">
                    {link.label}
                    <svg className="w-3 h-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">© {currentYear} Mahdi Karimi. Crafted with precision.</p>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <span>Built with</span>
            <span className="text-accent-rose">♥</span>
            <span>using React & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
