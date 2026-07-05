import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Upload } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/create-listing")({
  validateSearch: (s: Record<string, unknown>) => ({ plan: (s.plan as string) ?? "featured" }),
  component: CreateListing,
});

const steps = ["Opportunity Type", "Details", "Organizer", "Preview", "Payment"];

const planPricing: Record<string, { name: string; price: number }> = {
  basic:    { name: "Basic",    price: 999 },
  featured: { name: "Featured", price: 2499 },
  premium:  { name: "Premium",  price: 5999 },
};

function CreateListing() {
  const { plan } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [type, setType] = useState("internship");
  const selectedPlan = planPricing[plan] ?? planPricing.featured;

  return (
    <div className="min-h-screen bg-background">
      <SiteNav variant="employer" />

      <div className="max-w-[1100px] mx-auto px-6 py-10">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`size-7 rounded-full grid place-items-center text-xs font-bold shrink-0 ${i <= step ? "bg-brand text-brand-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {i < step ? <Check className="size-3.5" /> : i + 1}
                </div>
                <div className={`text-xs font-medium truncate ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</div>
                {i < steps.length - 1 && <div className={`h-px flex-1 ${i < step ? "bg-brand" : "bg-hairline"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8">
          <div className="bg-card ring-1 ring-hairline rounded-3xl p-8">
            {step === 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">What are you posting?</h2>
                <p className="text-muted-foreground mb-8">Pick the format that best fits.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { k: "internship", t: "Internship",       d: "Paid or unpaid, remote or in-person." },
                    { k: "hackathon",  t: "Hackathon",        d: "Sprint format with prize pools." },
                    { k: "case",       t: "Case Competition", d: "Consulting or strategy cases with rounds." },
                    { k: "challenge",  t: "Product / Business Challenge", d: "Open briefs with mentor support." },
                  ].map((o) => (
                    <button
                      key={o.k}
                      onClick={() => setType(o.k)}
                      className={`text-left p-5 rounded-2xl ring-1 transition-all ${type === o.k ? "ring-2 ring-brand bg-brand-soft" : "ring-hairline hover:ring-brand/40"}`}
                    >
                      <div className="font-semibold mb-1">{o.t}</div>
                      <div className="text-xs text-muted-foreground">{o.d}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Opportunity details</h2>
                <p className="text-muted-foreground mb-8">The candidate-facing content of your listing.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Opportunity title" placeholder="e.g. Product Design Summer Intern 2026" />
                  <Field label="Company / organizer name" placeholder="Acme Inc." />
                  <div className="md:col-span-2">
                    <Label>Logo</Label>
                    <div className="flex items-center gap-4 p-4 ring-1 ring-dashed ring-hairline rounded-xl">
                      <div className="size-12 rounded-lg bg-secondary grid place-items-center text-muted-foreground"><Upload className="size-5" /></div>
                      <div className="text-sm text-muted-foreground">PNG or SVG, max 2MB</div>
                    </div>
                  </div>
                  <Field label="Domain" placeholder="Product, Software, Design..." />
                  <Field label="Tags (comma-separated)" placeholder="Remote, Paid, Product" />
                  <div className="md:col-span-2">
                    <Label>Short summary</Label>
                    <textarea rows={2} className="w-full bg-background ring-1 ring-hairline rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/30" placeholder="One line pitch shown on cards" />
                  </div>
                  <div className="md:col-span-2">
                    <Label>Full description</Label>
                    <textarea rows={5} className="w-full bg-background ring-1 ring-hairline rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/30" />
                  </div>
                  <Field label="Compensation / prize" placeholder="₹45,000 / month" />
                  <Field label="Mode" placeholder="Remote / In-person / Hybrid" />
                  <Field label="Location" placeholder="Bengaluru" />
                  <Field label="Duration / team size" placeholder="10 weeks" />
                  <Field label="Eligibility" placeholder="Pre-final year, Final year" />
                  <Field label="Application deadline" type="date" />
                  <Field label="Start / event date" type="date" />
                  <div className="md:col-span-2">
                    <Field label="Official apply / registration link" placeholder="https://" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Organizer details</h2>
                <p className="text-muted-foreground mb-8">Used for verification and billing.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Contact person name" />
                  <Field label="Work email" type="email" />
                  <Field label="Phone (optional)" />
                  <Field label="Company website" placeholder="https://" />
                  <Field label="LinkedIn / organizer page" placeholder="https://" />
                  <Field label="Billing name (GST optional)" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Preview your listing</h2>
                <p className="text-muted-foreground mb-8">This is how candidates will see it.</p>
                <div className="bg-background ring-1 ring-hairline rounded-2xl p-6">
                  <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-badge-intern text-badge-intern-fg">Internship</span>
                  <h3 className="text-2xl font-semibold mt-4 mb-2">Product Design Summer Intern 2026</h3>
                  <div className="text-muted-foreground mb-4">Nexus Fintech Systems</div>
                  <p className="text-sm text-muted-foreground mb-6">Ship 0→1 flows on our merchant onboarding surface alongside senior designers.</p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-hairline text-sm">
                    <div><div className="text-[10px] uppercase text-muted-foreground">Stipend</div><div className="font-medium">₹45,000 / month</div></div>
                    <div><div className="text-[10px] uppercase text-muted-foreground">Deadline</div><div className="font-medium text-warning">Nov 12, 2025</div></div>
                    <div><div className="text-[10px] uppercase text-muted-foreground">Mode</div><div className="font-medium">Remote</div></div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-semibold mb-2">Payment</h2>
                <p className="text-muted-foreground mb-8">Complete payment to publish your listing.</p>
                <Link to="/checkout" search={{ plan }} className="inline-flex items-center gap-2 bg-brand text-brand-foreground py-3 px-6 rounded-xl font-medium text-sm hover:bg-brand/90">
                  Continue to secure checkout <ArrowRight className="size-4" />
                </Link>
              </div>
            )}

            {/* Nav */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-hairline">
              {step > 0 ? (
                <button onClick={() => setStep((s) => s - 1)} className="text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-secondary">← Back</button>
              ) : (
                <Link to="/pricing" className="text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-secondary">← Back to pricing</Link>
              )}
              <div className="flex gap-2">
                {step === 1 && <button className="text-sm font-medium py-2.5 px-4 rounded-lg text-muted-foreground hover:text-foreground">Save draft</button>}
                {step < 4 && (
                  <button onClick={() => setStep((s) => Math.min(4, s + 1))} className="inline-flex items-center gap-2 bg-brand text-brand-foreground py-2.5 px-5 rounded-lg text-sm font-medium hover:bg-brand/90">
                    {step === 3 ? "Continue to Payment" : "Continue"} <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Plan summary */}
          <aside className="lg:sticky lg:top-24 self-start bg-card ring-1 ring-hairline rounded-2xl p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Selected plan</div>
            <div className="text-2xl font-semibold mb-1">{selectedPlan.name}</div>
            <div className="text-3xl font-semibold text-brand mb-6">₹{selectedPlan.price.toLocaleString("en-IN")}</div>
            <div className="space-y-2 text-sm mb-6 pb-6 border-b border-hairline">
              <Row label="Listing duration" v="30 days" />
              <Row label="Category placement" v="Included" />
              <Row label="Analytics" v="Included" />
            </div>
            <Link to="/pricing" className="text-sm text-brand hover:underline">Change plan</Link>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs font-medium text-muted-foreground block mb-1.5">{children}</span>;
}
function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input type={type} placeholder={placeholder} className="w-full bg-background ring-1 ring-hairline rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/30" />
    </label>
  );
}
function Row({ label, v }: { label: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
