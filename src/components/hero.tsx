"use client";

import { motion } from "framer-motion";
import heroData from "@/data/hero.json";
import Link from "next/link";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
const imageItem = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.6, ease: "easeOut" as const },
  },
} as const;

const socialLinks = [
  { icon: FaGithub, href: heroData.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: heroData.social.linkedin, label: "LinkedIn" },

];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-start sm:items-center relative overflow-hidden snap-start"
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
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
              {heroData.tagline}
            </motion.h2>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-background font-medium rounded-full hover:opacity-90 transition-opacity relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
              >
                <Download size={16} />
                Resume
              </a>
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-purple hover:text-purple transition-colors"
              >
                {heroData.ctaPrimary}
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors"
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

          <motion.div
            variants={imageItem}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan to-purple blur-3xl opacity-20 animate-pulse-glow" />
              <img
                src={heroData.avatar}
                alt={heroData.name}
                className="w-full h-full object-cover rounded-full border-2 border-border"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: "var(--color-muted)", opacity: 0.3 }}>
          <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: "var(--color-muted)", opacity: 0.5 }} />
        </div>
      </motion.div>
    </section>
  );
}
