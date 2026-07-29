import { LayoutGrid, ChartNoAxesColumn, Settings } from "lucide-react";

export const NAV_ITEMS = [
  {
    href: "/applications",
    label: "Applications",
    icon: LayoutGrid,
    description: "Every role you've applied to",
  },
  {
    href: "/insights",
    label: "Insights",
    icon: ChartNoAxesColumn,
    description: "Reply rates, funnel, and skill gaps",
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    description: "Profile and preferences",
  },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];