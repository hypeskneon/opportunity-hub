import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";
import { type Opportunity, typeMeta } from "@/lib/opportunities";

export function OpportunityCard({ o }: { o: Opportunity }) {
  const meta = typeMeta[o.type];
  return (
    <div className="group bg-card p-6 rounded-2xl ring-1 ring-hairline hover:ring-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all flex flex-col">
      <div className="flex justify-between items-start mb-5">
        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg}`}>
          {meta.label}
        </span>
        <button className="text-muted-foreground hover:text-brand transition-colors" aria-label="Save opportunity">
          <Bookmark className="size-4" />
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-1 group-hover:text-brand transition-colors leading-snug">
        {o.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-5">{o.host}</p>
      <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{o.summary}</p>
      <div className="space-y-3 pt-5 border-t border-hairline mt-auto">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{o.compensationLabel}</span>
          <span className="font-medium text-foreground">{o.compensation}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Deadline</span>
          <span className="font-medium text-warning">{o.deadline}</span>
        </div>
      </div>
      <Link
        to="/opportunity/$id"
        params={{ id: o.id }}
        className="w-full mt-5 py-2 px-4 bg-secondary hover:bg-secondary/70 text-foreground rounded-lg text-sm font-medium transition-colors text-center"
      >
        View Details
      </Link>
    </div>
  );
}

export function OpportunityRow({ o }: { o: Opportunity }) {
  const meta = typeMeta[o.type];
  return (
    <div className="bg-card p-5 rounded-2xl ring-1 ring-hairline hover:ring-brand/30 transition-all grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_180px_auto] gap-4 items-center">
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${meta.badge} ${meta.badgeFg}`}>
            {meta.label}
          </span>
          {o.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
        <Link to="/opportunity/$id" params={{ id: o.id }} className="text-base font-semibold hover:text-brand transition-colors block truncate">
          {o.title}
        </Link>
        <p className="text-sm text-muted-foreground truncate">{o.host} • {o.location}</p>
      </div>
      <div className="hidden md:block text-xs">
        <div className="text-muted-foreground">{o.compensationLabel}</div>
        <div className="font-medium">{o.compensation}</div>
        <div className="text-warning font-medium mt-1">{o.deadline}</div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button className="p-2 rounded-lg ring-1 ring-hairline hover:bg-secondary" aria-label="Save"><Bookmark className="size-4" /></button>
        <Link
          to="/opportunity/$id"
          params={{ id: o.id }}
          className="text-sm font-medium py-2 px-4 rounded-lg bg-brand text-brand-foreground hover:bg-brand/90"
        >
          View
        </Link>
      </div>
    </div>
  );
}
