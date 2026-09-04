"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { leadership } from "@/data/portfolio";
import { motion } from "framer-motion";

export function LeadershipSection() {
  return (
    <SectionWrapper
      id="leadership"
      title="Leadership"
      subtitle="Community roles that shaped how I ship and teach."
    >
      <div className="flex justify-center mt-8">
        {leadership.map((item, index) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="w-full max-w-2xl rounded-xl border border-primary/40 bg-gradient-to-b from-primary/5 to-transparent p-6 sm:p-8 shadow-[0_0_20px_rgba(0,255,156,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">{item.role}</h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
