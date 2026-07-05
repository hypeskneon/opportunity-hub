import { createFileRoute } from "@tanstack/react-router";
import { Bell, Plus } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { opportunities, typeMeta } from "@/lib/opportunities";

export const Route = createFileRoute("/tracker")({
  component: Tracker,
});

const columns = [
  { key: "saved",       title: "Saved",        ids: ["nexus-product-design-2026", "razorpay-build-challenge"] },
  { key: "interested",  title: "Interested",   ids: ["zerodha-varsity-fellowship"] },
  { key: "applied",     title: "Applied",      ids: ["swiggy-growth-analytics"] },
  { key: "progress",    title: "In Progress",  ids: ["etherscale-web3-2025"] },
  { key: "submitted",   title: "Submitted",    ids: [] },
  { key: "closed",      title: "Shortlisted / Closed", ids: ["global-logistics-supply-chain"] },
];

function Tracker() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight mb-2">Tracker</h1>
            <p className="text-muted-foreground">Drag opportunities across stages. Add notes and reminders per card.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium py-2 px-4 rounded-lg ring-1 ring-hairline bg-card">Board</button>
            <button className="text-sm font-medium py-2 px-4 rounded-lg text-muted-foreground">List</button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6">
          {columns.map((col) => (
            <div key={col.key} className="min-w-[280px] w-[280px] shrink-0">
              <div className="flex items-center justify-between mb-3 px-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {col.title} <span className="text-foreground">({col.ids.length})</span>
                </h3>
                <button className="p-1 rounded hover:bg-secondary text-muted-foreground"><Plus className="size-3.5" /></button>
              </div>
              <div className="bg-surface/50 ring-1 ring-hairline rounded-2xl p-3 space-y-3 min-h-[240px]">
                {col.ids.map((id) => {
                  const o = opportunities.find((x) => x.id === id);
                  if (!o) return null;
                  const meta = typeMeta[o.type];
                  return (
                    <div key={id} className="bg-card ring-1 ring-hairline rounded-xl p-3 hover:shadow-sm cursor-grab">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg}`}>{meta.label}</span>
                        <Bell className="size-3 text-brand-accent" />
                      </div>
                      <div className="font-medium text-sm leading-snug mb-2 line-clamp-2">{o.title}</div>
                      <div className="text-[11px] text-muted-foreground">{o.host}</div>
                      <div className="text-[11px] text-warning font-medium mt-2 pt-2 border-t border-hairline">Due {o.deadline}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
