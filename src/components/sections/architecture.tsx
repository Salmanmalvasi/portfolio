"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { sectorLensArchitecture } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function ArchitectureSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const nodeMap = Object.fromEntries(
    sectorLensArchitecture.nodes.map((node) => [node.id, node]),
  );

  return (
    <SectionWrapper
      id="architecture"
      title="Architecture Spotlight"
      subtitle={sectorLensArchitecture.description}
    >
      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0d1117]/70 p-4 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-foreground">
              {sectorLensArchitecture.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {sectorLensArchitecture.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-zinc-800 px-2 py-1 font-mono text-[11px] text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="max-w-sm text-sm text-zinc-400">
            Hover nodes to inspect each stage of the multi-agent pipeline.
          </p>
        </div>

        <div className="relative hidden h-[220px] md:block">
          <svg viewBox="0 0 560 120" className="h-full w-full">
            {sectorLensArchitecture.edges.map((edge) => {
              const from = nodeMap[edge.from];
              const to = nodeMap[edge.to];
              return (
                <motion.line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="#334155"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              );
            })}

            {sectorLensArchitecture.nodes.map((node) => {
              const active = activeNode === node.id;
              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className="cursor-pointer"
                >
                  <motion.circle
                    r={active ? 18 : 14}
                    fill={active ? "rgba(0,255,156,0.15)" : "rgba(13,17,23,0.9)"}
                    stroke={active ? "#00ff9c" : "#475569"}
                    strokeWidth="1.5"
                    animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={{ repeat: active ? Infinity : 0, duration: 1.2 }}
                  />
                  <text
                    x={node.id === "output" ? -42 : -36}
                    y={-22}
                    className="fill-zinc-300 text-[8px] font-mono"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {activeNode ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 right-0 rounded-lg border border-primary/30 bg-[#0a0e0f]/90 p-4"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {nodeMap[activeNode].label}
              </p>
              <p className="mt-2 text-sm text-zinc-300">
                {nodeMap[activeNode].description}
              </p>
            </motion.div>
          ) : null}
        </div>

        <div className="grid gap-3 md:hidden">
          {sectorLensArchitecture.nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() =>
                setActiveNode(activeNode === node.id ? null : node.id)
              }
              className={cn(
                "rounded-lg border border-zinc-800 p-4 text-left transition",
                activeNode === node.id && "border-primary/40 bg-primary/5",
              )}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {node.label}
              </p>
              {activeNode === node.id ? (
                <p className="mt-2 text-sm text-zinc-300">{node.description}</p>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
