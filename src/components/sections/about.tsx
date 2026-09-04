"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Focused on fintech systems, not generic app churn."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {profile.about.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-xl border border-zinc-800 bg-[#0d1117]/60 p-6 leading-relaxed text-zinc-300"
          >
            {paragraph}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
