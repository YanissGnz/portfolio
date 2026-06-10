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
    <div ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.h2 variants={headingItem} className="text-2xl sm:text-3xl font-bold">
            Academic Background
          </motion.h2>
        </motion.div>

        <motion.div variants={container} className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              variants={cardItem}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-transparent transition-all duration-300 group relative overflow-hidden"
            >
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
    </div>
  );
}
