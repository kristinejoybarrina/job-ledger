export const SOURCES = [
  "linkedin",
  "kalibrr",
  "jobstreet",
  "indeed",
  "company_site",
  "referral",
  "job_fair",
  "facebook",
  "other",
] as const;

export type Source = (typeof SOURCES)[number];

export const SOURCE_LABELS: Record<Source, string> = {
  linkedin: "LinkedIn",
  kalibrr: "Kalibrr",
  jobstreet: "JobStreet",
  indeed: "Indeed",
  company_site: "Company Website",
  referral: "Referral",
  job_fair: "Job Fair",
  facebook: "Facebook",
  other: "Other",
};

export const WORK_SETUPS = ["onsite", "hybrid", "remote"] as const;
export type WorkSetup = (typeof WORK_SETUPS)[number];

export const SETUP_LABELS: Record<WorkSetup, string> = {
  onsite: "On-site",
  hybrid: "Hybrid",
  remote: "Remote",
};