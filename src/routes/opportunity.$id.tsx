import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, ExternalLink, Bell, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getOpportunity, opportunities, typeMeta } from "@/lib/opportunities";

export const Route = createFileRoute("/opportunity/$id")({
  loader: ({ params }) => {
    const o = getOpportunity(params.id);
    if (!o) throw notFound();
    return { opportunity: o };
  },
  component: Detail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Opportunity not found</h1>
        <Link to="/explore" className="text-brand hover:underline">Browse all opportunities</Link>
      </div>
    </div>
  ),
});

function Detail() {
  const { opportunity: o } = Route.useLoaderData();
  const meta = typeMeta[o.type];
  const similar = opportunities.filter((x) => x.id !== o.id && x.type === o.type).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link to="/explore" className="hover:text-brand">Discover</Link>
          <ChevronRight className="size-3" />
          <Link to="/explore" className="hover:text-brand">{meta.label}s</Link>
          <ChevronRight className="size-3" />
          <span className="text-foreground truncate">{o.title}</span>
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-10">
          <div>
            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg}`}>
              {meta.label}
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-3 leading-[1.1]">{o.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{o.host}</p>
            <p className="text-base leading-relaxed mb-8 max-w-[68ch]">{o.summary}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm pb-8 mb-8 border-b border-hairline">
              <MetaItem label="Mode" value={o.mode} />
              <MetaItem label={o.compensationLabel} value={o.compensation} />
              <MetaItem label="Location" value={o.location} />
              {o.duration && <MetaItem label="Duration" value={o.duration} />}
              {o.teamSize && <MetaItem label="Team" value={o.teamSize} />}
              <MetaItem label="Deadline" value={o.deadline} accent />
            </div>

            {/* About */}
            <Section title="About">
              <p className="text-base leading-relaxed text-muted-foreground">{o.description}</p>
            </Section>

            <Section title="Eligibility">
              <ul className="space-y-2">
                {o.eligibility.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-sm">
                    <div className="size-1.5 rounded-full bg-brand-accent" /> {e}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={o.type === "internship" ? "Responsibilities" : "Challenge brief"}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {o.type === "internship"
                  ? "You'll pair with senior team members on core surfaces, contribute to design/engineering reviews, and ship production-facing work with clear ownership within your first 4 weeks."
                  : "Teams will receive a detailed brief on kickoff day and submit deliverables via the official portal. Rounds include preliminary submission, live evaluation, and finals."}
              </p>
            </Section>

            <Section title="Key dates">
              <ol className="relative border-l-2 border-hairline pl-6 space-y-5">
                {o.timeline.map((t, i) => (
                  <li key={i} className="relative">
                    <div className="absolute -left-[29px] top-1.5 size-3 rounded-full bg-brand ring-4 ring-background" />
                    <div className="text-sm font-medium">{t.label}</div>
                    <div className="text-xs text-muted-foreground">{t.date}</div>
                  </li>
                ))}
              </ol>
            </Section>

            <Section title="Skills & tags">
              <div className="flex flex-wrap gap-2">
                {o.skills.map((s) => (
                  <span key={s} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">{s}</span>
                ))}
              </div>
            </Section>

            <Section title="Official resources">
              <div className="space-y-2 text-sm">
                <a href={o.applyUrl} className="flex items-center gap-2 text-brand hover:underline"><ExternalLink className="size-4" /> Official listing page</a>
                <a href="#" className="flex items-center gap-2 text-brand hover:underline"><ExternalLink className="size-4" /> Rules & brochure (PDF)</a>
              </div>
            </Section>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            {/* Action card */}
            <div className="bg-card ring-1 ring-hairline rounded-2xl p-6">
              <a
                href={o.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-brand text-brand-foreground rounded-xl text-sm font-medium hover:bg-brand/90 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                Apply / Visit Official Site <ExternalLink className="size-4" />
              </a>
              <button className="w-full py-3 px-4 bg-secondary hover:bg-secondary/70 rounded-xl text-sm font-medium flex items-center justify-center gap-2 mb-3">
                <Bookmark className="size-4" /> Save Opportunity
              </button>
              <select className="w-full py-3 px-4 bg-card ring-1 ring-hairline rounded-xl text-sm font-medium">
                <option>Track: Saved</option>
                <option>Interested</option>
                <option>Applied</option>
                <option>Registered</option>
                <option>In Progress</option>
                <option>Submitted</option>
              </select>
              <button className="w-full mt-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground flex items-center justify-center gap-2">
                <Bell className="size-4" /> Set Reminder
              </button>
            </div>

            {/* Quick info */}
            <div className="bg-card ring-1 ring-hairline rounded-2xl p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Quick info</h4>
              <QuickRow label="Type" value={meta.label} />
              <QuickRow label="Deadline" value={o.deadline} accent />
              <QuickRow label="Mode" value={o.mode} />
              <QuickRow label={o.compensationLabel} value={o.compensation} />
              {o.duration && <QuickRow label="Duration" value={o.duration} />}
              <QuickRow label="Location" value={o.location} />
            </div>

            {/* Similar */}
            {similar.length > 0 && (
              <div className="bg-card ring-1 ring-hairline rounded-2xl p-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Similar opportunities</h4>
                <div className="space-y-3">
                  {similar.map((s) => (
                    <Link key={s.id} to="/opportunity/$id" params={{ id: s.id }} className="block group">
                      <div className="text-sm font-medium group-hover:text-brand transition-colors leading-snug">{s.title}</div>
                      <div className="text-xs text-muted-foreground">{s.host}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

function MetaItem({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`font-medium ${accent ? "text-warning" : ""}`}>{value}</div>
    </div>
  );
}

function QuickRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex justify-between items-center text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className={`font-medium ${accent ? "text-warning" : ""}`}>{value}</span>
    </div>
  );
}
