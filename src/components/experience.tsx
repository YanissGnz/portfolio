"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import experienceData from "@/data/experience.json";

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } } as const;
const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;
const timelineItem = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px"
            style={{ transformOrigin: "top", background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3), rgba(139,92,246,0.3), transparent)" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={timelineItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={`relative pl-8 md:pl-0 md:w-1/2 mb-12 ${
                idx % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full ring-4 ring-background"
                style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
              />

              <motion.div
                className="p-6 rounded-2xl border border-border bg-card hover:border-transparent transition-colors relative overflow-hidden group"
                whileHover={{ y: -2 }}
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
                  {exp.period}
                </motion.span>
                <h3 className="text-xl font-semibold mt-1">{exp.role}</h3>
                <p className="text-muted font-medium">{exp.company}</p>
                <motion.p
                  className="text-muted text-sm mt-3 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + idx * 0.15 }}
                >
                  {exp.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
