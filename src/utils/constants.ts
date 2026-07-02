export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/mahdi8p2gi", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Telegram", href: "https://twitter.com", icon: "telegram" },
  { label: "Instagram", href: "https://dribbble.com", icon: "instagram" },
] as const;

export const SKILLS = [
  { name: "React / Next.js", level: 97, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "Three.js / WebGL", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 96, category: "frontend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Python", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 87, category: "backend" },
  { name: "GraphQL", level: 82, category: "backend" },
  { name: "AWS / Cloud", level: 84, category: "devops" },
  { name: "Docker / K8s", level: 80, category: "devops" },
  { name: "CI/CD", level: 88, category: "devops" },
  { name: "Figma / Design", level: 78, category: "design" },
] as const;

export const PROJECTS = [
  {
    id: 1,
    title: "Cafe noir",
    description:
      "Enterprise-grade real-time analytics dashboard processing 10M+ events daily. Features interactive data visualization, customizable widgets, and AI-powered anomaly detection with sub-second query performance.",
    image: "/src/assets/images/cafe-shot-1.png",
    tags: ["Next.js", "D3.js", "Node.js", "Vercel"],
    category: "fullstack",
    liveUrl: "https://cafe-noir-shop.vercel.app/",
    githubUrl: "https://github.com/mahdi8p2gi/cafe-noir-shop",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Luxe Storefront",
    description:
      "High-conversion e-commerce platform for luxury brands with headless CMS, AI-powered product recommendations, and server-side rendering achieving 98+ Lighthouse scores.",
    image: "/images/project-2.jpg",
    tags: ["Next.js", "Stripe", "Sanity", "Vercel"],
    category: "fullstack",
    liveUrl: "https://luxe-store.demo",
    githubUrl: "https://github.com/mahdi8p2gi",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Prism Design System",
    description:
      "Comprehensive design system and component library powering 12+ products across the organization. Includes 80+ accessible components, documentation, and Figma integration.",
    image: "/images/project-3.jpg",
    tags: ["React", "Storybook", "Tailwind", "Radix UI"],
    category: "frontend",
    liveUrl: "https://prism-ds.demo",
    githubUrl: "https://github.com/mahdi8p2gi",
    color: "#22d3ee",
  },
  {
    id: 4,
    title: "Neural Canvas",
    description:
      "AI-powered design tool that transforms sketches into production-ready UI components. Uses GPT-4 Vision for interpretation and generates clean React + Tailwind code in real-time.",
    image: "/images/project-4.jpg",
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    category: "ai",
    liveUrl: "https://neural-canvas.demo",
    githubUrl: "https://github.com/mahdi8p2gi",
    color: "#34d399",
  },
  {
    id: 5,
    title: "FlowBoard",
    description:
      "Real-time project management platform with Kanban boards, Gantt charts, and AI-assisted sprint planning. Built for distributed teams with live collaboration via CRDTs.",
    image: "/images/project-5.jpg",
    tags: ["Next.js", "tRPC", "Prisma", "WebSocket"],
    category: "fullstack",
    liveUrl: "https://flowboard.demo",
    githubUrl: "https://github.com/mahdi8p2gi",
    color: "#f43f5e",
  },
  {
    id: 6,
    title: "Resonance Chat",
    description:
      "End-to-end encrypted team communication platform with video conferencing, threaded discussions, and AI-powered meeting transcription serving 50K+ daily active users.",
    image: "/images/project-6.jpg",
    tags: ["React", "WebRTC", "Go", "Redis"],
    category: "fullstack",
    liveUrl: "https://resonance.demo",
    githubUrl: "https://github.com/mahdi8p2gi",
    color: "#f59e0b",
  },
] as const;

export const EXPERIENCES = [
  {
    id: 1,
    role: "Senior Creative Developer",
    company: "Vercel",
    period: "2023 — Present",
    description:
      "Leading the development of next-generation web experiences, building high-performance interactive tools used by millions of developers worldwide.",
    technologies: ["React", "Next.js", "TypeScript", "Three.js"],
    logo: "▲",
  },
  {
    id: 2,
    role: "Lead Frontend Engineer",
    company: "Stripe",
    period: "2021 — 2023",
    description:
      "Architected and built the new payment dashboard, reducing page load times by 60% and increasing developer productivity across the team.",
    technologies: ["React", "GraphQL", "Ruby", "WebGL"],
    logo: "S",
  },
  {
    id: 3,
    role: "Creative Technologist",
    company: "Google Creative Lab",
    period: "2019 — 2021",
    description:
      "Created award-winning interactive experiments and prototypes, pushing the boundaries of what's possible on the web platform.",
    technologies: ["JavaScript", "TensorFlow.js", "WebXR", "GLSL"],
    logo: "G",
  },
  {
    id: 4,
    role: "Full Stack Developer",
    company: "Figma",
    period: "2017 — 2019",
    description:
      "Built core collaboration features including real-time multiplayer editing, serving 4M+ designers with 99.99% uptime.",
    technologies: ["TypeScript", "C++", "WebAssembly", "React"],
    logo: "F",
  },
] as const;

export const STATS = [
  { label: "Years of Experience", value: 8, suffix: "+" },
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "GitHub Stars", value: 12, suffix: "K" },
  { label: "Lines of Code", value: 2, suffix: "M+" },
] as const;
