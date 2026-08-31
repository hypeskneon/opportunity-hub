import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutGrid, FileText, Plus, CreditCard, Settings, MoreHorizontal, ArrowRight, Eye, MousePointerClick, Clock } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/employer")({
  component: Employer,
});

const listings = [
  { title: "Product Design Summer Intern 2026", type: "Internship", status: "Active",    published: "Oct 08", expiry: "Nov 12", views: 4281, clicks: 612 },
  { title: "Web3 Infrastructure Challenge",     type: "Hackathon",  status: "Featured",  published: "Oct 15", expiry: "Dec 01", views: 2104, clicks: 388 },
  { title: "Growth Analytics Intern",           type: "Internship", status: "Expiring",  published: "Sep 20", expiry: "Nov 05", views: 1892, clicks: 271 },
  { title: "Razorpay Build Challenge",          type: "Challenge",  status: "Draft",     published: "—",       expiry: "—",       views: 0,    clicks: 0 },
];

const nav = [
  { icon: LayoutGrid, label: "Overview",  active: true },
  { icon: FileText,   label: "My Listings" },
  { icon: Plus,       label: "Create New Listing" },
  { icon: CreditCard, label: "Billing" },
  { icon: Settings,   label: "Settings" },
];

function Employer() {
  return (
    <div className="min-h-screen bg-surface/40">
      <SiteNav variant="employer" />

      <div className="max-w-[1400px] mx-auto px-6 py-8 grid lg:grid-cols-[240px_minmax(0,1fr)] gap-8">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 self-start bg-card ring-1 ring-hairline rounded-2xl p-3">
          {nav.map((n) => (
            <button key={n.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${n.active ? "bg-brand-soft text-brand" : "text-muted-foreground hover:bg-secondary"}`}>
              <n.icon className="size-4" /> {n.label}
            </button>
          ))}
        </aside>

        {/* Main */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight">Overview</h1>
              <p className="text-muted-foreground text-sm mt-1">Welcome back, Nexus Fintech</p>
            </div>
            <Link to="/create-listing" search={{ plan: "featured" }} className="inline-flex items-center gap-2 bg-brand text-brand-foreground py-2.5 px-4 rounded-xl text-sm font-medium hover:bg-brand/90">
              <Plus className="size-4" /> Create New Listing
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { Icon: FileText,           l: "Active listings", v: "3" },
              { Icon: Eye,                l: "Total views",     v: "8,277" },
              { Icon: MousePointerClick,  l: "Total clicks",    v: "1,271" },
              { Icon: Clock,              l: "Expiring soon",   v: "1" },
            ].map(({ Icon, l, v }) => (
              <div key={l} className="bg-card ring-1 ring-hairline rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <Icon className="size-4 text-brand" />
                </div>
                <div className="text-2xl font-semibold">{v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{l}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-card ring-1 ring-hairline rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold">Performance</h3>
                <p className="text-xs text-muted-foreground">Views & clicks over the past 30 days</p>
              </div>
              <select className="text-xs bg-background ring-1 ring-hairline rounded-lg px-2 py-1.5">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="h-40 flex items-end gap-1">
              {[30, 45, 38, 60, 52, 78, 65, 88, 72, 95, 82, 100, 88, 76, 92, 105, 98, 112, 96, 118, 102, 130, 115, 138, 120, 145, 128, 155, 140, 165].map((h, i) => (
                <div key={i} className="flex-1 relative">
                  <div className="w-full bg-brand-accent/20 rounded-t" style={{ height: `${(h / 165) * 100}%` }}>
                    <div className="w-full bg-brand rounded-t" style={{ height: `${((h * 0.15) / (h / 165)) }%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-6 mt-4 text-xs">
              <div className="flex items-center gap-2"><div className="size-2.5 rounded-sm bg-brand-accent/40" /> Views</div>
              <div className="flex items-center gap-2"><div className="size-2.5 rounded-sm bg-brand" /> Clicks</div>
            </div>
          </div>

          {/* Listings table */}
          <div className="bg-card ring-1 ring-hairline rounded-2xl overflow-hidden">
            <div className="p-5 flex items-center justify-between border-b border-hairline">
              <h3 className="font-semibold">Active listings</h3>
              <button className="text-sm font-medium text-brand hover:underline inline-flex items-center gap-1">View all <ArrowRight className="size-3.5" /></button>
            </div>
            <div className="divide-y divide-hairline">
              {listings.map((l) => (
                <div key={l.title} className="p-5 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_100px_120px_120px_auto] gap-4 items-center">
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{l.type}</div>
                    <div className="font-medium truncate">{l.title}</div>
                    <div className="text-xs text-muted-foreground">Expires {l.expiry}</div>
                  </div>
                  <div className="hidden md:block">
                    <StatusPill status={l.status} />
                  </div>
                  <div className="hidden md:block text-sm">
                    <div className="text-xs text-muted-foreground">Views</div>
                    <div className="font-medium">{l.views.toLocaleString("en-IN")}</div>
                  </div>
                  <div className="hidden md:block text-sm">
                    <div className="text-xs text-muted-foreground">Clicks</div>
                    <div className="font-medium">{l.clicks.toLocaleString("en-IN")}</div>
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <button className="text-xs font-medium py-1.5 px-2.5 rounded-md hover:bg-secondary">View</button>
                    <button className="text-xs font-medium py-1.5 px-2.5 rounded-md hover:bg-secondary">Edit</button>
                    <button className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground"><MoreHorizontal className="size-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active:   "bg-badge-intern text-badge-intern-fg",
    Featured: "bg-brand text-brand-foreground",
    Expiring: "bg-badge-challenge text-badge-challenge-fg",
    Draft:    "bg-secondary text-secondary-foreground",
  };
  return <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${map[status] ?? ""}`}>{status}</span>;
}
