"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

type SparklineProps = {
  seed?: number;
  className?: string;
  active?: boolean;
};

function buildPoints(seed: number) {
  const points: number[] = [];
  let value = 50 + seed;
  for (let index = 0; index < 16; index += 1) {
    value += Math.sin(index * 0.7 + seed) * 4 + (index % 3) - 1;
    points.push(value);
  }
  return points;
}

export function Sparkline({ seed = 1, className, active = false }: SparklineProps) {
  const points = useMemo(() => buildPoints(seed), [seed]);
  const min = Math.min(...points);
  const max = Math.max(...points);
  const normalized = points.map(
    (value, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 100 - ((value - min) / (max - min || 1)) * 100;
      return `${x},${y}`;
    },
  );

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn(
        "h-12 w-24 opacity-60 transition-opacity duration-300",
        active && "opacity-100",
        className,
      )}
    >
      <polyline
        fill="none"
        stroke="#00ff9c"
        strokeWidth="2"
        points={normalized.join(" ")}
        className={active ? "animate-[dash_2s_linear_infinite]" : undefined}
        strokeDasharray="120"
        strokeDashoffset={active ? 0 : 120}
      />
    </svg>
  );
}
