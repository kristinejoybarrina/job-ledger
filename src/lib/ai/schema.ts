import { z } from "zod";

export const extractedJobSchema = z.object({
  company: z.string().nullable()
    .describe("Company name. Null if not stated."),
  role: z.string().nullable()
    .describe("Job title, cleaned of extra tags like (Urgent) or (WFH)."),
  location: z.string().nullable()
    .describe("City and country, e.g. 'Makati, Philippines'."),
  setup: z.enum(["onsite", "hybrid", "remote"]).nullable()
    .describe("Work arrangement. Null if unclear."),
  salary_min: z.number().nullable()
    .describe("Monthly minimum salary as a plain number. Null if not stated."),
  salary_max: z.number().nullable()
    .describe("Monthly maximum salary as a plain number. Null if not stated."),
  currency: z.string().nullable()
    .describe("ISO code, e.g. PHP, USD, SGD. Null if not stated."),
  seniority: z.enum(["intern", "entry", "mid", "senior", "lead"]).nullable()
    .describe("Experience level implied by the posting."),
  skills: z.array(z.string()).max(20)
    .describe("Concrete technical skills only. No soft skills, no fluff."),
  responsibilities: z.array(z.string()).max(6)
    .describe("Main duties, each one short sentence."),
  confidence: z.number().min(0).max(1)
    .describe("How complete the job description was. 1 = very detailed."),
});

export type ExtractedJobSchema = z.infer<typeof extractedJobSchema>;