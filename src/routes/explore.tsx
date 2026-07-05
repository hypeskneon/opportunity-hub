import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { OpportunityRow } from "@/components/opportunity-card";
import { opportunities } from "@/lib/opportunities";

export const Route = createFileRoute("/explore")({
  component: Explore,
});

const filterGroups = [
  { title: "Opportunity type", options: ["Internship", "Hackathon", "Case Competition", "Business Challenge", "Product Challenge", "Fellowship"] },
  { title: "Domain",           options: ["Product", "Software", "Consulting", "Finance", "Marketing", "Design", "Data / Analytics"] },
  { title: "Mode",             options: ["Remote", "In-person", "Hybrid"] },
  { title: "Eligibility",      options: ["1st year", "2nd year", "3rd year", "Final year", "Graduate", "Early-career pro"] },
  { title: "Deadline",         options: ["Closing in 3 days", "Closing this week", "Closing this month"] },
  { title: "Compensation",     options: ["Paid internship", "Prize money", "Unpaid / experience only"] },
];

function Explore() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Organizer banner */}
      <div className="bg-brand text-brand-foreground">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span>Are you an organizer? Post your opportunity and reach high-intent candidates.</span>
          <Link to="/post" className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 bg-background/10 hover:bg-background/20 rounded-md">
            Post Now →
          </Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight mb-2">Explore Opportunities</h1>
            <p className="text-muted-foreground max-w-[64ch]">Browse internships, hackathons, case competitions, and challenges tailored for students and early-career candidates.</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-sm bg-card ring-1 ring-hairline rounded-lg px-3 py-2">
              <option>Sort: Trending</option>
              <option>Deadline (soonest)</option>
              <option>Newest</option>
              <option>Highest stipend / prize</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          {/* Sidebar filters */}
          <aside className="space-y-6">
            <div className="bg-card ring-1 ring-hairline rounded-2xl p-4">
              <label className="relative block">
                <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search title, company, skill..."
                  className="w-full bg-secondary pl-9 pr-3 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-brand/30"
                />
              </label>
            </div>

            {filterGroups.map((g) => (
              <div key={g.title} className="bg-card ring-1 ring-hairline rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="size-3" /> {g.title}
                </h4>
                <div className="space-y-2">
                  {g.options.map((o) => (
                    <label key={o} className="flex items-center gap-2 text-sm text-foreground cursor-pointer hover:text-brand">
                      <input type="checkbox" className="rounded border-hairline accent-brand" />
                      {o}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-2">
              <button className="flex-1 py-2.5 bg-brand text-brand-foreground rounded-lg text-sm font-medium hover:bg-brand/90">Apply Filters</button>
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground px-3">Reset</button>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="text-sm">
                <span className="font-semibold">{opportunities.length * 41} opportunities</span>
                <span className="text-muted-foreground"> found</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Internship", "Remote", "Product"].map((c) => (
                  <span key={c} className="inline-flex items-center gap-1 px-2 py-1 bg-brand/10 text-brand rounded-full text-[11px] font-medium">
                    {c} <X className="size-3 cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {opportunities.map((o) => <OpportunityRow key={o.id} o={o} />)}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
