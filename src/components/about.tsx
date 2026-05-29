"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutData from "@/data/about.json";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;
const imageItem = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" as const },
  },
} as const;

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
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

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.p variants={item} className="text-accent font-mono text-sm mb-3">
              01. ABOUT ME
            </motion.p>
            <motion.h2 variants={item} className="text-3xl sm:text-4xl font-bold mb-6">
              {aboutData.heading}
            </motion.h2>
            <motion.div variants={item} className="space-y-4 text-muted leading-relaxed">
              {aboutData.bio.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          <motion.div variants={imageItem} className="relative flex justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden relative border border-border">
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-purple))" }} />
              <img
                src="/avatar.png"
                alt="Yaniss Guendouzi"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
