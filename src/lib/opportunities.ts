export type OpportunityType =
  | "internship"
  | "hackathon"
  | "case"
  | "challenge"
  | "fellowship";

export interface Opportunity {
  id: string;
  type: OpportunityType;
  title: string;
  host: string;
  summary: string;
  description: string;
  tags: string[];
  domain: string;
  mode: "Remote" | "In-person" | "Hybrid";
  location: string;
  eligibility: string[];
  compensation: string;
  compensationLabel: string;
  deadline: string;
  deadlineIso: string;
  duration?: string;
  teamSize?: string;
  applyUrl: string;
  featured?: boolean;
  timeline: { label: string; date: string }[];
  skills: string[];
}

export const typeMeta: Record<OpportunityType, { label: string; badge: string; badgeFg: string }> = {
  internship:  { label: "Internship",     badge: "bg-badge-intern",    badgeFg: "text-badge-intern-fg" },
  hackathon:   { label: "Hackathon",      badge: "bg-badge-hack",      badgeFg: "text-badge-hack-fg" },
  case:        { label: "Case Comp",      badge: "bg-badge-case",      badgeFg: "text-badge-case-fg" },
  challenge:   { label: "Challenge",      badge: "bg-badge-challenge", badgeFg: "text-badge-challenge-fg" },
  fellowship:  { label: "Fellowship",     badge: "bg-badge-fellow",    badgeFg: "text-badge-fellow-fg" },
};

export const opportunities: Opportunity[] = [
  {
    id: "nexus-product-design-2026",
    type: "internship",
    title: "Product Design Summer Intern 2026",
    host: "Nexus Fintech Systems",
    summary: "Ship 0→1 flows on our merchant onboarding surface alongside senior designers.",
    description:
      "Join a 6-person design team owning merchant-facing surfaces at India's fastest-growing fintech. You'll pair with PMs and engineers to ship 0→1 flows, run usability sessions, and contribute to our design system.",
    tags: ["Remote", "Paid", "Product", "Deadline soon"],
    domain: "Design",
    mode: "Remote",
    location: "Remote / Bengaluru",
    eligibility: ["Pre-final year", "Final year", "Portfolio required"],
    compensation: "₹45,000 / month",
    compensationLabel: "Stipend",
    deadline: "Nov 12, 2025",
    deadlineIso: "2025-11-12",
    duration: "10 weeks",
    applyUrl: "https://example.com/apply",
    featured: true,
    timeline: [
      { label: "Applications open", date: "Oct 08, 2025" },
      { label: "Deadline", date: "Nov 12, 2025" },
      { label: "Interviews", date: "Nov 18–25, 2025" },
      { label: "Start date", date: "May 04, 2026" },
    ],
    skills: ["Figma", "Prototyping", "User research", "Design systems"],
  },
  {
    id: "etherscale-web3-2025",
    type: "hackathon",
    title: "The Web3 Infrastructure Challenge",
    host: "EtherScale Foundation",
    summary: "48-hour sprint to build tooling that makes on-chain infra actually usable.",
    description:
      "A 48-hour virtual hackathon focused on developer tooling for L2 infrastructure. Winning teams get accelerator interviews and a ₹5,00,000 prize pool.",
    tags: ["Remote", "Prize money", "Software"],
    domain: "Software",
    mode: "Remote",
    location: "Online",
    eligibility: ["Students", "Early-career professionals", "Teams of 2–4"],
    compensation: "₹5,00,000 prize pool",
    compensationLabel: "Prize Pool",
    deadline: "Dec 01, 2025",
    deadlineIso: "2025-12-01",
    teamSize: "2–4 members",
    applyUrl: "https://example.com/register",
    featured: true,
    timeline: [
      { label: "Registration opens", date: "Nov 04, 2025" },
      { label: "Registration deadline", date: "Dec 01, 2025" },
      { label: "Hack weekend", date: "Dec 06–07, 2025" },
      { label: "Finals & demo day", date: "Dec 14, 2025" },
    ],
    skills: ["Solidity", "TypeScript", "Rust", "Systems design"],
  },
  {
    id: "global-logistics-supply-chain",
    type: "case",
    title: "Supply Chain Optimization Case",
    host: "Global Logistics Corp",
    summary: "Redesign last-mile ops for a Tier-2 network — top teams get PPI interviews.",
    description:
      "A three-round consulting case focused on last-mile logistics in Tier-2 Indian cities. Rounds include a submission deck, a live case crack, and a final panel.",
    tags: ["Hybrid", "Consulting", "PPI opportunity"],
    domain: "Consulting",
    mode: "Hybrid",
    location: "Mumbai (Finals)",
    eligibility: ["MBA candidates", "Final year UG", "Teams of 3"],
    compensation: "PPI Interviews + ₹2,00,000",
    compensationLabel: "Rewards",
    deadline: "Nov 20, 2025",
    deadlineIso: "2025-11-20",
    teamSize: "Teams of 3",
    applyUrl: "https://example.com/register",
    featured: true,
    timeline: [
      { label: "Registration deadline", date: "Nov 20, 2025" },
      { label: "Round 1 submission", date: "Nov 30, 2025" },
      { label: "Round 2 live case", date: "Dec 08, 2025" },
      { label: "Finals — Mumbai", date: "Dec 18, 2025" },
    ],
    skills: ["Problem structuring", "Operations", "Excel modelling", "Storytelling"],
  },
  {
    id: "swiggy-growth-analytics",
    type: "internship",
    title: "Growth Analytics Intern",
    host: "Swiggy",
    summary: "Own experimentation for a slice of the food delivery growth funnel.",
    description:
      "Work on funnel experimentation and retention modelling within the Growth pod at Swiggy. Ideal for candidates with SQL + product-thinking chops.",
    tags: ["In-person", "Paid", "Data"],
    domain: "Data / Analytics",
    mode: "In-person",
    location: "Bengaluru",
    eligibility: ["Pre-final year", "Final year"],
    compensation: "₹65,000 / month",
    compensationLabel: "Stipend",
    deadline: "Nov 05, 2025",
    deadlineIso: "2025-11-05",
    duration: "12 weeks",
    applyUrl: "https://example.com/apply",
    timeline: [
      { label: "Applications open", date: "Oct 01, 2025" },
      { label: "Deadline", date: "Nov 05, 2025" },
      { label: "Interviews", date: "Nov 08–20, 2025" },
      { label: "Start date", date: "Jan 05, 2026" },
    ],
    skills: ["SQL", "Python", "A/B testing", "Product analytics"],
  },
  {
    id: "razorpay-build-challenge",
    type: "challenge",
    title: "Razorpay Build Challenge — Payments UX",
    host: "Razorpay",
    summary: "Ship a prototype that reimagines checkout for first-time UPI users.",
    description:
      "A 3-week open-ended product challenge with weekly checkpoints and mentor sessions. Winners get an interview at Razorpay and a ₹1,00,000 prize.",
    tags: ["Remote", "Prize money", "Product"],
    domain: "Product",
    mode: "Remote",
    location: "Online",
    eligibility: ["All students", "Individual or teams of 2"],
    compensation: "₹1,00,000 + Interview",
    compensationLabel: "Reward",
    deadline: "Nov 25, 2025",
    deadlineIso: "2025-11-25",
    teamSize: "Solo or duo",
    applyUrl: "https://example.com/register",
    timeline: [
      { label: "Kickoff", date: "Nov 03, 2025" },
      { label: "Submission deadline", date: "Nov 25, 2025" },
      { label: "Winners announced", date: "Dec 05, 2025" },
    ],
    skills: ["Product thinking", "Prototyping", "UX writing"],
  },
  {
    id: "zerodha-varsity-fellowship",
    type: "fellowship",
    title: "Varsity Markets Fellowship",
    host: "Zerodha",
    summary: "A 6-month fellowship for candidates serious about capital markets research.",
    description:
      "Structured cohort program covering equity research, macro, and derivatives with mentorship from the Zerodha Varsity team.",
    tags: ["Hybrid", "Paid", "Finance"],
    domain: "Finance",
    mode: "Hybrid",
    location: "Bengaluru + Remote",
    eligibility: ["Recent graduates", "Final year"],
    compensation: "₹75,000 / month",
    compensationLabel: "Stipend",
    deadline: "Dec 15, 2025",
    deadlineIso: "2025-12-15",
    duration: "6 months",
    applyUrl: "https://example.com/apply",
    timeline: [
      { label: "Applications open", date: "Nov 01, 2025" },
      { label: "Deadline", date: "Dec 15, 2025" },
      { label: "Interviews", date: "Jan 05–20, 2026" },
      { label: "Program start", date: "Feb 03, 2026" },
    ],
    skills: ["Financial modelling", "Research", "Writing"],
  },
];

export const categories = [
  { type: "internship" as const, name: "Internships",     count: 1240, blurb: "Paid and unpaid internships from startups and companies." },
  { type: "hackathon"  as const, name: "Hackathons",      count: 85,   blurb: "Sprint-format builds with real prize pools and mentors." },
  { type: "case"       as const, name: "Case Competitions", count: 42, blurb: "Consulting and strategy cases with PPI potential." },
  { type: "challenge"  as const, name: "Challenges",      count: 68,   blurb: "Product and business challenges hosted by top brands." },
  { type: "fellowship" as const, name: "Fellowships",     count: 18,   blurb: "Long-form structured programs for early-career growth." },
];

export const quickDomains = ["Product", "Software", "Consulting", "Finance", "Marketing", "Design"];

export function getOpportunity(id: string) {
  return opportunities.find((o) => o.id === id);
}
