"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type FloatingSymbolProps = {
  symbol: "₹" | "$";
  className?: string;
  delay?: number;
  duration?: number;
  mobileHidden?: boolean;
};

export function FloatingSymbol({ 
  symbol, 
  className = "", 
  delay = 0,
  duration = 10,
  mobileHidden = false
}: FloatingSymbolProps) {
  const [mounted, setMounted] = useState(false);
  const isPrimary = symbol === "₹";
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className={`absolute select-none pointer-events-auto cursor-pointer z-0 ${mobileHidden ? "hidden sm:flex" : "flex"} ${className}`}
      initial={{ y: 0, x: 0, rotate: 0 }}
      animate={{
        y: [0, -20, 10, 0],
        x: [0, 15, -10, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      whileHover={{ 
        scale: 1.4, 
        rotate: 20,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.8, 
        rotate: 360,
        filter: "brightness(1.5)",
        transition: { duration: 0.4 } 
      }}
    >
      <div className={`font-mono text-xl md:text-3xl font-bold opacity-[0.15] hover:opacity-40 transition-opacity p-2 rounded-full border border-transparent hover:border-current bg-background/50 backdrop-blur-sm ${isPrimary ? 'text-primary hover:shadow-[0_0_15px_rgba(0,255,156,0.5)]' : 'text-secondary hover:shadow-[0_0_15px_rgba(255,176,32,0.5)]'}`}>
        {symbol}
      </div>
    </motion.div>
  );
}
