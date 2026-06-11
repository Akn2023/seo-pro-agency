import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
export interface SubscriptionView {
    status: SubscriptionStatus;
    nextBillingDate: Timestamp;
    trialEndDate: Timestamp;
    isInstantPayment: boolean;
    createdAt: Timestamp;
    discountedAmountCents: bigint;
    amountCents: bigint;
    stripeSessionId?: string;
    trialStartDate: Timestamp;
    planName: string;
    planType: PlanType;
}
export interface CheckoutRequest {
    isInstantPayment: boolean;
    plan: PlanType;
}
export interface LeadInput {
    fullName: string;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export type CheckoutSessionResult = {
    __kind__: "ok";
    ok: CheckoutSessionData;
} | {
    __kind__: "err";
    err: string;
};
export interface Lead {
    id: LeadId;
    fullName: string;
    submittedAt: Timestamp;
    email: string;
    company: string;
    message: string;
    phone: string;
}
export type GetSubscriptionResult = {
    __kind__: "ok";
    ok: SubscriptionView;
} | {
    __kind__: "notFound";
    notFound: null;
};
export interface TransactionView {
    status: TransactionStatus;
    paymentMethod: PaymentMethod;
    amountCents: bigint;
    orderId: string;
    timestamp: Timestamp;
    stripeSessionId?: string;
    planName: string;
    planType: PlanType;
}
export interface CheckoutSessionData {
    isSubscription: boolean;
    isInstantPayment: boolean;
    trialDays: bigint;
    discountedAmountCents: bigint;
    amountCents: bigint;
    orderId: string;
    sessionId: string;
    planName: string;
    planType: PlanType;
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
export enum PaymentMethod {
    stripe = "stripe"
}
export enum PlanType {
    webDesign = "webDesign",
    enterprise = "enterprise",
    starter = "starter",
    professional = "professional"
}
export enum SubscriptionStatus {
    trial = "trial",
    active = "active",
    cancelled = "cancelled",
    pastDue = "pastDue"
}
export enum TransactionStatus {
    pending = "pending",
    success = "success",
    failed = "failed"
}
export interface backendInterface {
    cancelSubscription(): Promise<boolean>;
    confirmPayment(stripeSessionId: string): Promise<boolean>;
    createCheckoutSession(req: CheckoutRequest): Promise<CheckoutSessionResult>;
    getAllTransactions(): Promise<Array<TransactionView>>;
    getLeads(): Promise<Array<Lead>>;
    getMyTransactions(): Promise<Array<TransactionView>>;
    getSubscription(): Promise<GetSubscriptionResult>;
    runSeoAudit(url: string): Promise<AuditResult>;
    submitLead(input: LeadInput): Promise<SubmitLeadResult>;
}
