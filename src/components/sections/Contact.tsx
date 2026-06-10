import { useState, useCallback, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { cn } from "@/utils/cn";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email address";
  }
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "themahdikga@gmail.com",
    href: "mailto:themahdikga@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Open to Remote & On-site",
    href: "#",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Availability",
    value: "Open to opportunities",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
    },
    [formData]
  );

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden" aria-label="Contact">
      <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-accent-primary/5 blur-[180px] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title="Let's Build Together"
          description="Have a project in mind? I'd love to hear about it. Drop me a message and let's create something extraordinary."
        />

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-bg-elevated border border-border-default hover:border-border-hover transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-primary/10 text-accent-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-0.5">{info.label}</p>
                    <p className="text-text-primary font-medium group-hover:text-accent-primary transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-primary/5 via-accent-secondary/5 to-accent-cyan/5 border border-border-default">
              <svg className="w-8 h-8 text-accent-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              <p className="text-text-secondary italic leading-relaxed text-sm">
                &quot;The best way to predict the future is to create it. Let&apos;s build something that matters.&quot;
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-accent-primary/5 border border-accent-primary/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mb-5"
                  >
                    <svg className="w-8 h-8 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary mb-5 text-sm">Thank you! I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-sm text-accent-primary hover:underline cursor-pointer">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border-default bg-bg-elevated p-6 sm:p-8 space-y-5 shadow-sm"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Name" value={formData.name} onChange={(v) => handleChange("name", v)} error={errors.name} placeholder="Your name" required />
                    <FormField label="Email" type="email" value={formData.email} onChange={(v) => handleChange("email", v)} error={errors.email} placeholder="you@example.com" required />
                  </div>
                  <FormField label="Subject" value={formData.subject} onChange={(v) => handleChange("subject", v)} placeholder="Project collaboration" />
                  <FormField label="Message" value={formData.message} onChange={(v) => handleChange("message", v)} error={errors.message} placeholder="Tell me about your project..." multiline required />
                  <MagneticButton variant="primary" size="lg" type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}

function FormField({ label, value, onChange, error, placeholder, type = "text", multiline = false, required = false }: FormFieldProps) {
  const inputStyles = cn(
    "w-full bg-bg-glass border rounded-xl px-4 py-3 text-sm text-text-primary",
    "placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/20",
    "focus:border-accent-primary/40 transition-all duration-200",
    error ? "border-accent-rose/50" : "border-border-default hover:border-border-hover"
  );

  return (
    <div>
      <label className="block text-xs font-mono font-medium text-text-secondary uppercase tracking-wider mb-2">
        {label}
        {required && <span className="text-accent-rose ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={5} className={cn(inputStyles, "resize-none")} aria-invalid={!!error} />
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className={inputStyles} aria-invalid={!!error} />
      )}
      {error && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs text-accent-rose" role="alert">
          {error}
        </motion.p>
      )}
    </div>
  );
}
