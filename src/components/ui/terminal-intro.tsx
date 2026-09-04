"use client";

import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sequences = [
  { prompt: "> whoami", output: profile.terminal.whoami },
  { prompt: "> cat focus.json", output: profile.terminal.focus },
];

export function TerminalIntro({ onComplete }: { onComplete?: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"typing-prompt" | "typing-output" | "pause">(
    "typing-prompt",
  );
  const [display, setDisplay] = useState("");
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      onComplete?.();
      return;
    }

    const current = sequences[lineIndex];
    const target =
      phase === "typing-prompt" ? current.prompt : current.output;

    if (display.length >= target.length) {
      const timer = window.setTimeout(() => {
        if (phase === "typing-prompt") {
          setPhase("typing-output");
          setDisplay("");
        } else if (phase === "pause") {
          if (lineIndex < sequences.length - 1) {
            setLineIndex((value) => value + 1);
            setPhase("typing-prompt");
            setDisplay("");
          } else {
            setDone(true);
          }
        } else {
          setCompletedLines((lines) => [
            ...lines,
            `${current.prompt}\n${current.output}`,
          ]);
          setPhase("pause");
          setDisplay("");
        }
      }, phase === "pause" ? 500 : 0);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setDisplay(target.slice(0, display.length + 1));
    }, phase === "typing-prompt" ? 35 : 18);

    return () => window.clearTimeout(timer);
  }, [display, done, lineIndex, onComplete, phase]);

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#0d1117]/80 p-4 font-mono text-sm shadow-2xl backdrop-blur md:p-6">
      <div className="mb-3 flex items-center gap-2 border-b border-zinc-800 pb-3">
        <span className="size-2.5 rounded-full bg-red-500/80" />
        <span className="size-2.5 rounded-full bg-secondary/80" />
        <span className="size-2.5 rounded-full bg-primary/80" />
        <span className="ml-2 text-xs text-zinc-500">salman@portfolio ~</span>
      </div>

      <div className="space-y-3 text-zinc-300">
        {completedLines.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap leading-relaxed">
            {line}
          </pre>
        ))}

        {!done ? (
          <div className="leading-relaxed">
            {phase === "typing-output" ? (
              <>
                <span className="text-primary">{sequences[lineIndex].prompt}</span>
                {"\n"}
                <span>{display}</span>
              </>
            ) : (
              <span className="text-primary">{display}</span>
            )}
            <span className="animate-pulse text-primary">▊</span>
          </div>
        ) : null}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className={cn("mt-6 flex flex-wrap gap-3", !done && "pointer-events-none")}
      >
        <a
          href={profile.contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-zinc-700 px-4 py-2 text-xs uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary"
        >
          GitHub
        </a>
        <a
          href={profile.contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-zinc-700 px-4 py-2 text-xs uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.contact.email}`}
          className="rounded-md border border-zinc-700 px-4 py-2 text-xs uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary"
        >
          Email
        </a>
        <a
          href={profile.contact.resume}
          className="rounded-md bg-primary/10 px-4 py-2 text-xs uppercase tracking-wide text-primary transition hover:bg-primary/20"
        >
          Resume
        </a>
      </motion.div>
    </div>
  );
}
