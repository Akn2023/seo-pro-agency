import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: LeadId;
    fullName: string;
    submittedAt: Timestamp;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export interface AuditReport {
    url: string;
    overallScore: bigint;
    onPageScore: bigint;
    recommendations: Array<string>;
    pageSpeedScore: bigint;
    metaTagsScore: bigint;
    technicalScore: bigint;
    mobileFriendlinessScore: bigint;
    backlinkScore: bigint;
}
export type Timestamp = bigint;
export type LeadId = bigint;
export interface LeadInput {
    fullName: string;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export type AuditResult = {
    __kind__: "ok";
    ok: AuditReport;
} | {
    __kind__: "err";
    err: string;
};
export type SubmitLeadResult = {
    __kind__: "ok";
    ok: LeadId;
} | {
    __kind__: "err";
    err: string;
};
export interface backendInterface {
    getLeads(): Promise<Array<Lead>>;
    runSeoAudit(url: string): Promise<AuditResult>;
    submitLead(input: LeadInput): Promise<SubmitLeadResult>;
}
