import type { Status } from "@/constants/statuses";
import type { Source, WorkSetup } from "@/constants/sources";

export type Seniority = "intern" | "entry" | "mid" | "senior" | "lead";

export type SkillCategory = "language" | "framework" | "tool" | "soft";

/** Shape returned by the AI extractor — mirrors lib/ai/schema.ts */
export type ExtractedJob = {
  company: string | null;
  role: string | null;
  location: string | null;
  setup: WorkSetup | null;
  salary_min: number | null;
  salary_max: number | null;
  currency: string | null;
  seniority: Seniority | null;
  skills: string[];
  responsibilities: string[];
  confidence: number;
};

export type Application = {
  id: string;
  user_id: string;

  company: string;
  role: string;
  source: Source | null;
  job_url: string | null;
  location: string | null;
  setup: WorkSetup | null;
  salary_min: number | null;
  salary_max: number | null;
  currency: string;

  status: Status;
  applied_at: string;
  last_activity_at: string;
  next_followup_at: string | null;

  job_description: string | null;
  ai_extracted: ExtractedJob | null;
  notes: string | null;

  created_at: string;
  updated_at: string;
};

type ServerManagedFields =
  | "id"
  | "user_id"
  | "created_at"
  | "updated_at"
  | "last_activity_at";

/** What the form sends when creating/editing */
export type ApplicationInput = Omit<Application, ServerManagedFields>;

export type StatusEvent = {
  id: string;
  application_id: string;
  user_id: string;
  from_status: Status | null;
  to_status: Status;
  occurred_at: string;
  note: string | null;
};

export type Skill = {
  id: string;
  name: string;
  slug: string;
  category: SkillCategory | null;
};