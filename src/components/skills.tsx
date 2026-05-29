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

  const levelColors: Record<string, string> = {
    Expert: "#06b6d4",
    Proficient: "#8b5cf6",
    Skilled: "#60a5fa",
    Intermediate: "#93c5fd",
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl animate-float-medium"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingItem}
          className="text-center mb-16"
        >
          <motion.p variants={headingItem} className="text-accent font-mono text-sm mb-3">
            02. SKILLS
          </motion.p>
          <motion.h2 variants={headingItem} className="text-3xl sm:text-4xl font-bold">
            My Skills
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
    </section>
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
      <h3 className="text-lg font-semibold mb-4 relative z-10 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">
        {category.category}
      </h3>
      <div className="space-y-3 relative z-10">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} isInView={cardInView} levelColors={levelColors} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, isInView, levelColors }: { skill: typeof skillsData[0]["skills"][0]; isInView: boolean; levelColors: Record<string, string> }) {
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true, margin: "-20px" });

  const width = skill.level === "Expert" ? 100 : skill.level === "Proficient" ? 80 : skill.level === "Skilled" ? 65 : 45;

  return (
    <motion.div ref={barRef} initial={{ opacity: 0, x: -10 }} animate={barInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.3, delay: 0.1 }}>
      <div className="flex justify-between items-center mb-1">
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
      <div className="h-1.5 rounded-full bg-border overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, #06b6d4, #8b5cf6)`,
          }}
          initial={{ width: 0 }}
          animate={barInView ? { width: `${width}%` } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
