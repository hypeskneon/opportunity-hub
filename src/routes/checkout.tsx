import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>) => ({ plan: (s.plan as string) ?? "featured" }),
  component: Checkout,
});

const planPricing: Record<string, { name: string; price: number }> = {
  basic:    { name: "Basic Listing",    price: 999 },
  featured: { name: "Featured Listing", price: 2499 },
  premium:  { name: "Premium Listing",  price: 5999 },
};

function Checkout() {
  const { plan } = Route.useSearch();
  const selected = planPricing[plan] ?? planPricing.featured;
  const subtotal = selected.price;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <SiteNav variant="employer" />

      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-8">Complete your listing</h1>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8">
          <div className="bg-card ring-1 ring-hairline rounded-3xl p-8">
            <h2 className="text-lg font-semibold mb-6">Payment method</h2>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {["Card", "UPI", "Netbanking"].map((m, i) => (
                <button key={m} className={`py-3 rounded-xl text-sm font-medium ring-1 ${i === 0 ? "ring-2 ring-brand bg-brand-soft" : "ring-hairline hover:bg-secondary"}`}>{m}</button>
              ))}
            </div>

            <div className="space-y-4">
              <Field label="Card number" placeholder="4242 4242 4242 4242" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Expiry" placeholder="MM / YY" />
                <Field label="CVC" placeholder="123" />
              </div>
              <Field label="Name on card" placeholder="Aarav Mehta" />
            </div>

            <div className="mt-8 flex items-start gap-3 text-xs text-muted-foreground bg-surface/50 rounded-xl p-4">
              <ShieldCheck className="size-4 text-brand-accent shrink-0 mt-0.5" />
              <div>Payments are processed securely. Rovelio never stores your card details. Powered by Razorpay.</div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <Link to="/create-listing" search={{ plan }} className="text-sm font-medium py-3 px-4 rounded-xl hover:bg-secondary">Cancel</Link>
              <Link to="/employer" className="bg-brand text-brand-foreground py-3 px-6 rounded-xl font-medium text-sm hover:bg-brand/90 inline-flex items-center gap-2">
                <Lock className="size-4" /> Pay ₹{total.toLocaleString("en-IN")}
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start bg-card ring-1 ring-hairline rounded-3xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Order summary</h3>
            <div className="pb-4 mb-4 border-b border-hairline">
              <div className="font-semibold">{selected.name}</div>
              <div className="text-xs text-muted-foreground">30-day listing • Analytics included</div>
            </div>
            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-hairline">
              <Row label="Subtotal"        v={`₹${subtotal.toLocaleString("en-IN")}`} />
              <Row label="GST (18%)"       v={`₹${tax.toLocaleString("en-IN")}`} />
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground block mb-1.5">{label}</span>
      <input placeholder={placeholder} className="w-full bg-background ring-1 ring-hairline rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30" />
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
