import { c as createLucideIcon, ah as useSearch, j as jsxRuntimeExports, B as Button } from "./index-BFTwSqlB.js";
import { C as Card, a as CardContent } from "./card-C1y6S-Xe.js";
import { S as Separator } from "./separator-DFtHj9QZ.js";
import { m as motion } from "./proxy-CPHCLHqo.js";
import { C as CircleCheck } from "./circle-check-LFQZJD_v.js";
import { A as ArrowRight } from "./arrow-right-CHyHq_6V.js";
import { S as Settings } from "./settings-CkQ428Le.js";
import { S as Sparkles } from "./sparkles-CsRiaVB8.js";
import "./index-Dlored5j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
];
const CalendarCheck = createLucideIcon("calendar-check", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
];
const Rocket = createLucideIcon("rocket", __iconNode);
const PLAN_NAMES = {
  starter: "Starter",
  professional: "Professional",
  enterprise: "Enterprise",
  webdesign: "SEO Web Design"
};
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
const NEXT_STEPS = [
  {
    icon: Mail,
    title: "Check your inbox",
    description: "We've sent a confirmation email with your account details and next steps."
  },
  {
    icon: Settings,
    title: "7-day setup begins",
    description: "Our team will reach out within 24 hours to kick off your onboarding."
  },
  {
    icon: Rocket,
    title: "Campaign goes live",
    description: "After setup, your SEO campaign starts driving traffic and results."
  },
  {
    icon: Sparkles,
    title: "Track your progress",
    description: "Log into your dashboard anytime to see keyword rankings and performance."
  }
];
function CheckoutSuccess() {
  const search = useSearch({ strict: false });
  const planKey = search.plan ?? "professional";
  const planName = PLAN_NAMES[planKey] ?? "Professional";
  const isOneTime = planKey === "webdesign";
  const today = /* @__PURE__ */ new Date();
  const trialEnd = addDays(today, 15);
  const nextBilling = addDays(today, 22);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95, y: 24 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      className: "space-y-6",
      "data-ocid": "checkout_success.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated border-accent/30 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 btn-gradient" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-8 pb-6 text-center space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 14
                },
                className: "flex justify-center",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10 text-accent" }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.35 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold font-display gradient-text", children: "You're all set!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-base", children: isOneTime ? `Your ${planName} order has been confirmed.` : `Welcome to the ${planName} plan. Your 15-day free trial has started.` })
                ]
              }
            )
          ] })
        ] }),
        !isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold font-display text-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarCheck, { className: "h-5 w-5 text-primary" }),
                "Your Timeline"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
                {
                  date: formatDate(today),
                  label: "Trial starts today",
                  active: true,
                  note: "15-day free trial begins"
                },
                {
                  date: formatDate(addDays(today, 7)),
                  label: "Setup complete",
                  active: false,
                  note: "Campaign goes live"
                },
                {
                  date: formatDate(trialEnd),
                  label: "Free trial ends",
                  active: false,
                  note: "No charge if you cancel before this date"
                },
                {
                  date: formatDate(nextBilling),
                  label: "First billing date",
                  active: false,
                  note: `$${planKey === "starter" ? 79 : planKey === "professional" ? 159 : 239}/mo charged`
                }
              ].map((item, timelineIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `h-3 w-3 rounded-full mt-1 flex-shrink-0 ${item.active ? "bg-accent" : "bg-border"}`
                    }
                  ),
                  timelineIdx < 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-8 bg-border mt-1" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: item.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    item.date,
                    " · ",
                    item.note
                  ] })
                ] })
              ] }, item.label)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.55 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-semibold font-display text-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-primary" }),
                "What happens next"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: NEXT_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(step.icon, { className: "h-4 w-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: step.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: step.description })
                  ] })
                ] }),
                i < NEXT_STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mt-4" })
              ] }, step.title)) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.65 },
            className: "flex flex-col sm:flex-row gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/",
                  className: "flex-1",
                  "data-ocid": "checkout_success.home_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full btn-gradient font-semibold h-11 rounded-xl", children: "Return to Home" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/audit",
                  className: "flex-1",
                  "data-ocid": "checkout_success.audit_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "w-full h-11 rounded-xl", children: [
                    "Run Your First SEO Audit",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4 ml-2" })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
          "Need help?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-primary hover:underline", children: "Contact our support team" })
        ] })
      ]
    }
  ) }) });
}
export {
  CheckoutSuccess as default
};
