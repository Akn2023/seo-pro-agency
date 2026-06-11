import { c as createLucideIcon, ah as useSearch, ai as useNavigate, r as reactExports, j as jsxRuntimeExports, Z as Zap, B as Button } from "./index-BFTwSqlB.js";
import { B as Badge } from "./badge-YmYYDjzo.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-C1y6S-Xe.js";
import { I as Input } from "./input-CdCCfhqR.js";
import { L as Label } from "./label-DC1wsTGJ.js";
import { S as Separator } from "./separator-DFtHj9QZ.js";
import { A as ArrowLeft } from "./arrow-left-CG6XoG7q.js";
import { m as motion } from "./proxy-CPHCLHqo.js";
import { S as Shield } from "./shield-Ut2-peCS.js";
import { C as CircleCheck } from "./circle-check-LFQZJD_v.js";
import "./index-Dlored5j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode);
const PLANS = [
  {
    key: "starter",
    name: "Starter",
    originalPrice: 99,
    discountedPrice: 79,
    period: "/mo",
    isOneTime: false,
    features: [
      "5 Keywords tracked",
      "10 Link building/mo",
      "Basic reports",
      "Email support"
    ]
  },
  {
    key: "professional",
    name: "Professional",
    originalPrice: 199,
    discountedPrice: 159,
    period: "/mo",
    isOneTime: false,
    badge: "Most Popular",
    features: [
      "50 Keywords tracked",
      "Unlimited link building",
      "Advanced analytics",
      "Priority support"
    ]
  },
  {
    key: "enterprise",
    name: "Enterprise",
    originalPrice: 299,
    discountedPrice: 239,
    period: "/mo",
    isOneTime: false,
    features: [
      "Unlimited keywords",
      "White-label reports",
      "Dedicated manager",
      "24/7 support"
    ]
  },
  {
    key: "webdesign",
    name: "SEO Web Design",
    originalPrice: 499,
    discountedPrice: 499,
    period: " one-time",
    isOneTime: true,
    features: [
      "Fully SEO-optimized site",
      "Mobile responsive",
      "Core Web Vitals optimized",
      "1-year support"
    ]
  }
];
function PlanCard({
  plan,
  selected,
  onSelect
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      "data-ocid": `checkout.plan_${plan.key}`,
      onClick: onSelect,
      className: `w-full text-left rounded-xl border-2 p-4 transition-smooth cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `mt-0.5 h-4 w-4 rounded-full border-2 flex-shrink-0 transition-smooth ${selected ? "border-primary bg-primary" : "border-muted-foreground"}`,
              children: selected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-full bg-primary-foreground scale-50" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground font-display", children: plan.name }),
              plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs py-0 btn-gradient border-0", children: plan.badge }),
              !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs py-0", children: "15-day free trial" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 mt-1", children: [
              !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
                "$",
                plan.originalPrice,
                plan.period
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-primary", children: [
                "$",
                plan.discountedPrice,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: plan.period })
              ] }),
              !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-xs text-primary border-primary/30 py-0",
                  children: "20% off"
                }
              )
            ] }),
            !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "7-day setup period included" })
          ] })
        ] }) }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 pl-7 space-y-1", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-2 text-sm text-muted-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-accent flex-shrink-0" }),
              f
            ]
          },
          f
        )) })
      ]
    }
  );
}
function Checkout() {
  const search = useSearch({ strict: false });
  const navigate = useNavigate();
  const initialPlan = (PLANS.find((p) => p.key === search.plan) ?? PLANS[1]).key;
  const [selectedPlan, setSelectedPlan] = reactExports.useState(
    initialPlan
  );
  const [form, setForm] = reactExports.useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    address: "",
    city: "",
    country: "US",
    zip: ""
  });
  const plan = PLANS.find((p) => p.key === selectedPlan);
  reactExports.useEffect(() => {
    if (search.plan) {
      const found = PLANS.find((p) => p.key === search.plan);
      if (found) setSelectedPlan(found.key);
    }
  }, [search.plan]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    let formatted = value;
    if (name === "cardNumber") {
      formatted = value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    }
    if (name === "expiry") {
      formatted = value.replace(/\D/g, "").slice(0, 4).replace(/^(\d{2})(\d)/, "$1/$2");
    }
    if (name === "cvc") {
      formatted = value.replace(/\D/g, "").slice(0, 4);
    }
    setForm((prev) => ({ ...prev, [name]: formatted }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({ to: "/checkout/success", search: { plan: selectedPlan } });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/#pricing",
        "data-ocid": "checkout.back_link",
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4 group-hover:-translate-x-0.5 transition-transform" }),
          "Back to Plans"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-primary" }),
                "Choose Your Plan"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: PLANS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                PlanCard,
                {
                  plan: p,
                  selected: selectedPlan === p.key,
                  onSelect: () => setSelectedPlan(p.key)
                },
                p.key
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "font-display text-lg flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5 text-primary" }),
                "Payment Details"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "email",
                        name: "email",
                        type: "email",
                        required: true,
                        placeholder: "you@example.com",
                        value: form.email,
                        onChange: handleInput,
                        "data-ocid": "checkout.email_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "name",
                        name: "name",
                        type: "text",
                        required: true,
                        placeholder: "Jane Smith",
                        value: form.name,
                        onChange: handleInput,
                        "data-ocid": "checkout.name_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 text-primary" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Card Information" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-xs ml-auto border-primary/30 text-primary py-0",
                        children: "Secured by Stripe"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cardNumber", children: "Card number" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "cardNumber",
                            name: "cardNumber",
                            type: "text",
                            required: true,
                            placeholder: "1234 5678 9012 3456",
                            value: form.cardNumber,
                            onChange: handleInput,
                            className: "pr-12",
                            "data-ocid": "checkout.card_number_input"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "expiry", children: "Expiry date" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "expiry",
                            name: "expiry",
                            type: "text",
                            required: true,
                            placeholder: "MM/YY",
                            value: form.expiry,
                            onChange: handleInput,
                            "data-ocid": "checkout.expiry_input"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cvc", children: "CVC" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "cvc",
                            name: "cvc",
                            type: "text",
                            required: true,
                            placeholder: "123",
                            value: form.cvc,
                            onChange: handleInput,
                            "data-ocid": "checkout.cvc_input"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Billing Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "address", children: "Street address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "address",
                        name: "address",
                        type: "text",
                        required: true,
                        placeholder: "123 Main Street",
                        value: form.address,
                        onChange: handleInput,
                        "data-ocid": "checkout.address_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "city", children: "City" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "city",
                          name: "city",
                          type: "text",
                          required: true,
                          placeholder: "New York",
                          value: form.city,
                          onChange: handleInput,
                          "data-ocid": "checkout.city_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "zip", children: "ZIP / Postal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "zip",
                          name: "zip",
                          type: "text",
                          required: true,
                          placeholder: "10001",
                          value: form.zip,
                          onChange: handleInput,
                          "data-ocid": "checkout.zip_input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "country", children: "Country" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "country",
                          name: "country",
                          value: form.country,
                          onChange: handleInput,
                          "data-ocid": "checkout.country_select",
                          className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "US", children: "United States" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GB", children: "United Kingdom" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CA", children: "Canada" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "AU", children: "Australia" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "IN", children: "India" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DE", children: "Germany" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "FR", children: "France" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SG", children: "Singapore" })
                          ]
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    "data-ocid": "checkout.submit_button",
                    className: "w-full btn-gradient text-base font-semibold h-12 rounded-xl",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4 mr-2" }),
                      plan.isOneTime ? "Complete Purchase" : "Start Free Trial",
                      !plan.isOneTime && " — 15 Days Free"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      disabled: true,
                      "data-ocid": "checkout.paypal_button",
                      className: "w-full h-11 rounded-xl bg-[#ffc439] opacity-50 cursor-not-allowed flex items-center justify-center gap-2 font-bold text-[#003087] text-sm select-none",
                      "aria-label": "PayPal – coming soon",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "svg",
                          {
                            viewBox: "0 0 24 24",
                            "aria-label": "PayPal",
                            role: "img",
                            className: "h-5 w-5 fill-[#009cde]",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z" })
                          }
                        ),
                        "Pay with PayPal"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap", children: "PayPal coming soon" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 pt-1 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-primary" }),
                    "Secured by Stripe"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5 text-primary" }),
                    "SSL Encrypted"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-primary" }),
                    "256-bit encryption"
                  ] })
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 24 },
              animate: { opacity: 1, x: 0 },
              transition: {
                duration: 0.45,
                delay: 0.1,
                ease: [0.4, 0, 0.2, 1]
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated border-primary/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Order Summary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/40 p-4 space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: plan.name }),
                        plan.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "text-xs btn-gradient border-0", children: plan.badge })
                      ] }),
                      !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
                          "$",
                          plan.originalPrice,
                          "/mo"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
                          "$",
                          plan.discountedPrice,
                          "/mo"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs text-primary border-primary/30 py-0 ml-auto",
                            children: "20% off"
                          }
                        )
                      ] }),
                      plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-primary", children: [
                        "$",
                        plan.discountedPrice,
                        " one-time"
                      ] })
                    ] }),
                    !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free trial" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-medium", children: "15 days" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Setup period" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7 days" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Due today" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "$0.00" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-semibold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: plan.isOneTime ? "Total" : "After trial" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                        "$",
                        plan.discountedPrice,
                        plan.isOneTime ? "" : "/mo"
                      ] })
                    ] }),
                    !plan.isOneTime && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Billed monthly. Cancel anytime before trial ends." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-2 text-sm text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent flex-shrink-0 mt-0.5" }),
                          f
                        ]
                      },
                      f
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground text-center mt-3", children: [
                  "Questions?",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "text-primary hover:underline", children: "Contact our team" })
                ] })
              ]
            }
          ) })
        ] })
      }
    )
  ] }) });
}
export {
  Checkout as default
};
