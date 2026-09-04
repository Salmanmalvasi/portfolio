"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TICKER_ITEMS = [
  { text: "FINRAG", highlight: "+12.4%", type: "delta" },
  { text: "STUDENTCC", highlight: "10K+ USERS", type: "neutral" },
  { text: "SECTORLENS", highlight: "MULTI-AGENT", type: "neutral" },
  { text: "AGENTLEDGER", highlight: "NEW", type: "tag" },
  { text: "RECON ENGINE", highlight: "IN PROGRESS", type: "tag" },
];

export function TickerTape() {
  return (
    <div className="w-full bg-background border-b border-primary/20 overflow-hidden py-3 font-mono text-sm group flex">
      <div className="flex whitespace-nowrap animate-ticker w-max group-hover:[animation-play-state:paused]">
        {/* Render multiple sets to ensure seamless infinite scrolling */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            {TICKER_ITEMS.map((item, idx) => (
              <div
                key={`${i}-${idx}`}
                className="flex items-center space-x-2 mx-8 text-foreground/70 hover:text-foreground transition-colors cursor-default"
              >
                <span>{item.text}</span>
                <span
                  className={cn(
                    "font-bold",
                    item.type === "delta" && "text-primary",
                    item.type === "tag" && "text-secondary",
                    item.type === "neutral" && "text-foreground"
                  )}
                >
                  {item.highlight}
                </span>
                <span className="text-primary/30 ml-8">|</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
