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
            className="rounded-xl border border-zinc-800 bg-[#0d1117]/60 p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
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
