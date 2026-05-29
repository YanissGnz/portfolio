"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import projectsData from "@/data/projects.json";


const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
} as const;
const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;
const cardItem = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl animate-float-medium"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.p variants={headingItem} className="text-accent font-mono text-sm mb-3">
            03. PROJECTS
          </motion.p>
          <motion.h2 variants={headingItem} className="text-3xl sm:text-4xl font-bold">
            Featured Work
          </motion.h2>
        </motion.div>

        <motion.div variants={container}>
          {projectsData.map((project, idx) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.title}
              className="block mb-16 last:mb-0"
            >
              <motion.div
                variants={cardItem}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-transparent transition-all duration-300 relative"
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,182,212,0.4), rgba(139,92,246,0.4))",
                    padding: "1px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />

                <div className="flex flex-col md:flex-row">
                  {/* Project image */}
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Project info */}
                  <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
