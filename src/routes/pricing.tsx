import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});

const plans = [
  {
    name: "Basic",
    price: "₹999",
    per: "/ listing",
    audience: "Small startups, clubs, student communities, or first-time posters.",
    features: [
      "1 opportunity listing",
      "30-day listing duration",
      "Standard placement in category pages",
      "Apply / registration link",
      "Company / organizer logo",
      "Tags, eligibility, deadline, compensation",
      "Basic analytics (views + clicks)",
    ],
    cta: "Choose Basic",
  },
  {
    name: "Featured",
    price: "₹2,499",
    per: "/ listing",
    audience: "Companies or organizers who want stronger visibility.",
    features: [
      "Everything in Basic",
      "Featured placement on homepage for 7 days",
      "Featured placement at top of category results",
      '"Featured" badge on card',
      "Priority review / faster publishing",
      "Enhanced analytics",
    ],
    cta: "Choose Featured",
    popular: true,
  },
  {
    name: "Premium",
    price: "₹5,999",
    per: "/ listing",
    audience: "Large hackathons, hiring drives, and major competitions.",
    features: [
      "Everything in Featured",
      "Homepage spotlight banner slot",
      "Extended 45–60 day listing duration",
      "Email newsletter inclusion",
      "Social media & community highlight",
      "Dedicated support & custom formatting",
    ],
    cta: "Choose Premium",
  },
];

const addons = [
  { t: "Extra 15 listing days",   p: "₹399" },
  { t: "Homepage featured strip", p: "₹799" },
  { t: "Newsletter inclusion",    p: "₹999" },
  { t: "Urgent approval",         p: "₹499" },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav variant="employer" />

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-4">Pricing</span>
          <h1 className="text-5xl font-semibold tracking-tight mb-4 text-balance">Post an opportunity</h1>
          <p className="text-lg text-muted-foreground max-w-[52ch] mx-auto">Choose a plan based on visibility and urgency. INR-priced for the Indian market.</p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 flex flex-col ${p.popular ? "bg-brand text-brand-foreground ring-4 ring-brand-accent/30" : "bg-card ring-1 ring-hairline"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most popular
                </div>
              )}
              <div className="text-lg font-semibold mb-2">{p.name}</div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-5xl font-semibold">{p.price}</span>
                <span className={`text-sm ${p.popular ? "opacity-70" : "text-muted-foreground"}`}>{p.per}</span>
              </div>
              <p className={`text-sm mb-8 ${p.popular ? "opacity-70" : "text-muted-foreground"}`}>{p.audience}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`size-4 shrink-0 mt-0.5 ${p.popular ? "text-brand-accent" : "text-brand"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/create-listing"
                search={{ plan: p.name.toLowerCase() }}
                className={`block text-center py-3 rounded-xl text-sm font-medium ${p.popular ? "bg-background text-brand hover:opacity-90" : "bg-brand text-brand-foreground hover:bg-brand/90"}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="max-w-[1200px] mx-auto px-6 mt-20">
          <div className="bg-surface/50 ring-1 ring-hairline rounded-3xl p-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-1">Optional add-ons</h3>
                <p className="text-sm text-muted-foreground">Stack on top of any plan.</p>
              </div>
              <a href="#" className="text-sm font-medium text-brand hover:underline">Need bulk hiring? Contact sales →</a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {addons.map((a) => (
                <div key={a.t} className="bg-card ring-1 ring-hairline rounded-xl p-4 flex items-center justify-between">
                  <div className="text-sm font-medium">{a.t}</div>
                  <div className="text-sm font-semibold text-brand">{a.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
