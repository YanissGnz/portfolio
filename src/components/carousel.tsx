"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Carousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (images.length <= 1) {
    return (
      <div className="rounded-2xl overflow-hidden border border-border mb-8">
        <img src={images[0]} alt="Project" className="w-full aspect-video object-cover" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative rounded-2xl overflow-hidden border border-border mb-8"
    >
      <div className="relative aspect-video bg-background">
        <img
          src={images[current]}
          alt={`Image ${current + 1}`}
          className="w-full h-full object-cover"
        />

        <button
          onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
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
  );
}
