import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-20 bg-background border-t border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-xl font-semibold tracking-tight text-brand mb-4">Rovelio</div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            A curated opportunities platform for students and early-career candidates.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Candidates</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/explore" className="text-muted-foreground hover:text-brand">Discover</Link></li>
            <li><Link to="/saved" className="text-muted-foreground hover:text-brand">Saved</Link></li>
            <li><Link to="/tracker" className="text-muted-foreground hover:text-brand">Tracker</Link></li>
            <li><Link to="/profile" className="text-muted-foreground hover:text-brand">Alerts</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Employers</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/post" className="text-muted-foreground hover:text-brand">Post an Opportunity</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-brand">Pricing</Link></li>
            <li><Link to="/employer" className="text-muted-foreground hover:text-brand">Employer Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-brand">About</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-brand">Contact</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-brand">Privacy</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-brand">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 pt-12 mt-12 border-t border-hairline text-[11px] text-muted-foreground uppercase tracking-wide">
        © 2025 Rovelio Opportunity Platform
      </div>
    </footer>
  );
}
