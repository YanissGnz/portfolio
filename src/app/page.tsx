import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import heroData from "@/data/hero.json";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about" className="snap-start py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-medium"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-16">
          <p className="text-accent font-mono text-sm mb-3">01. ABOUT</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </div>
        <About />
        <div className="mt-16">
          <Skills />
        </div>
        <div className="mt-16">
          <Education />
        </div>
      </section>
      <section id="experience" className="snap-start py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full blur-3xl animate-float-fast"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl animate-float-slow"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-16">
          <p className="text-accent font-mono text-sm mb-3">02. EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        </div>
        <Experience />
        <div className="mt-16">
          <Projects />
        </div>
      </section>
      <Contact />
      <footer className="py-8 border-t border-border snap-start">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted">
          <p>Designed & Built by {heroData.name}</p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
