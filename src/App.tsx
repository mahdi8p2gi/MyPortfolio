import { Suspense, lazy } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import GridBackground from "@/components/effects/GridBackground";
import SectionDivider from "@/components/ui/SectionDivider";
import BackToTop from "@/components/ui/BackToTop";

const About = lazy(() => import("@/components/sections/About"));
const Skills = lazy(() => import("@/components/sections/Skills"));
const Projects = lazy(() => import("@/components/sections/Projects"));
const Experience = lazy(() => import("@/components/sections/Experience"));
const Stats = lazy(() => import("@/components/sections/Stats"));
const Contact = lazy(() => import("@/components/sections/Contact"));
const Footer = lazy(() => import("@/components/layout/Footer"));

function SectionFallback() {
  return (
    <div className="min-h-[30vh] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <GridBackground />
      <Navbar />

      <main>
        <Hero />

        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Stats />
        </Suspense>

        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <BackToTop />
    </div>
  );
}
