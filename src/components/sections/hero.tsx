"use client";

import { HeroChartBackground } from "@/components/ui/hero-chart";
import { TerminalIntro } from "@/components/ui/terminal-intro";
import { TickerTape } from "@/components/ui/ticker-tape";
import { navLinks, profile } from "@/data/portfolio";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <>
      <TickerTape />
      <header className="relative overflow-hidden border-b border-zinc-800/80">
        <HeroChartBackground />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-mono text-sm text-primary">SM</span>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-zinc-400 transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-10 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Portfolio Terminal v1.0
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              {profile.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <TerminalIntro />
          </motion.div>
        </div>
      </header>
    </>
  );
}
