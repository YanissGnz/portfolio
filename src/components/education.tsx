"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import educationData from "@/data/education.json";

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } } as const;
const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;
const cardItem = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float-medium"
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
            05. EDUCATION
          </motion.p>
          <motion.h2 variants={headingItem} className="text-3xl sm:text-4xl font-bold">
            Academic Background
          </motion.h2>
        </motion.div>

        <motion.div variants={container} className="grid md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-transparent transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))",
                  padding: "1px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                }}
              />
              <motion.span
                className="text-sm text-accent font-mono"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + idx * 0.15 }}
              >
                {edu.period}
              </motion.span>
              <h3 className="text-lg font-semibold mt-2 mb-2 relative z-10">{edu.degree}</h3>
              <p className="text-muted text-sm relative z-10">{edu.school}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
