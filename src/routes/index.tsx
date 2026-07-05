import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Bookmark, Bell, ArrowRight, Sparkles, Target, LineChart } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { OpportunityCard } from "@/components/opportunity-card";
import { opportunities, categories, quickDomains, typeMeta } from "@/lib/opportunities";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = opportunities.filter((o) => o.featured);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance mb-6">
              Find internships, hackathons, and career-building opportunities in one place
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-[52ch] leading-relaxed">
              Discover curated opportunities for students and early-career candidates.
              Save deadlines, track applications, and never miss the right opportunity.
            </p>

            <div className="p-2 bg-surface rounded-2xl ring-1 ring-hairline mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4">
                  <Search className="size-4 text-muted-foreground shrink-0" />
                  <input
                    type="text"
                    placeholder="Search internships, hackathons, challenges, companies..."
                    className="w-full bg-transparent border-none outline-none text-foreground py-3 text-sm placeholder:text-muted-foreground"
                  />
                </div>
                <Link
                  to="/explore"
                  className="bg-brand text-brand-foreground py-3 px-6 rounded-xl font-medium text-sm hover:bg-brand/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Search
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Popular:</span>
              {quickDomains.map((d) => (
                <Link key={d} to="/explore" className="px-3 py-1 bg-secondary hover:bg-secondary/70 text-secondary-foreground rounded-full text-xs font-medium transition-colors">
                  {d}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/explore" className="inline-flex items-center gap-2 bg-foreground text-background py-3 px-5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                Explore Opportunities <ArrowRight className="size-4" />
              </Link>
              <Link to="/profile" className="text-sm font-medium text-foreground hover:text-brand py-3 px-4">
                Set Preferences
              </Link>
              <Link to="/post" className="text-sm font-medium text-brand hover:underline underline-offset-4">
                For Employers →
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-brand/5 blur-3xl rounded-full" />
            <div className="relative flex flex-col gap-4">
              <div className="bg-card p-5 rounded-2xl ring-1 ring-hairline shadow-sm rotate-2 translate-x-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 bg-badge-intern text-badge-intern-fg rounded text-[10px] font-bold uppercase tracking-wider">Internship</span>
                  <Bookmark className="size-4 text-brand fill-brand" />
                </div>
                <div className="font-semibold text-sm">Product Design Summer 2026</div>
                <div className="text-xs text-muted-foreground mb-3">Nexus Fintech Systems</div>
                <div className="flex justify-between text-[11px] pt-3 border-t border-hairline">
                  <span className="text-muted-foreground">₹45k / mo</span>
                  <span className="text-warning font-medium">Nov 12</span>
                </div>
              </div>
              <div className="bg-card p-5 rounded-2xl ring-1 ring-hairline shadow-md -rotate-1 -translate-x-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 bg-badge-hack text-badge-hack-fg rounded text-[10px] font-bold uppercase tracking-wider">Hackathon</span>
                  <span className="text-[10px] text-brand-accent font-mono font-bold">LIVE</span>
                </div>
                <div className="font-semibold text-sm">Web3 Infrastructure Challenge</div>
                <div className="text-xs text-muted-foreground mb-3">EtherScale Foundation</div>
                <div className="flex justify-between text-[11px] pt-3 border-t border-hairline">
                  <span className="text-muted-foreground">₹5,00,000 pool</span>
                  <span className="text-warning font-medium">Dec 01</span>
                </div>
              </div>
              <div className="bg-brand text-brand-foreground p-5 rounded-2xl shadow-lg rotate-1 translate-x-6">
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="size-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Deadline reminder</span>
                </div>
                <div className="font-semibold text-sm">3 opportunities close this week</div>
                <div className="text-xs opacity-70 mt-1">Set reminders in your Tracker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-14 border-y border-hairline bg-surface/50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((c) => {
              const meta = typeMeta[c.type];
              return (
                <Link key={c.type} to="/explore" className="group bg-card p-5 rounded-2xl ring-1 ring-hairline hover:ring-brand/30 transition-all">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg} mb-4`}>
                    {c.count.toLocaleString()} active
                  </span>
                  <div className="text-base font-semibold group-hover:text-brand transition-colors">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.blurb}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Featured opportunities</h2>
              <p className="text-muted-foreground max-w-[56ch]">Trending internships, hackathons, and challenges this week.</p>
            </div>
            <Link to="/explore" className="text-sm font-medium text-brand hover:underline underline-offset-4">
              View all listings →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((o) => <OpportunityCard key={o.id} o={o} />)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-surface/50 border-y border-hairline">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Curated opportunities", body: "No cluttered generic job feed. Discover internships, hackathons, and challenges that actually matter." },
              { icon: Target,   title: "Track everything",      body: "Save opportunities, monitor deadlines, and manage applications from one dashboard." },
              { icon: LineChart,title: "Built for early-career growth", body: "Designed for students and early-career candidates exploring internships, competitions, and real-world challenges." },
            ].map((c) => (
              <div key={c.title} className="bg-card p-8 rounded-2xl ring-1 ring-hairline">
                <div className="size-10 rounded-lg bg-brand/10 text-brand grid place-items-center mb-5">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { n: "01", t: "Browse by category, domain, or deadline" },
              { n: "02", t: "Save interesting opportunities and set reminders" },
              { n: "03", t: "Apply, register, and track your progress from one workspace" },
            ].map((s) => (
              <div key={s.n} className="relative">
                <div className="text-4xl font-semibold text-brand-accent mb-4 font-mono">{s.n}</div>
                <div className="text-lg font-medium leading-snug">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <section className="py-24 bg-brand text-brand-foreground overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6 text-balance">
              Hiring interns or running a challenge? Reach the right audience.
            </h2>
            <p className="text-brand-foreground/70 mb-10 max-w-[52ch] leading-relaxed">
              Post internships, hackathons, case competitions, and early-career opportunities to a focused audience of students and emerging professionals.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/post" className="bg-background text-brand py-3 px-5 rounded-xl font-medium text-sm inline-flex items-center gap-2 hover:opacity-90">
                Post an Opportunity <ArrowRight className="size-4" />
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-brand-foreground/80 hover:text-brand-foreground underline-offset-4 hover:underline">
                See pricing
              </Link>
            </div>
          </div>
          <div className="bg-background/10 backdrop-blur-sm p-8 rounded-3xl ring-1 ring-background/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">Starting at</span>
            <div className="mt-2 flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-semibold">₹999</span>
              <span className="text-sm opacity-60">per listing</span>
            </div>
            <ul className="space-y-3 text-sm">
              {["30-day listing", "Category tagging & filters", "Featured add-on options", "Analytics dashboard"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-brand-accent/20 grid place-items-center">
                    <div className="size-1.5 rounded-full bg-brand-accent" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "10k+", l: "Students reached" },
            { n: "500+", l: "Opportunities posted" },
            { n: "100+", l: "Organizers onboarded" },
            { n: "₹2Cr+", l: "In prize pools listed" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-semibold text-brand">{s.n}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
