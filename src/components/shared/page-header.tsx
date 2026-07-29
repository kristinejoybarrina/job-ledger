import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: Props) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="space-y-1.5">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="text-2xl font-semibold sm:text-[1.75rem]">{title}</h1>
        {description && (
          <p className="text-muted-foreground max-w-xl text-sm">
            {description}
          </p>
        )}
      </div>

      {action && <div className="flex shrink-0 gap-2">{action}</div>}
    </header>
  );
}