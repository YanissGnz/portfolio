"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import contactData from "@/data/contact.json";
import heroData from "@/data/hero.json";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { FaGlobe, FaBriefcase } from "react-icons/fa";

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } } as const;
const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;
const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const freelanceLinks = [
  { icon: FaGlobe, href: heroData.social.fiverr, label: "Fiverr" },
  { icon: FaBriefcase, href: heroData.social.upwork, label: "Upwork" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.p variants={headingItem} className="text-accent font-mono text-sm mb-3">
            06. CONTACT
          </motion.p>
          <motion.h2 variants={headingItem} className="text-3xl sm:text-4xl font-bold mb-4">
            {contactData.heading}
          </motion.h2>
          <motion.p variants={headingItem} className="text-xl text-muted mb-8">
            {contactData.subheading}
          </motion.p>
          <motion.p
            variants={item}
            className="text-muted max-w-xl mx-auto mb-12 leading-relaxed"
          >
            {contactData.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${heroData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Mail size={18} />
              <span>{heroData.email}</span>
            </a>
            <a
              href={`tel:${heroData.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-purple hover:text-purple transition-colors"
            >
              <Phone size={18} />
              <span>{heroData.phone}</span>
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {freelanceLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-background font-medium rounded-full hover:opacity-90 transition-opacity relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #06b6d4, #8b5cf6)" }}
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(heroData.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-purple hover:text-purple transition-colors"
            >
              <MapPin size={18} />
              <span>{heroData.location}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
