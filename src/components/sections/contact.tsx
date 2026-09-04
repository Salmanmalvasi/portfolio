"use client";

import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ContactSection() {
  const links = [
    {
      label: "Email",
      href: `mailto:${profile.contact.email}`,
      value: profile.contact.email,
    },
    {
      label: "GitHub",
      href: profile.contact.github,
      value: "github.com/Salmanmalvasi",
    },
    {
      label: "LinkedIn",
      href: profile.contact.linkedin,
      value: "linkedin.com/in/salman-malvasi",
    },
  ];

  return (
    <section id="contact" className="border-t border-zinc-800 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-primary/20 bg-background/50 p-8 md:p-12 shadow-[0_0_20px_rgba(0,255,156,0.05)]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            // contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Open to data science, SWE, & financial analytics internships
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Reach out for internships, collaborations, or to talk RAG systems,
            reconciliation engines, and multi-agent pipelines.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="rounded-xl border border-primary/20 p-4 transition hover:border-primary/50 hover:bg-primary/5"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {link.label}
                </p>
                <p className="mt-2 text-sm text-foreground/80">{link.value}</p>
              </a>
            ))}
          </div>

          {/* 
          <a
            href={profile.contact.resume}
            className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 font-mono text-xs uppercase tracking-widest text-[#0a0e0f] transition hover:bg-primary/90"
          >
            Download Resume
          </a> 
          */}
        </motion.div>

        <p className="mt-10 text-center font-mono text-xs text-foreground/50">
          © {new Date().getFullYear()} Salman Malvasi · Built with Next.js
        </p>
      </div>
    </section>
  );
}
