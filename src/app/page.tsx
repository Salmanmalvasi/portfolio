import { TickerTape } from "@/components/TickerTape";
import { TerminalHero } from "@/components/TerminalHero";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureGraph } from "@/components/ArchitectureGraph";
import { Experience } from "@/components/Experience";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { AchievementsSection } from "@/components/sections/achievements";
import { LeadershipSection } from "@/components/sections/leadership";
import { ContactSection } from "@/components/sections/contact";

const PROJECTS = [
  {
    title: "SectorLens",
    pitch: "Multi-agent architecture for sector-wide stock analysis",
    stack: ["Python", "CrewAI", "LangChain", "GenAI"],
    githubUrl: "https://github.com/Salmanmalvasi/SectorLens",
    details: "The problem: Comparing public companies across sectors requires reading dense SEC filings and earnings call transcripts — slow and error-prone to do manually.\n\nHow it works: A multi-agent pipeline with Extractor, Comparator, and Verifier agents pulls data from SEC filings and earnings call transcripts to compare companies side by side.\n\nWhy it's hard: LLM outputs on financial data are prone to hallucination. Added a source-verification step so every claim is grounded in and cited back to the actual regulatory filing it came from."
  },
  {
    title: "Payment Reconciliation Engine",
    pitch: "Rule-based matching framework with exception routing",
    stack: ["Python", "PostgreSQL", "Pandas", "FastAPI"],
    githubUrl: "https://github.com/Salmanmalvasi/PaymentReconciliation",
    details: "The problem: Matching internal ledger records against payment processor settlement files is core financial-systems work, and doing it wrong (silent false matches) is worse than not automating it.\n\nHow it works: A REST backend with a rule-based matching framework that classifies every record as matched, an explainable exception (timing/fee/refund variance), or a true discrepancy, with a full audit trail.\n\nWhy it's hard: The matching logic has to resist false positives — ambiguous cases are routed to exceptions for review rather than auto-resolved, since a wrong auto-match is a silent, hard-to-catch bug."
  },
  {
    title: "StudentCC",
    pitch: "Offline-first Android app with 10,000+ active users",
    stack: ["Android", "Java", "SQLite", "Firebase", "MVVM"],
    githubUrl: "https://github.com/Salmanmalvasi/StudentCC",
    details: "Offline-first Android app with 10,000+ active users. Owned the full product roadmap; when a competitor launch caused a ~10% retention drop, shipped a faculty cabin locator and an in-app time-pass game, recovering 7 of the 10 lost retention points."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <TickerTape />
      <TerminalHero />
      
      <AboutSection />

      <section className="py-20 border-t border-primary/20 bg-background/50 relative">
        <Experience />
      </section>
      
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-primary inline-block pr-4">
            {">"} PROJECTS.list()
          </h2>
          <div className="h-px bg-primary/20 w-full max-w-xs mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-10 border-t border-primary/10 bg-gradient-to-b from-black/40 to-transparent rounded-t-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-4 text-primary text-center">
            {">"} ARCHITECTURE_SPOTLIGHT: SectorLens
          </h2>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
            A multi-agent approach to financial analysis. Distinct specialized agents collaborate to analyze, compare, and verify sector data in parallel before synthesizing a final actionable report.
          </p>
          <ArchitectureGraph />
        </div>
      </section>

      <SkillsSection />
      <AchievementsSection />
      <LeadershipSection />
      <ContactSection />
    </main>
  );
}
