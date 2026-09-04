"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  title: string;
  pitch: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
  details: string;
}

export function ProjectCard({ title, pitch, stack, githubUrl, demoUrl, details }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  // A randomized sparkline path just for aesthetics
  const [points, setPoints] = useState("0,10 10,10");
  
  useEffect(() => {
    // Generate some random points for the sparkline on mount to look dynamic
    const pts = [];
    let x = 0;
    for(let i=0; i<8; i++) {
      pts.push(`${x},${Math.floor(Math.random() * 20)}`);
      x += 5;
    }
    setPoints(pts.join(" "));
  }, []);

  return (
    <motion.div
      layout
      className="relative bg-background border border-primary/20 p-6 rounded-lg cursor-pointer group"
      whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,255,156,0.15)" }}
      transition={{ duration: 0.2 }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Background glowing corner for sparkline area */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-lg pointer-events-none" />

      {/* Looping sparkline on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <svg width="40" height="20" viewBox="0 0 35 20">
          <motion.polyline
            points={points}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              pathLength: { duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }
            }}
          />
        </svg>
      </div>

      <motion.h3 layout="position" className="text-xl font-bold text-foreground mb-2 pr-12">
        {title}
      </motion.h3>
      
      <motion.p layout="position" className="text-foreground/80 mb-4 text-sm">
        {pitch}
      </motion.p>
      
      <motion.div layout="position" className="flex flex-wrap gap-2 mb-4">
        {stack.map((tech) => (
          <span key={tech} className="text-xs font-mono bg-secondary/10 text-secondary px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-primary/10 mt-4 text-sm text-foreground/70 leading-relaxed whitespace-pre-wrap">
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout="position" className="flex items-center justify-between mt-6 pt-4 border-t border-primary/10">
        <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors flex items-center space-x-1"
          >
            <GithubIcon size={18} />
            <span className="text-xs">Source</span>
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors flex items-center space-x-1"
            >
              <ExternalLink size={18} />
              <span className="text-xs">Live</span>
            </a>
          )}
        </div>
        
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary/50 group-hover:text-primary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </motion.div>
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

