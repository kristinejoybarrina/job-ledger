import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link href={href} className={cn("group flex items-center gap-2.5", className)}>
      <span className="from-primary to-indigo-glow relative grid size-8 place-items-center rounded-[10px] bg-gradient-to-br shadow-[var(--glow-primary)]">
        <span className="text-primary-foreground font-mono text-sm font-bold">
          J
        </span>
      </span>
      <span className="text-[0.95rem] font-semibold tracking-tight">
        Job<span className="text-primary">Ledger</span>
      </span>
    </Link>
  );
}