"use client";

import { tickerItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function TickerTape() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-b border-zinc-800/80 bg-[#0d1117]/90">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d1117] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d1117] to-transparent" />
      <div className="flex animate-ticker whitespace-nowrap py-2.5">
        {items.map((item, index) => (
          <span
            key={`${item.symbol}-${index}`}
            className="mx-6 inline-flex items-center gap-3 font-mono text-xs tracking-wide text-zinc-300 md:text-sm"
          >
            <span className="text-foreground">{item.symbol}</span>
            <span
              className={cn(
                item.positive ? "text-primary" : "text-secondary",
              )}
            >
              {item.delta}
            </span>
            <span className="text-zinc-700">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
