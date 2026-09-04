"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Focused on data science and financial analytics, not generic app churn."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {profile.about.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="rounded-xl border border-primary/20 bg-background/50 p-6 leading-relaxed text-foreground/80 shadow-[0_0_15px_rgba(0,255,156,0.03)]"
          >
            {paragraph}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
