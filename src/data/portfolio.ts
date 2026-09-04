export const profile = {
  name: "Salman Malvasi",
  tagline:
    "B.Tech CSE student building AI-driven fintech systems — from corrective RAG over SEC filings to multi-agent financial analysis engines.",
  terminal: {
    whoami: "CS student @ VIT Chennai, fintech + data science track",
    focus: '["RAG systems", "multi-agent architectures", "payment infra", "Android/Kotlin"]',
  },
  about: [
    "CS undergrad at VIT Chennai (CGPA 8.74), committed to fintech and data science as a career path — deliberately ruling out generic app/web dev as the primary focus.",
  ],
  contact: {
    email: "salmanmalvasi3@gmail.com",
    github: "https://github.com/Salmanmalvasi",
    linkedin: "https://linkedin.com/in/salman-malvasi",
    resume: "/resume.pdf",
  },
};

export const tickerItems = [
  { symbol: "FINRAG", delta: "+12.4%", positive: true },
  { symbol: "STUDENTCC", delta: "10K+ USERS", positive: true },
  { symbol: "SECTORLENS", delta: "MULTI-AGENT", positive: true },
  { symbol: "AGENTLEDGER", delta: "NEW", positive: true },
  { symbol: "RECON ENGINE", delta: "IN PROGRESS", positive: false },
];

export type Project = {
  id: string;
  title: string;
  pitch: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  details: string;
};

export const projects: Project[] = [
  {
    id: "finrag",
    title: "FinRAG",
    pitch:
      "Corrective RAG pipeline over SEC filings with hybrid retrieval and self-correction loops.",
    stack: ["Python", "BM25", "Cross-Encoder", "RAGAS"],
    featured: true,
    details:
      "BM25 hybrid retrieval, cross-encoder reranking, self-correction loops, evaluated with RAGAS. Strongest AI/fintech signal — corrective RAG over SEC filings.",
  },
  {
    id: "studentcc",
    title: "StudentCC",
    pitch: "Offline-first Android app with 10,000+ organic users.",
    stack: ["Kotlin", "Android", "Room", "Offline-first"],
    details:
      "Offline-first Android app serving 10,000+ organic users. Strongest shipping credential — built for real users at scale.",
  },
  {
    id: "agentledger",
    title: "AgentLedger",
    pitch:
      "Payment reconciliation engine for agentic UPI commerce with staged matching pipelines.",
    stack: ["Python", "FastAPI", "Reconciliation", "Anomaly Detection"],
    details:
      "Staged matching pipeline (exact → explainable-variance → fuzzy fallback → anomaly detection), exception queue design, idempotent re-runs. Built for Razorpay buildathon — flags spend-limit breaches, duplicate charges, off-catalog purchases, velocity spikes.",
  },
  {
    id: "spendsense",
    title: "SpendSense",
    pitch: "Android UPI transaction tracker with local-first architecture.",
    stack: ["Kotlin", "NotificationListener", "Room"],
    details:
      "Android UPI transaction tracker using NotificationListenerService, Room, and local-first architecture.",
  },
  {
    id: "risk-analyzer",
    title: "Stock Portfolio Risk Analyzer",
    pitch: "Monte Carlo simulation with Sharpe ratio and VaR metrics.",
    stack: ["Python", "Monte Carlo", "Sharpe", "VaR"],
    details:
      "Financial risk analysis tool with Monte Carlo simulation, Sharpe ratio, and Value at Risk calculations.",
  },
  {
    id: "earnings-analyzer",
    title: "Earnings Call Analyzer",
    pitch: "NLP pipeline over earnings call transcripts.",
    stack: ["Python", "NLP", "Transcripts"],
    details: "NLP pipeline for extracting insights from earnings call transcripts.",
  },
  {
    id: "twine",
    title: "Twine",
    pitch: "Real-time chat app showing full-stack range beyond fintech.",
    stack: ["React", "Node.js", "Socket.io", "Supabase"],
    details:
      "Real-time chat application built with React, Node.js, Socket.io, and Supabase.",
  },
];

export const sectorLensArchitecture = {
  title: "SectorLens",
  description:
    "Multi-agent financial sector comparison engine. Ticker Resolution Layer feeding parallel qualitative/quantitative pipelines over SEC EDGAR + XBRL + earnings call transcripts.",
  stack: ["Python 3.12", "Gemini API", "FastAPI", "React", "Recharts"],
  nodes: [
    {
      id: "ticker",
      label: "Ticker Input",
      description: "Resolves company tickers and routes to parallel analysis pipelines.",
      x: 50,
      y: 50,
    },
    {
      id: "extractor",
      label: "Extractor Agent",
      description: "Pulls structured metrics from SEC EDGAR, XBRL filings, and transcripts.",
      x: 200,
      y: 20,
    },
    {
      id: "comparator",
      label: "Comparator Agent",
      description: "Runs qualitative and quantitative sector comparisons in parallel.",
      x: 200,
      y: 80,
    },
    {
      id: "verifier",
      label: "Verifier Agent",
      description: "Cross-checks outputs, resolves conflicts, and validates claims.",
      x: 350,
      y: 50,
    },
    {
      id: "output",
      label: "Analysis Output",
      description: "Delivers verified sector comparison with cited sources.",
      x: 500,
      y: 50,
    },
  ],
  edges: [
    { from: "ticker", to: "extractor" },
    { from: "ticker", to: "comparator" },
    { from: "extractor", to: "verifier" },
    { from: "comparator", to: "verifier" },
    { from: "verifier", to: "output" },
  ],
};

export const skills = {
  "Languages": ["Java", "Python", "Kotlin", "JavaScript", "TypeScript", "SQL", "C/C++", "R"],
  "Mobile": ["Android (Kotlin)", "Flutter"],
  "Web & Backend": ["Node.js", "Express", "FastAPI", "React", "Socket.io"],
  "Databases": ["PostgreSQL", "SQLite", "Firebase", "Supabase"],
  "DevOps & SDLC": ["Git", "GitHub Actions", "CI/CD", "Agile"],
  "Cloud & AI": ["AWS EC2/S3/IAM/VPC", "Azure Fundamentals", "GenAI", "Prompt Engineering", "LangChain", "CrewAI"]
};

export const achievements = [
  {
    title: "IBM DevOps Practitioner",
    org: "IBM",
  },
  {
    title: "IBM Agile Explorer",
    org: "IBM",
  },
  {
    title: "Advanced to Round 4, shortlisted among top 300 of 3,00,000+ registrations",
    org: "Adobe Hackathon",
  },
];

export const leadership = [
  {
    role: "VIT Android Club",
    detail: "Overall POC for LushRewind, Tech POC for FeatureQuest 2026, leading technical operations and website development for two events with 300+ participants.",
  }
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
