"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { achievements } from "@/data/portfolio";
import { motion } from "framer-motion";

export function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Certifications and competition results."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-xl border border-primary/20 bg-background/50 p-5 shadow-[0_0_15px_rgba(0,255,156,0.03)] hover:border-primary/40 transition-colors"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary">
              {item.org}
            </p>
            <h3 className="mt-3 text-lg font-medium text-foreground">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
