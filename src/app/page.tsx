import Link from "next/link";
import {
  Sparkles,
  ChartNoAxesColumn,
  Ghost,
  Target,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Paste, don't type",
    body: "Drop in a posting from JobStreet, LinkedIn, or Indeed. The details fill themselves in — you just confirm.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Know which board works",
    body: "Reply rate per source, so you stop wasting hours on the site that never answers.",
  },
  {
    icon: Ghost,
    title: "Catch the ghosts",
    body: "Applications that go quiet get flagged automatically, with a nudge to follow up.",
  },
  {
    icon: Target,
    title: "See your skill gaps",
    body: "The skills that keep appearing across every posting you want — ranked by how often.",
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-border/60 sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" className="glow-primary" asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* hero */}
        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Job search, measured</p>

            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Stop guessing why nobody{" "}
              <span className="text-primary">called back</span>.
            </h1>

            <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
              JobLedger is a job application tracker with a memory. It records
              every application, watches how each one moves, and tells you what
              your spreadsheet never could — which job board actually replies,
              how long before a company goes quiet, and which skills you keep
              getting asked for.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="glow-primary gap-2" asChild>
                <Link href="/signup">
                  Start tracking
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/login">I already have an account</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* features */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="clay clay-hover p-6"
              >
                <div className="clay-inset mb-4 grid size-10 place-items-center rounded-[12px]">
                  <feature.icon className="text-primary size-4" />
                </div>
                <h2 className="font-medium">{feature.title}</h2>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-border/60 border-t">
        <div className="text-muted-foreground mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>JobLedger — a self-learning project.</p>
          <p className="font-mono">Built by Angeline &amp; Kristine</p>
        </div>
      </footer>
    </div>
  );
}