import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Target, Zap, Users } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/post")({
  component: Post,
});

function Post() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav variant="employer" />

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1fr_460px] gap-12 items-center">
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-4">For recruiters & organizers</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance mb-6">
              Reach students and early-career talent — with intent.
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-[52ch] leading-relaxed">
              Post your opportunity in minutes and get in front of a focused audience actively looking for internships, hackathons, and career-building experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/create-listing" search={{ plan: "featured" }} className="bg-brand text-brand-foreground py-3 px-5 rounded-xl font-medium text-sm inline-flex items-center gap-2 hover:bg-brand/90">
                Post an Opportunity <ArrowRight className="size-4" />
              </Link>
              <Link to="/pricing" className="py-3 px-5 rounded-xl font-medium text-sm ring-1 ring-hairline hover:bg-secondary">
                See pricing
              </Link>
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="bg-card ring-1 ring-hairline rounded-3xl p-6 shadow-xl shadow-brand/5">
            <div className="flex items-center justify-between mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Listing performance</div>
              <div className="text-[10px] font-mono text-brand-accent">LIVE</div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { l: "Views", v: "4,281" },
                { l: "Clicks", v: "612" },
                { l: "Saves", v: "184" },
              ].map((s) => (
                <div key={s.l} className="bg-background rounded-xl p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  <div className="text-xl font-semibold text-brand">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="h-24 flex items-end gap-1">
              {[30, 45, 38, 60, 52, 78, 65, 88, 72, 95, 82, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-brand-accent/30 rounded-t" style={{ height: `${h}%` }}>
                  <div className="w-full bg-brand-accent rounded-t" style={{ height: `${h * 0.6}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 p-3 bg-brand-soft rounded-xl">
              <div className="size-8 rounded-lg bg-brand grid place-items-center text-brand-foreground text-xs font-bold">FT</div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">Featured spotlight active</div>
                <div className="text-[11px] text-muted-foreground">3 days remaining</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What can you post */}
      <section className="py-20 bg-surface/50 border-y border-hairline">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-2">What you can post</h2>
          <p className="text-muted-foreground mb-10">One platform. Every early-career format.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Internships",       d: "Paid or unpaid, remote or in-person, summer or year-round." },
              { t: "Hackathons",        d: "Weekend sprints, virtual builds, or on-campus events." },
              { t: "Case competitions", d: "Consulting cases, strategy sprints, and finance modelling." },
              { t: "Product / business challenges", d: "Open briefs that let candidates prove their thinking." },
            ].map((c) => (
              <div key={c.t} className="bg-card p-6 rounded-2xl ring-1 ring-hairline">
                <div className="text-base font-semibold mb-2">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-10">Why post here</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: Target,    t: "Targeted audience", d: "Reach students and early-career talent actively searching." },
              { Icon: Zap,       t: "Simple listing flow", d: "Post in under 10 minutes with our structured form." },
              { Icon: BarChart3, t: "Real analytics",     d: "Views, clicks, saves, and applicant intent metrics." },
              { Icon: Users,     t: "Featured placement", d: "Homepage + category spotlight for high-priority hiring." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="bg-card p-6 rounded-2xl ring-1 ring-hairline">
                <div className="size-10 rounded-lg bg-brand/10 text-brand grid place-items-center mb-4">
                  <Icon className="size-5" />
                </div>
                <div className="font-semibold mb-2">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20 bg-brand text-brand-foreground">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">Simple pricing for startups, recruiters, and organizers</h2>
          <p className="text-brand-foreground/70">Pick a plan, publish in minutes.</p>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-4">
          {[
            { name: "Basic",    price: "₹999",  cta: "Choose Basic" },
            { name: "Featured", price: "₹2,499", cta: "Choose Featured", popular: true },
            { name: "Premium",  price: "₹5,999", cta: "Choose Premium" },
          ].map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl ${p.popular ? "bg-background text-foreground ring-4 ring-brand-accent/40" : "bg-background/10 ring-1 ring-background/20"}`}>
              <div className="text-sm font-medium mb-2">{p.name}</div>
              <div className="text-3xl font-semibold mb-6">{p.price}</div>
              <Link to="/create-listing" search={{ plan: p.name.toLowerCase() }} className={`block text-center py-3 rounded-xl text-sm font-medium ${p.popular ? "bg-brand text-brand-foreground" : "bg-background/10 hover:bg-background/20"}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/pricing" className="text-sm font-medium underline underline-offset-4">See full pricing details</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
