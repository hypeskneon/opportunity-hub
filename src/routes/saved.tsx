import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, Bell, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { opportunities, typeMeta } from "@/lib/opportunities";

export const Route = createFileRoute("/saved")({
  component: Saved,
});

const tabs = ["All Saved", "Internships", "Hackathons", "Challenges", "Closed"] as const;

function Saved() {
  const saved = opportunities;
  const stats = [
    { label: "Saved opportunities", value: saved.length },
    { label: "Deadlines this week", value: 3 },
    { label: "Applied / registered", value: 2 },
    { label: "Closing soon", value: 4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight mb-2">Saved Opportunities</h1>
            <p className="text-muted-foreground">Everything you've bookmarked, organized by category and deadline.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium py-2 px-4 rounded-lg ring-1 ring-hairline bg-card hover:bg-secondary">Filter</button>
            <Link to="/tracker" className="text-sm font-medium py-2 px-4 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90 inline-flex items-center gap-2">
              Go to Tracker <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-card ring-1 ring-hairline rounded-2xl p-5">
              <div className="text-3xl font-semibold text-brand">{s.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6 border-b border-hairline">
          {tabs.map((t, i) => (
            <button key={t} className={`px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors ${i === 0 ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {saved.map((o) => {
            const meta = typeMeta[o.type];
            return (
              <div key={o.id} className="bg-card ring-1 ring-hairline rounded-2xl p-5 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_160px_160px_auto] gap-4 items-center">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg}`}>{meta.label}</span>
                    <span className="text-[11px] text-muted-foreground">Saved 3 days ago</span>
                  </div>
                  <Link to="/opportunity/$id" params={{ id: o.id }} className="font-semibold hover:text-brand transition-colors block truncate">{o.title}</Link>
                  <div className="text-sm text-muted-foreground truncate">{o.host}</div>
                </div>
                <div className="hidden md:block text-xs">
                  <div className="text-muted-foreground">Deadline</div>
                  <div className="font-medium text-warning">{o.deadline}</div>
                </div>
                <div className="hidden md:block">
                  <span className="px-2 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-wider">Saved</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Reminder"><Bell className="size-4" /></button>
                  <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground" aria-label="Remove"><Bookmark className="size-4 fill-current" /></button>
                  <Link to="/opportunity/$id" params={{ id: o.id }} className="text-sm font-medium py-2 px-3 rounded-lg bg-secondary hover:bg-secondary/70">View</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
