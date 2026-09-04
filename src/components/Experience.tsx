"use client";

import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary inline-block pr-4">
          {">"} EXPERIENCE.list()
        </h2>
        <div className="h-px bg-primary/20 w-full max-w-xs mt-4"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-background border-2 border-primary/30 p-6 sm:p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,156,0.05)] hover:shadow-[0_0_30px_rgba(0,255,156,0.1)] transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 border-b border-primary/10 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">Software Engineering Intern (Flutter)</h3>
            <p className="text-primary mt-2 font-mono text-sm sm:text-base">AspireNet</p>
          </div>
          <div className="mt-4 md:mt-0 text-secondary text-sm font-mono bg-secondary/10 px-4 py-2 rounded-full w-fit">
            Dec 2025 – Jan 2026 • Remote
          </div>
        </div>
        
        <ul className="space-y-4 text-foreground/80 text-sm sm:text-base leading-relaxed list-disc list-outside ml-5 marker:text-primary">
          <li className="pl-2">Shipped 3+ production features for a Flutter-based collaboration platform.</li>
          <li className="pl-2">Integrated REST APIs for real-time data sync, reducing dashboard data latency by an estimated 40%.</li>
          <li className="pl-2">Collaborated cross-functionally with backend/design teams using Agile practices.</li>
        </ul>
      </motion.div>
    </section>
  );
}
