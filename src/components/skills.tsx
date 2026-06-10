"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import skillsData from "@/data/skills.json";

const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingItem}
          className="text-center mb-12"
        >
          <motion.h2 variants={headingItem} className="text-2xl sm:text-3xl font-bold">
            Skills & Technologies
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, catIdx) => (
            <SkillCard
              key={category.category}
              category={category}
              catIdx={catIdx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ category, catIdx, isInView }: { category: typeof skillsData[0]; catIdx: number; isInView: boolean }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

  const levelColors: Record<string, string> = {
    Expert: "#06b6d4",
    Proficient: "#8b5cf6",
    Skilled: "#60a5fa",
    Intermediate: "#93c5fd",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: catIdx * 0.1 }}
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
      <h3 className="text-lg font-semibold mb-4 relative z-10 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
        {category.category}
      </h3>
      <div className="space-y-3 relative z-10">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} levelColors={levelColors} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, levelColors }: { skill: typeof skillsData[0]["skills"][0]; levelColors: Record<string, string> }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm">{skill.name}</span>
      <span
        className="text-xs px-2 py-0.5 rounded-full"
        style={{
          background: `${levelColors[skill.level]}20`,
          color: levelColors[skill.level],
        }}
      >
        {skill.level}
      </span>
    </div>
  );
}
