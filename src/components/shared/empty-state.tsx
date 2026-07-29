import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "clay flex flex-col items-center justify-center px-6 py-16 text-center",
        className,
      )}
    >
      <div className="clay-inset mb-4 grid size-12 place-items-center rounded-[14px]">
        <Icon className="text-muted-foreground size-5" />
      </div>

      <h2 className="font-medium">{title}</h2>
      <p className="text-muted-foreground mt-1 max-w-sm text-sm">
        {description}
      </p>

      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}