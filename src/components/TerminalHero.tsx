"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function TerminalHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden border-b border-primary/20">
      {/* Background Chart Animation */}
      <BackgroundChart />
      
      {/* Decorative Watermark */}
      <HeroWatermark />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl border border-primary/30 rounded-lg bg-background/80 backdrop-blur-sm p-4 sm:p-6 shadow-[0_0_15px_rgba(0,255,156,0.1)]">
          {/* Mac-like terminal header */}
          <div className="flex space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>

          <div className="font-mono text-sm sm:text-base md:text-lg">
            {/* Desktop Animated Version */}
            <div className="hidden md:block">
              <AnimatedTerminalText />
            </div>

            {/* Mobile Static Version */}
            <div className="block md:hidden space-y-4">
              <div className="text-foreground">
                <span className="text-primary">{">"}</span> whoami
              </div>
              <div className="text-foreground/90 leading-relaxed ml-4">
                Salman Malvasi — CS student @ VIT Chennai, fintech + data science track
              </div>
              <div className="text-foreground mt-4">
                <span className="text-primary">{">"}</span> cat focus.json
              </div>
              <div className="text-secondary whitespace-pre-wrap ml-4">
                {`[
  "RAG systems",
  "multi-agent architectures",
  "payment infra",
  "Android/Kotlin"
]`}
              </div>
              <div className="mt-8 pt-4 border-t border-primary/20">
                <CtaButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedTerminalText() {
  const [step, setStep] = useState(0);

  const TYPE_SPEED = 40;
  const LINE_DELAY = 600;

  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [t3, setT3] = useState("");
  const [t4, setT4] = useState("");

  useEffect(() => {
    let isCancelled = false;

    const typeOut = async (text: string, setter: (val: string) => void) => {
      let current = "";
      for (let i = 0; i < text.length; i++) {
        if (isCancelled) return;
        current += text[i];
        setter(current);
        await new Promise((r) => setTimeout(r, TYPE_SPEED));
      }
    };

    const runSequence = async () => {
      await typeOut("> whoami", setT1);
      if (isCancelled) return;
      await new Promise((r) => setTimeout(r, LINE_DELAY));

      setStep(1);
      await typeOut("Salman Malvasi — CS student @ VIT Chennai, fintech + data science track", setT2);
      if (isCancelled) return;
      await new Promise((r) => setTimeout(r, LINE_DELAY));

      setStep(2);
      await typeOut("> cat focus.json", setT3);
      if (isCancelled) return;
      await new Promise((r) => setTimeout(r, LINE_DELAY));

      setStep(3);
      const jsonStr = `[
  "RAG systems",
  "multi-agent architectures",
  "payment infra",
  "Android/Kotlin"
]`;
      await typeOut(jsonStr, setT4);
      if (isCancelled) return;
      
      await new Promise((r) => setTimeout(r, LINE_DELAY));
      setStep(4); // Show CTAs
    };

    runSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="space-y-2">
      <div className="text-foreground min-h-[1.5rem]">
        {t1.length > 0 && <><span className="text-primary">{t1.substring(0, 1)}</span>{t1.substring(1)}</>}
        {step === 0 && <BlinkingCursor />}
      </div>
      
      {step >= 1 && (
        <div className="text-foreground/90 leading-relaxed ml-4 min-h-[1.5rem]">
          {t2}
          {step === 1 && <BlinkingCursor />}
        </div>
      )}

      {step >= 2 && (
        <div className="text-foreground mt-4 min-h-[1.5rem]">
          {t3.length > 0 && <><span className="text-primary">{t3.substring(0, 1)}</span>{t3.substring(1)}</>}
          {step === 2 && <BlinkingCursor />}
        </div>
      )}

      {step >= 3 && (
        <div className="text-secondary whitespace-pre-wrap ml-4 min-h-[6rem]">
          {t4}
          {step === 3 && <BlinkingCursor />}
        </div>
      )}

      {step >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 pt-4 border-t border-primary/20"
        >
          <CtaButtons />
        </motion.div>
      )}
    </div>
  );
}

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      className="inline-block w-2.5 h-5 bg-primary ml-1 align-middle"
    />
  );
}

function CtaButtons() {
  return (
    <div className="flex flex-wrap gap-4 text-sm mt-4">
      <a href="https://github.com/Salmanmalvasi" target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded border border-primary/30 hover:bg-primary hover:text-background transition-colors">
        <GithubIcon size={16} />
        <span>GitHub</span>
      </a>
      <a href="https://linkedin.com/in/salman-malvasi" target="_blank" rel="noreferrer" className="flex items-center space-x-2 bg-background text-foreground px-4 py-2 rounded border border-foreground/30 hover:border-foreground transition-colors">
        <LinkedinIcon size={16} />
        <span>LinkedIn</span>
      </a>
      <a href="mailto:salmanmalvasi3@gmail.com" className="flex items-center space-x-2 bg-background text-foreground px-4 py-2 rounded border border-foreground/30 hover:border-foreground transition-colors">
        <Mail size={16} />
        <span>Email</span>
      </a>
      {/* 
      <a href="/resume.pdf" className="flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded border border-secondary/30 hover:bg-secondary hover:text-background transition-colors">
        <FileText size={16} />
        <span>Resume</span>
      </a> 
      */}
    </div>
  );
}

function BackgroundChart() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <motion.svg
        viewBox="0 0 1000 400"
        className="w-full h-full object-cover"
        preserveAspectRatio="none"
        animate={{ x: ["-10%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
      >
        {/* Subtle grid lines */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.2">
          <line x1="0" y1="100" x2="1000" y2="100" />
          <line x1="0" y1="200" x2="1000" y2="200" />
          <line x1="0" y1="300" x2="1000" y2="300" />
        </g>
        
        {/* Animated line chart */}
        <motion.path
          d="M0,250 C100,220 200,300 300,180 C400,60 500,280 600,200 C700,120 800,250 900,150 C1000,50 1100,200 1200,150"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
        
        {/* Candlesticks */}
        <g fill="var(--color-primary)" opacity="0.5">
          <rect x="100" y="200" width="10" height="40" />
          <line x1="105" y1="180" x2="105" y2="260" stroke="var(--color-primary)" strokeWidth="2" />
          
          <rect x="300" y="150" width="10" height="60" />
          <line x1="305" y1="120" x2="305" y2="230" stroke="var(--color-primary)" strokeWidth="2" />
          
          <rect x="600" y="180" width="10" height="30" />
          <line x1="605" y1="160" x2="605" y2="240" stroke="var(--color-primary)" strokeWidth="2" />
          
          <rect x="900" y="120" width="10" height="50" />
          <line x1="905" y1="100" x2="905" y2="190" stroke="var(--color-primary)" strokeWidth="2" />
        </g>
      </motion.svg>
    </div>
  );
}

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function HeroWatermark() {
  return (
    <motion.div 
      className="absolute right-0 top-1/2 -translate-y-1/2 md:right-10 lg:right-32 z-0 hidden sm:flex select-none pointer-events-none opacity-[0.04] text-primary font-mono"
      animate={{ 
        y: ["-50%", "-55%", "-50%"],
        rotate: [-2, 2, -2],
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      <span className="text-[12rem] md:text-[20rem] lg:text-[26rem] leading-none text-primary">₹</span>
      <span className="text-[12rem] md:text-[20rem] lg:text-[26rem] leading-none text-secondary -ml-8 md:-ml-16 mt-16 md:mt-32">{"$"}</span>
    </motion.div>
  );
}
