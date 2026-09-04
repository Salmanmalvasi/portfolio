"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NodeProps {
  id: string;
  label: string;
  desc: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  type?: "primary" | "secondary" | "neutral";
  onHover: (desc: string | null) => void;
}

const nodes = [
  { id: "in", label: "Ticker Input", desc: "Receives real-time or historical ticker symbol and timeframe.", x: 50, y: 150, type: "neutral" as const },
  { id: "a1", label: "Extractor Agent", desc: "Pulls data from SEC filings and earnings call transcripts.", x: 300, y: 50, type: "secondary" as const },
  { id: "a2", label: "Comparator Agent", desc: "Analyzes metrics against peer companies in the sector.", x: 300, y: 150, type: "secondary" as const },
  { id: "a3", label: "Verifier Agent", desc: "Cross-checks facts and flags anomalies or hallucinations.", x: 300, y: 250, type: "secondary" as const },
  { id: "out", label: "Output", desc: "Synthesizes final actionable report.", x: 550, y: 150, type: "primary" as const },
];

const edges = [
  { from: "in", to: "a1" },
  { from: "in", to: "a2" },
  { from: "in", to: "a3" },
  { from: "a1", to: "out" },
  { from: "a2", to: "out" },
  { from: "a3", to: "out" },
];

export function ArchitectureGraph() {
  const [hoveredDesc, setHoveredDesc] = useState<string | null>(null);

  const getNodeColor = (type: string) => {
    switch (type) {
      case "primary": return "var(--color-primary)";
      case "secondary": return "var(--color-secondary)";
      default: return "var(--color-foreground)";
    }
  };

  return (
    <div className="w-full relative bg-black/40 border border-white/10 rounded-xl p-4 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl aspect-[16/9] min-h-[400px] relative hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 700 300">
          {/* Edges */}
          {edges.map((edge, idx) => {
            const n1 = nodes.find((n) => n.id === edge.from)!;
            const n2 = nodes.find((n) => n.id === edge.to)!;
            
            // Adjust start/end points to edge of nodes (approximate)
            const sx = n1.x + 60;
            const sy = n1.y + 20;
            const ex = n2.x - 60;
            const ey = n2.y + 20;

            const path = `M ${sx} ${sy} C ${(sx + ex) / 2} ${sy}, ${(sx + ex) / 2} ${ey}, ${ex} ${ey}`;

            return (
              <g key={idx}>
                <path d={path} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <path
                  d={path}
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  className="animate-[dash_1s_linear_infinite]"
                  style={{ opacity: 0.7 }}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              onMouseEnter={() => setHoveredDesc(node.desc)}
              onMouseLeave={() => setHoveredDesc(null)}
              className="cursor-pointer group"
            >
              <rect
                x="-60"
                y="0"
                width="120"
                height="40"
                rx="6"
                fill="#0a0e0f"
                stroke={getNodeColor(node.type)}
                strokeWidth="2"
                className="transition-colors group-hover:fill-white/5"
              />
              <text
                x="0"
                y="25"
                textAnchor="middle"
                fill="var(--color-foreground)"
                className="font-mono text-[10px] sm:text-xs font-semibold pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip Overlay for Desktop */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 min-h-[3rem] w-full max-w-md text-center flex items-center justify-center">
          <p className="text-sm font-mono text-foreground/80 transition-opacity">
            {hoveredDesc || "Hover over a node to see its function."}
          </p>
        </div>
      </div>

      {/* Mobile Stack View */}
      <div className="w-full flex flex-col items-center gap-6 md:hidden">
        {nodes.map((node, idx) => (
          <div key={node.id} className="w-full max-w-xs flex flex-col items-center">
            {idx > 0 && (
              <div className="h-6 w-px bg-white/20 mb-6 relative">
                <div className="absolute inset-0 bg-primary w-px animate-[dash_1s_linear_infinite]" style={{ strokeDasharray: "4 4" }} />
              </div>
            )}
            <div
              className={cn(
                "w-full p-4 rounded-lg border text-center relative",
                node.type === "primary" ? "border-primary" : node.type === "secondary" ? "border-secondary" : "border-white/20"
              )}
            >
              <h4 className="font-mono text-sm font-bold mb-2">{node.label}</h4>
              <p className="text-xs text-foreground/70">{node.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
