"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";
import { useState } from "react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Project not found</p>
      </div>
    );
  }

  const [current, setCurrent] = useState(0);

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold mb-2"
        >
          {project.title}
        </motion.h1>
        <p className="text-accent font-mono text-sm mb-8">{project.role}</p>

        {/* Carousel */}
        {project.images.length > 1 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-border mb-8"
          >
            <div className="relative aspect-video bg-background">
              <img
                src={project.images[current]}
                alt={`Image ${current + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % project.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === current ? "bg-accent w-6" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-border mb-8">
            <img src={project.images[0]} alt={project.title} className="w-full aspect-video object-cover" />
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-foreground leading-relaxed text-lg">{project.fullDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1.5 rounded-full bg-background border border-border text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <FaGithub size={16} />
            Code
          </a>
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-purple text-background opacity-50 cursor-not-allowed"
          >
            <ExternalLink size={16} />
            Live Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
