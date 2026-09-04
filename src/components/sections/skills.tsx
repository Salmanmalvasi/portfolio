"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills / Stack"
      subtitle="Grouped by domain — no fake progress bars."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-xl border border-primary/20 bg-background/50 p-5 shadow-[0_0_15px_rgba(0,255,156,0.03)] hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
              {category}
            </p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-sm text-foreground/80"
                >
                  <span className="text-primary">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
