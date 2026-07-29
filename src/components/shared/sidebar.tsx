"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/nav";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm transition-colors",
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
            )}
          >
            {active && (
              <span className="bg-primary absolute top-1/2 left-0 h-5 w-[3px] -translate-y-1/2 rounded-r-full" />
            )}
            <item.icon
              className={cn(
                "size-4 shrink-0",
                active ? "text-primary" : "text-muted-foreground",
              )}
            />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="bg-sidebar border-sidebar-border hidden w-[var(--sidebar-w)] shrink-0 flex-col border-r lg:flex">
      <div className="flex h-16 items-center px-5">
        <Logo href="/applications" />
      </div>

      <div className="flex-1 px-3 py-2">
        <SidebarNav />
      </div>

      <div className="border-sidebar-border border-t p-3">
        <p className="text-muted-foreground/70 px-2 font-mono text-[0.65rem] tracking-wider uppercase">
          v0.1 · beta
        </p>
      </div>
    </aside>
  );
}