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
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-8 border-t border-border">
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
