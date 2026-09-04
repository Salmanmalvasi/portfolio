"use client";

import { Sparkline } from "@/components/ui/sparkline";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Fintech-first systems with real shipping credentials."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const expanded = expandedId === project.id;
          const hovered = hoveredId === project.id;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-zinc-800 bg-[#0d1117]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,255,156,0.08)]",
                project.featured && "md:col-span-2",
              )}
            >
              <div className="absolute right-4 top-4">
                <Sparkline seed={index + 1} active={hovered || expanded} />
              </div>

              <div className="pr-28">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      Featured
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.pitch}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-800 px-2 py-1 font-mono text-[11px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setExpandedId(expanded ? null : project.id)
                }
                className="mt-5 font-mono text-xs uppercase tracking-widest text-primary transition hover:text-primary/80"
              >
                {expanded ? "Collapse details" : "Expand details"}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expanded ? "auto" : 0,
                  opacity: expanded ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <p className="pt-4 text-sm leading-relaxed text-zinc-300">
                  {project.details}
                </p>
                <div className="mt-4 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      className="text-xs text-zinc-400 underline-offset-4 hover:text-primary hover:underline"
                    >
                      GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      className="text-xs text-zinc-400 underline-offset-4 hover:text-primary hover:underline"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
