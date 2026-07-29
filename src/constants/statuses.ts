export const STATUSES = [
  "saved",
  "applied",
  "screening",
  "interview",
  "final",
  "offer",
  "rejected",
  "ghosted",
  "withdrawn",
] as const;

export type Status = (typeof STATUSES)[number];

type StatusMeta = {
  label: string;
  color: string;   // tailwind classes for badges
  dot: string;     // solid color for charts + timeline dots
  active: boolean; // still in play?
};

export const STATUS_META: Record<Status, StatusMeta> = {
  saved: {
    label: "Saved",
    color: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    dot: "#94a3b8",
    active: true,
  },
  applied: {
    label: "Applied",
    color: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    dot: "#38bdf8",
    active: true,
  },
  screening: {
    label: "Screening",
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    dot: "#a78bfa",
    active: true,
  },
  interview: {
    label: "Interview",
    color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    dot: "#e879f9",
    active: true,
  },
  final: {
    label: "Final Round",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "#fbbf24",
    active: true,
  },
  offer: {
    label: "Offer",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "#34d399",
    active: true,
  },
  rejected: {
    label: "Rejected",
    color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    dot: "#fb7185",
    active: false,
  },
  ghosted: {
    label: "Ghosted",
    color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    dot: "#71717a",
    active: false,
  },
  withdrawn: {
    label: "Withdrawn",
    color: "bg-stone-500/10 text-stone-400 border-stone-500/20",
    dot: "#a8a29e",
    active: false,
  },
};

/** Order shown on the kanban board (closed states hidden by default) */
export const BOARD_COLUMNS: Status[] = [
  "saved",
  "applied",
  "screening",
  "interview",
  "final",
  "offer",
];

/** Order used by the funnel chart */
export const FUNNEL_STAGES: Status[] = [
  "applied",
  "screening",
  "interview",
  "final",
  "offer",
];

/** A company "replied" once it moves past applied */
export const REPLIED_STATUSES: Status[] = [
  "screening",
  "interview",
  "final",
  "offer",
  "rejected",
];

/** Days of silence before we call it ghosted */
export const GHOST_THRESHOLD_DAYS = 21;