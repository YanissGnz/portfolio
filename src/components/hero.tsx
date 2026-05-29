"use client";

import { motion } from "framer-motion";
import heroData from "@/data/hero.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
} as const;

const socialLinks = [
  { icon: FaGithub, href: heroData.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: heroData.social.linkedin, label: "LinkedIn" },
  { icon: FaFacebook, href: heroData.social.facebook, label: "Facebook" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-start sm:items-center relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-float-medium"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl animate-float-fast"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 pt-20 sm:pt-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="text-accent font-mono text-sm mb-6">
            Hi, I'm
          </motion.p>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            {heroData.name.split(" ")[0]}
            {" "}
            <span className="text-gradient">
              {heroData.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.h2 variants={item} className="text-2xl sm:text-3xl text-muted font-light mt-4">
            {heroData.title}
          </motion.h2>

          <motion.p variants={item} className="text-lg text-muted mt-6 max-w-xl leading-relaxed">
            {heroData.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-background font-medium rounded-full hover:opacity-90 transition-opacity relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
            >
              {heroData.ctaPrimary}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-purple hover:text-purple transition-colors"
            >
              {heroData.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div variants={item} className="flex gap-4 mt-10">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:text-accent hover:bg-accent-subtle transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}
