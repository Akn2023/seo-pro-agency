import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSearch } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Mail,
  Rocket,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

type PlanKey = "starter" | "professional" | "enterprise" | "webdesign";

const PLAN_NAMES: Record<PlanKey, string> = {
  starter: "Starter",
  professional: "Professional",
  enterprise: "Enterprise",
  webdesign: "SEO Web Design",
};

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const NEXT_STEPS = [
  {
    icon: Mail,
    title: "Check your inbox",
    description:
      "We've sent a confirmation email with your account details and next steps.",
  },
  {
    icon: Settings,
    title: "7-day setup begins",
    description:
      "Our team will reach out within 24 hours to kick off your onboarding.",
  },
  {
    icon: Rocket,
    title: "Campaign goes live",
    description:
      "After setup, your SEO campaign starts driving traffic and results.",
  },
  {
    icon: Sparkles,
    title: "Track your progress",
    description:
      "Log into your dashboard anytime to see keyword rankings and performance.",
  },
];

export default function CheckoutSuccess() {
  const search = useSearch({ strict: false }) as { plan?: string };
  const planKey = (search.plan ?? "professional") as PlanKey;
  const planName = PLAN_NAMES[planKey] ?? "Professional";
  const isOneTime = planKey === "webdesign";

  const today = new Date();
  const trialEnd = addDays(today, 15);
  const nextBilling = addDays(today, 22);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
          data-ocid="checkout_success.page"
        >
          {/* Success hero */}
          <Card className="card-elevated border-accent/30 overflow-hidden">
            <div className="h-2 btn-gradient" />
            <CardContent className="pt-8 pb-6 text-center space-y-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="flex justify-center"
              >
                <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-accent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <h1 className="text-3xl font-bold font-display gradient-text">
                  You're all set!
                </h1>
                <p className="text-muted-foreground mt-1 text-base">
                  {isOneTime
                    ? `Your ${planName} order has been confirmed.`
                    : `Welcome to the ${planName} plan. Your 15-day free trial has started.`}
                </p>
              </motion.div>
            </CardContent>
          </Card>

          {/* Timeline card (subscriptions only) */}
          {!isOneTime && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Card className="card-elevated">
                <CardContent className="pt-5 pb-5">
                  <h2 className="font-semibold font-display text-foreground mb-4 flex items-center gap-2">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                    Your Timeline
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        date: formatDate(today),
                        label: "Trial starts today",
                        active: true,
                        note: "15-day free trial begins",
                      },
                      {
                        date: formatDate(addDays(today, 7)),
                        label: "Setup complete",
                        active: false,
                        note: "Campaign goes live",
                      },
                      {
                        date: formatDate(trialEnd),
                        label: "Free trial ends",
                        active: false,
                        note: "No charge if you cancel before this date",
                      },
                      {
                        date: formatDate(nextBilling),
                        label: "First billing date",
                        active: false,
                        note: `$${planKey === "starter" ? 79 : planKey === "professional" ? 159 : 239}/mo charged`,
                      },
                    ].map((item, timelineIdx) => (
                      <div key={item.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`h-3 w-3 rounded-full mt-1 flex-shrink-0 ${
                              item.active ? "bg-accent" : "bg-border"
                            }`}
                          />
                          {timelineIdx < 3 && (
                            <div className="w-0.5 h-8 bg-border mt-1" />
                          )}
                        </div>
                        <div className="pb-2">
                          <p className="text-sm font-medium text-foreground">
                            {item.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.date} · {item.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <Card className="card-elevated">
              <CardContent className="pt-5 pb-5">
                <h2 className="font-semibold font-display text-foreground mb-4 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary" />
                  What happens next
                </h2>
                <div className="space-y-4">
                  {NEXT_STEPS.map((step, i) => (
                    <div key={step.title}>
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {step.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {i < NEXT_STEPS.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/"
              className="flex-1"
              data-ocid="checkout_success.home_button"
            >
              <Button className="w-full btn-gradient font-semibold h-11 rounded-xl">
                Return to Home
              </Button>
            </a>
            <a
              href="/audit"
              className="flex-1"
              data-ocid="checkout_success.audit_button"
            >
              <Button variant="outline" className="w-full h-11 rounded-xl">
                Run Your First SEO Audit
                <Rocket className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          <p className="text-xs text-muted-foreground text-center">
            Need help?{" "}
            <a href="/about" className="text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
