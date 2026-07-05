import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { quickDomains } from "@/lib/opportunities";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

const oppTypes = ["Internships", "Hackathons", "Case Comps", "Challenges", "Fellowships"];
const alertOptions = [
  { key: "email",     label: "Email alerts",             desc: "Get notified when new opportunities match your preferences" },
  { key: "digest",    label: "Weekly digest",             desc: "A curated summary of top opportunities every Monday" },
  { key: "deadline",  label: "Deadline reminders",        desc: "Reminders 3 days before saved opportunity deadlines" },
  { key: "saved",     label: "Saved-opportunity updates", desc: "When statuses or details change on opportunities you saved" },
];

function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="max-w-[900px] mx-auto px-6 py-10">
        <h1 className="text-4xl font-semibold tracking-tight mb-2">Profile & preferences</h1>
        <p className="text-muted-foreground mb-10">Tune what you see and how you get notified.</p>

        {/* Profile */}
        <Card title="Your profile">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Full name" defaultValue="Aarav Mehta" />
            <Field label="Email" defaultValue="aarav@vantage.dev" />
            <Field label="College / profession" defaultValue="IIT Bombay" />
            <Field label="Graduation year" defaultValue="2026" />
            <Field label="Location (optional)" defaultValue="Mumbai" />
          </div>
        </Card>

        {/* Preferences */}
        <Card title="Interest preferences">
          <Sub label="Opportunity types" />
          <ChipRow items={oppTypes} initialActive={["Internships", "Hackathons"]} />

          <Sub label="Domains" className="mt-6" />
          <ChipRow items={quickDomains} initialActive={["Product", "Design"]} />

          <label className="flex items-center gap-3 mt-8 cursor-pointer">
            <input type="checkbox" defaultChecked className="rounded border-hairline accent-brand size-4" />
            <span className="text-sm">Only show remote opportunities</span>
          </label>
        </Card>

        {/* Alerts */}
        <Card title="Alerts">
          <div className="space-y-4">
            {alertOptions.map((a) => (
              <label key={a.key} className="flex items-start justify-between gap-4 cursor-pointer">
                <div>
                  <div className="font-medium text-sm">{a.label}</div>
                  <div className="text-xs text-muted-foreground">{a.desc}</div>
                </div>
                <Toggle defaultOn />
              </label>
            ))}
          </div>
        </Card>

        <div className="flex flex-wrap gap-3 justify-between">
          <button className="text-sm font-medium py-3 px-5 rounded-xl bg-brand text-brand-foreground hover:bg-brand/90">Save Preferences</button>
          <div className="flex gap-3">
            <button className="text-sm font-medium py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground">Log out</button>
            <button className="text-sm font-medium py-3 px-4 rounded-xl text-destructive hover:bg-destructive/10">Delete account</button>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-card ring-1 ring-hairline rounded-2xl p-6 mb-6">
      <h2 className="text-lg font-semibold mb-5">{title}</h2>
      {children}
    </section>
  );
}
function Sub({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 ${className}`}>{label}</div>;
}
function Field({ label, defaultValue }: { label: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground block mb-1.5">{label}</span>
      <input defaultValue={defaultValue} className="w-full bg-background ring-1 ring-hairline rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand/30" />
    </label>
  );
}
function ChipRow({ items, initialActive = [] }: { items: string[]; initialActive?: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => {
        const on = initialActive.includes(i);
        return (
          <button key={i} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${on ? "bg-brand text-brand-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}>{i}</button>
        );
      })}
    </div>
  );
}
function Toggle({ defaultOn }: { defaultOn?: boolean }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer shrink-0">
      <input type="checkbox" defaultChecked={defaultOn} className="sr-only peer" />
      <div className="w-10 h-6 bg-secondary rounded-full peer-checked:bg-brand transition-colors relative">
        <div className="absolute top-0.5 left-0.5 size-5 bg-background rounded-full transition-transform peer-checked:translate-x-4 shadow-sm" />
      </div>
    </label>
  );
}
