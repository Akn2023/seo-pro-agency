export interface LeadFormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export interface AuditReport {
  url: string;
  overallScore: bigint;
  onPageScore: bigint;
  technicalScore: bigint;
  pageSpeedScore: bigint;
  mobileFriendlinessScore: bigint;
  metaTagsScore: bigint;
  backlinkScore: bigint;
  contentAnalysisScore: bigint;
  recommendations: string[];
}

export type AuditResult =
  | { __kind__: "ok"; ok: AuditReport }
  | { __kind__: "err"; err: string };

export type SubmitLeadResult =
  | { __kind__: "ok"; ok: bigint }
  | { __kind__: "err"; err: string };

export interface NavLink {
  label: string;
  href: string;
}

export type AuditStatus = "idle" | "loading" | "success" | "error";
export type FormStatus = "idle" | "submitting" | "success" | "error";
