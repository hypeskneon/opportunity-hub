import { Link } from "@tanstack/react-router";

interface Props {
  variant?: "candidate" | "employer";
}

export function SiteNav({ variant = "candidate" }: Props) {
  return (
    <nav className="sticky top-0 z-50 h-20 bg-background/80 backdrop-blur-md border-b border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6">
        <div className="flex items-center gap-10 min-w-0">
          <Link to="/" className="text-xl font-semibold tracking-tight text-brand shrink-0">
            Vantage
          </Link>
          {variant === "candidate" ? (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/explore" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Discover</Link>
              <Link to="/explore" search={{ type: "internship" }} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Internships</Link>
              <Link to="/explore" search={{ type: "hackathon" }} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Hackathons</Link>
              <Link to="/explore" search={{ type: "challenge" }} className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Challenges</Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">For Candidates</Link>
              <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Pricing</Link>
              <Link to="/employer" className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors">Employer Dashboard</Link>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 shrink-0">
          {variant === "candidate" && (
            <>
              <Link to="/saved" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground">Saved</Link>
              <Link to="/tracker" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground">Tracker</Link>
              <Link to="/post" className="hidden lg:block text-sm font-medium text-muted-foreground hover:text-foreground">For Employers</Link>
            </>
          )}
          <button className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground">Log in</button>
          <Link
            to="/post"
            className="bg-brand text-brand-foreground text-sm font-medium py-2 px-4 rounded-lg hover:bg-brand/90 transition-colors"
          >
            Post an Opportunity
          </Link>
        </div>
      </div>
    </nav>
  );
}
