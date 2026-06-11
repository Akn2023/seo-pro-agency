import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, B as Button, Z as Zap } from "./index-BFTwSqlB.js";
import { B as Badge } from "./badge-YmYYDjzo.js";
import { C as Card, a as CardContent } from "./card-C1y6S-Xe.js";
import { I as Input } from "./input-CdCCfhqR.js";
import { L as Label } from "./label-DC1wsTGJ.js";
import { u as useActor, a as useMutation, c as createActor, L as LoaderCircle } from "./backend-IggIyiB0.js";
import { m as motion } from "./proxy-CPHCLHqo.js";
import { C as ChevronRight } from "./chevron-right-DE4clAdc.js";
import { C as CircleCheckBig } from "./circle-check-big-CI7tJQSz.js";
import { S as Search } from "./search-CK3rQnh8.js";
import { C as CodeXml, B as BookOpen } from "./code-xml-CQtMMET7.js";
import { M as MapPin, S as ShoppingCart, B as BotMessageSquare } from "./shopping-cart-9qG7_6f0.js";
import { L as Link2, F as FileSearch } from "./link-2-ChUez_w4.js";
import { C as ChartNoAxesColumn, S as Smartphone } from "./smartphone-DhHOIrTV.js";
import { S as SearchCheck, B as Braces, W as Wifi } from "./wifi-BNCa0GsV.js";
import { C as ChartColumn } from "./chart-column-BjDtNuD2.js";
import { G as Globe } from "./globe-CGFHJRfd.js";
import { A as Award, U as Users, M as MessageSquare, S as Star } from "./users-BZ67qIZS.js";
import { T as TrendingUp } from "./trending-up-BTuv61-_.js";
import { C as Clock } from "./clock-B6fiIBSz.js";
import { S as Settings } from "./settings-CkQ428Le.js";
import { F as FileText, L as Link } from "./link-D-5JZiKV.js";
import "./index-Dlored5j.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
];
const ChartNoAxesColumnIncreasing = createLucideIcon("chart-no-axes-column-increasing", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
];
const Megaphone = createLucideIcon("megaphone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const INITIAL_FORM = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  message: ""
};
function useLeadForm() {
  const { actor } = useActor(createActor);
  const [formData, setFormData] = reactExports.useState(INITIAL_FORM);
  const [status, setStatus] = reactExports.useState("idle");
  const [error, setError] = reactExports.useState(null);
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitLead(data);
    },
    onMutate: () => {
      setStatus("submitting");
      setError(null);
    },
    onSuccess: (result) => {
      if (result.__kind__ === "ok") {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        setError(result.err);
        setStatus("error");
      }
    },
    onError: (err) => {
      setError(err.message);
      setStatus("error");
    }
  });
  const submitForm = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };
  const reset = () => {
    setFormData(INITIAL_FORM);
    setStatus("idle");
    setError(null);
  };
  return { formData, updateField, status, error, submitForm, reset };
}
const SERVICES = [
  {
    icon: Search,
    name: "On-Page SEO",
    desc: "Optimize every element on your pages — titles, meta tags, headings, and content for maximum ranking power."
  },
  {
    icon: CodeXml,
    name: "Technical SEO",
    desc: "Fix crawlability, site speed, structured data, and indexing issues that hold your rankings back."
  },
  {
    icon: MapPin,
    name: "Local SEO",
    desc: "Dominate Google Maps and local search results to drive foot traffic and hyper-local conversions."
  },
  {
    icon: ShoppingCart,
    name: "E-commerce SEO",
    desc: "Scale organic revenue for online stores with product-page optimization, category SEO, and schema markup."
  },
  {
    icon: Link2,
    name: "Link Building",
    desc: "Earn high-authority backlinks through white-hat outreach and content strategies that build lasting domain trust."
  },
  {
    icon: FileSearch,
    name: "SEO Audit",
    desc: "Comprehensive 150-point audit identifying every opportunity and issue across your entire website."
  },
  {
    icon: BotMessageSquare,
    name: "AI SEO Services",
    desc: "Leverage cutting-edge AI to automate keyword research, content gaps analysis, and ranking predictions."
  },
  {
    icon: BookOpen,
    name: "Content SEO",
    desc: "Create search-optimized content that ranks, engages readers, and converts visitors into customers."
  }
];
const TOOLS = [
  {
    icon: ChartNoAxesColumn,
    name: "Keyword Density Checker",
    desc: "Analyze keyword usage and optimize content density for better rankings."
  },
  {
    icon: Link2,
    name: "Backlink Analyzer",
    desc: "Audit your backlink profile and discover new link-building opportunities."
  },
  {
    icon: Zap,
    name: "Page Speed Checker",
    desc: "Measure Core Web Vitals and get actionable speed improvement recommendations."
  },
  {
    icon: Smartphone,
    name: "Mobile Friendliness Test",
    desc: "Verify your site passes Google's mobile-first indexing requirements."
  },
  {
    icon: FileSearch,
    name: "Meta Tag Generator",
    desc: "Generate perfectly optimized title tags and meta descriptions for any page."
  },
  {
    icon: SearchCheck,
    name: "Competitor Analyzer",
    desc: "Uncover your competitors' SEO strategies, keywords, and backlink sources."
  },
  {
    icon: ChartColumn,
    name: "Rank Tracker",
    desc: "Monitor daily keyword rankings across Google, Bing, and other search engines."
  },
  {
    icon: Braces,
    name: "Schema Markup Validator",
    desc: "Validate and test structured data to unlock rich snippets in search results."
  },
  {
    icon: Globe,
    name: "XML Sitemap Generator",
    desc: "Auto-generate XML sitemaps to ensure complete search engine crawl coverage."
  },
  {
    icon: CodeXml,
    name: "Robots.txt Generator",
    desc: "Create a properly formatted robots.txt to control search engine bot access."
  },
  {
    icon: Wifi,
    name: "Broken Link Finder",
    desc: "Identify and fix broken internal and external links affecting your SEO authority."
  },
  {
    icon: BookOpen,
    name: "Heading Tag Analyzer",
    desc: "Audit H1–H6 hierarchy to ensure perfectly structured, SEO-friendly content."
  }
];
const STATS = [
  { value: "500+", label: "Successful Campaigns", icon: Award },
  { value: "95%", label: "Client Retention Rate", icon: Users },
  { value: "400%", label: "Avg Traffic Growth", icon: TrendingUp },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Expert Team Members", icon: MessageSquare }
];
const PRICING = [
  {
    name: "Starter",
    price: 99,
    desc: "Ideal for small businesses getting started with SEO",
    popular: false,
    trialDays: 15,
    setupDays: 7,
    socialMediaAdsDeal: false,
    features: [
      "5 Target Keywords",
      "On-Page SEO Optimization",
      "Monthly Performance Report",
      "Google Business Setup",
      "Basic Technical Audit",
      "10 Link Building / Month"
    ]
  },
  {
    name: "Professional",
    price: 199,
    desc: "Best for growing businesses ready to scale organic traffic",
    popular: true,
    trialDays: 15,
    setupDays: 7,
    socialMediaAdsDeal: true,
    features: [
      "25 Target Keywords",
      "Full Technical SEO Audit",
      "Link Building (10 links/mo)",
      "Content Strategy & Creation",
      "Competitor Analysis",
      "Weekly Progress Reports",
      "Social Media Ads Management"
    ]
  },
  {
    name: "Enterprise",
    price: 299,
    desc: "For established brands that demand market dominance",
    popular: false,
    trialDays: 15,
    setupDays: 7,
    socialMediaAdsDeal: true,
    features: [
      "Unlimited Keywords",
      "Advanced AI SEO Services",
      "Aggressive Link Building",
      "Dedicated Account Manager",
      "Custom Content Calendar",
      "Real-time Rank Monitoring",
      "Social Media Ads Management"
    ]
  }
];
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "TechCorp",
    text: "Our organic traffic increased by 430% in just 8 months. The team's AI-driven strategies uncovered opportunities we never knew existed. We now consistently rank on page one for our most competitive keywords.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "RetailPlus",
    text: "Switching to this agency was the best marketing decision we've made. Revenue from organic search tripled within a year and our cost-per-acquisition dropped dramatically. Highly recommend their e-commerce SEO expertise.",
    rating: 5
  },
  {
    name: "Emma Williams",
    company: "LocalBiz",
    text: "After struggling to appear in local searches, we now dominate Google Maps in our city. Foot traffic has doubled and our Google Business profile gets 10x more views than before we started.",
    rating: 5
  },
  {
    name: "David Martinez",
    company: "E-ShopPro",
    text: "The technical SEO audit alone was worth every penny — they identified 47 critical issues. After fixing them, our crawl coverage and rankings improved substantially within weeks. Exceptional team.",
    rating: 5
  }
];
const TRUST_BADGES = [
  "Google Partner",
  "10,000+ Clients",
  "15+ Years Experience",
  "400% Avg Traffic Growth",
  "4.9/5 Rating"
];
const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];
function StarRating({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5", children: STAR_KEYS.slice(0, count).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }, k)) });
}
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent/80 text-primary-foreground",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-10",
            style: {
              backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/30 blur-3xl translate-y-1/2 -translate-x-1/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "max-w-4xl mx-auto text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-6 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5", children: "🚀 AI-Powered SEO Platform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6", children: [
                "Dominate Search Rankings with",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent", children: "AI-Powered SEO" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl md:text-2xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-body leading-relaxed", children: "Increase your organic traffic, outrank competitors, and grow your digital presence with data-driven strategies powered by artificial intelligence." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-14", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/audit", "data-ocid": "hero.audit_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-smooth w-full sm:w-auto",
                    children: [
                      "Get Free SEO Audit",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 w-5 h-5" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/services",
                    "data-ocid": "hero.services_link",
                    onClick: (e) => {
                      e.preventDefault();
                      window.location.href = "/services";
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "border-white/50 text-primary-foreground hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg transition-smooth w-full sm:w-auto bg-transparent",
                        children: "View Our Services"
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex flex-wrap justify-center gap-3",
                  "data-ocid": "hero.trust_badges",
                  children: TRUST_BADGES.map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/90",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5 text-green-300" }),
                        badge
                      ]
                    },
                    badge
                  ))
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "svg",
          {
            viewBox: "0 0 1440 60",
            className: "w-full fill-background",
            preserveAspectRatio: "none",
            "aria-hidden": "true",
            role: "presentation",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Decorative wave divider" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,60 C360,0 1080,60 1440,20 L1440,60 Z" })
            ]
          }
        ) })
      ]
    }
  );
}
function ServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "Our Expertise"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Our SEO & Digital Marketing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "From technical foundations to content strategy, we provide end-to-end SEO solutions that deliver measurable results." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        "data-ocid": "services.list",
        children: SERVICES.map(({ icon: Icon, name, desc }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.07 },
            "data-ocid": `services.item.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated group cursor-pointer h-full rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-lg leading-snug", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-smooth", children: [
                "Learn More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            ] }) })
          },
          name
        ))
      }
    )
  ] }) });
}
function ToolsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tools", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-accent border-accent/30 bg-accent/5 px-4 py-1.5",
              children: "Free Resources"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Free ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "SEO Tools" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Powerful, no-cost tools to audit, analyze, and improve your SEO performance — no sign-up required." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
        "data-ocid": "tools.list",
        children: TOOLS.map(({ icon: Icon, name, desc }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.05 },
            "data-ocid": `tools.item.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated group h-full rounded-xl bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed flex-1", children: desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/audit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary text-xs mt-auto transition-smooth",
                  "data-ocid": `tools.use_button.${index + 1}`,
                  children: "Use Tool"
                }
              ) })
            ] }) })
          },
          name
        ))
      }
    )
  ] }) });
}
function StatsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-us", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "Track Record"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Why Leading Brands ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Choose Us" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "Numbers speak louder than words. Here's what 15 years of relentless focus on results looks like." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6",
        "data-ocid": "stats.list",
        children: STATS.map(({ value, label, icon: Icon }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: index * 0.08 },
            "data-ocid": `stats.item.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated rounded-xl text-center group hover:border-primary/30 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full btn-gradient flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-7 h-7 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold gradient-text", children: value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-medium", children: label })
            ] }) })
          },
          label
        ))
      }
    )
  ] }) });
}
function PricingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "Transparent Pricing"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Simple, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Scalable Plans" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: [
            "No hidden fees. No long-term lock-ins. Just clear, results-focused SEO plans — all with a",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "15-day free trial" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start",
        "data-ocid": "pricing.list",
        children: PRICING.map(
          ({
            name,
            price,
            desc,
            popular,
            trialDays,
            setupDays,
            socialMediaAdsDeal,
            features
          }, index) => {
            const discountedPrice = Math.round(price * 0.8);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: index * 0.1 },
                "data-ocid": `pricing.item.${index + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Card,
                  {
                    className: `h-full rounded-2xl flex flex-col relative overflow-hidden transition-smooth ${popular ? "ring-2 ring-primary shadow-xl" : "card-elevated hover:shadow-lg"}`,
                    children: [
                      popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1.5 btn-gradient" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: `flex items-center justify-center gap-1.5 py-2 text-xs font-semibold tracking-wide ${popular ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`,
                          "data-ocid": `pricing.trial_badge.${index + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }),
                            trialDays,
                            "-Day Free Trial — No credit card needed"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 flex flex-col gap-5 flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          popular && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 btn-gradient text-primary-foreground border-0 text-xs", children: "Most Popular" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground", children: name }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: desc })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-2 rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-3 py-2",
                            "data-ocid": `pricing.discount_badge.${index + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-yellow-600 flex-shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-yellow-700", children: "Pay now & save 20% — limited offer" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-medium text-muted-foreground line-through", children: [
                              "$",
                              price
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              Badge,
                              {
                                variant: "outline",
                                className: "text-xs border-green-500/30 text-green-600 bg-green-50",
                                children: [
                                  "Save $",
                                  price - discountedPrice
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl font-bold gradient-text", children: [
                              "$",
                              discountedPrice
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground mb-2", children: "/mo" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mt-1.5 flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                            "Setup completed within ",
                            setupDays,
                            " days"
                          ] })
                        ] }),
                        socialMediaAdsDeal && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2.5",
                            "data-ocid": `pricing.social_ads_deal.${index + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-medium text-accent leading-snug", children: [
                                "Social Media Ads:",
                                " ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: "First month free" }),
                                " ",
                                "on onboarding"
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 flex-1", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "li",
                          {
                            className: "flex items-start gap-2.5 text-sm text-foreground",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-accent mt-0.5 flex-shrink-0" }),
                              f
                            ]
                          },
                          f
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: `/checkout?plan=${name.toLowerCase()}`,
                            "data-ocid": `pricing.cta_button.${index + 1}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                className: `w-full font-semibold py-5 transition-smooth ${popular ? "btn-gradient shadow-md hover:shadow-lg" : ""}`,
                                variant: popular ? "default" : "outline",
                                children: "Start Free Trial"
                              }
                            )
                          }
                        )
                      ] })
                    ]
                  }
                )
              },
              name
            );
          }
        )
      }
    )
  ] }) });
}
const WORKFLOW_PHASES = [
  {
    num: "01",
    name: "Discovery & AI Audit",
    icon: Search,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20"
  },
  {
    num: "02",
    name: "Technical Foundation",
    icon: Settings,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    num: "03",
    name: "On-Page Optimisation",
    icon: FileText,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20"
  },
  {
    num: "04",
    name: "Content Strategy",
    icon: PenLine,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    num: "05",
    name: "Link Building",
    icon: Link,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    num: "06",
    name: "Paid & Social",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    num: "07",
    name: "Reporting",
    icon: ChartNoAxesColumnIncreasing,
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20"
  }
];
function WorkflowTeaserSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "workflow",
      className: "relative py-20 overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container mx-auto px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "text-center mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
                    children: "SEO Process"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
                  "How We ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Deliver Results" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "A proven, step-by-step process to grow your organic traffic and rankings — from first audit to ongoing optimisation." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-12",
              "data-ocid": "workflow_teaser.list",
              children: WORKFLOW_PHASES.map(
                ({ num, name, icon: Icon, color, bg, border }, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.4, delay: index * 0.08 },
                    "data-ocid": `workflow_teaser.item.${index + 1}`,
                    className: "relative group",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Card,
                        {
                          className: `h-full rounded-xl border ${border} bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col items-center text-center gap-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: `inline-block px-2.5 py-0.5 rounded-full text-xs font-bold tracking-widest ${color} ${bg} border ${border}`,
                                children: num
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: `w-12 h-12 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`,
                                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `w-6 h-6 ${color}` })
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm leading-snug", children: name })
                          ] })
                        }
                      ),
                      index < WORKFLOW_PHASES.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden xl:flex absolute top-1/2 -right-2.5 -translate-y-1/2 z-10 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground/50" }) })
                    ]
                  },
                  num
                )
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45, delay: 0.6 },
              className: "flex justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.a,
                {
                  href: "/workflow",
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.98 },
                  "data-ocid": "workflow_teaser.view_workflow_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "btn-gradient font-semibold px-8 py-6 text-base shadow-md hover:shadow-lg gap-2",
                      children: [
                        "Explore Full Workflow",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
                      ]
                    }
                  )
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
function TestimonialsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "testimonials", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "Client Stories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "What Our ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Clients Say" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Real results from real businesses. Here's how we've transformed their digital presence." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto",
        "data-ocid": "testimonials.list",
        children: TESTIMONIALS.map(({ name, company, text, rating }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.1 },
            "data-ocid": `testimonials.item.${index + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated rounded-xl h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-7 flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { count: rating }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground leading-relaxed flex-1 italic", children: [
                '"',
                text,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0", children: name[0] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-sm", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs", children: company })
                ] })
              ] })
            ] }) })
          },
          name
        ))
      }
    )
  ] }) });
}
function ContactSection() {
  const { formData, updateField, status, error, submitForm } = useLeadForm();
  const [termsAccepted, setTermsAccepted] = reactExports.useState(false);
  const [validationErrors, setValidationErrors] = reactExports.useState({});
  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Enter a valid email address.";
    if (!formData.message.trim())
      errs.message = "Please describe what you need help with.";
    if (!termsAccepted) errs.terms = "You must accept the terms to continue.";
    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    submitForm(e);
  };
  const clearFieldError = (field) => setValidationErrors((prev) => {
    const next = { ...prev };
    delete next[field];
    return next;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "Get In Touch"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Ready to",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Grow Your Business?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Tell us about your goals and we'll craft a custom SEO strategy to get you there." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.1 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "rounded-2xl shadow-lg border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-8 md:p-10", children: status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-4 py-12 text-center",
            "data-ocid": "contact.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground", children: "Message Sent!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Thanks for reaching out! Our SEO experts will review your request and get back to you within 24 hours." })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            noValidate: true,
            className: "space-y-6",
            "data-ocid": "contact.form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "fullName", children: "Full Name *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "fullName",
                      placeholder: "Jane Smith",
                      value: formData.fullName,
                      onChange: (e) => updateField("fullName", e.target.value),
                      onBlur: () => {
                        if (!formData.fullName.trim())
                          setValidationErrors((p) => ({
                            ...p,
                            fullName: "Full name is required."
                          }));
                        else clearFieldError("fullName");
                      },
                      "data-ocid": "contact.fullname_input",
                      className: validationErrors.fullName ? "border-destructive" : ""
                    }
                  ),
                  validationErrors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "contact.fullname_field_error",
                      children: validationErrors.fullName
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email Address *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "email",
                      type: "email",
                      placeholder: "jane@company.com",
                      value: formData.email,
                      onChange: (e) => updateField("email", e.target.value),
                      onBlur: () => {
                        if (!formData.email.trim())
                          setValidationErrors((p) => ({
                            ...p,
                            email: "Email is required."
                          }));
                        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                          setValidationErrors((p) => ({
                            ...p,
                            email: "Enter a valid email."
                          }));
                        else clearFieldError("email");
                      },
                      "data-ocid": "contact.email_input",
                      className: validationErrors.email ? "border-destructive" : ""
                    }
                  ),
                  validationErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-destructive text-xs",
                      "data-ocid": "contact.email_field_error",
                      children: validationErrors.email
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "company", children: "Company" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "company",
                      placeholder: "Acme Inc.",
                      value: formData.company,
                      onChange: (e) => updateField("company", e.target.value),
                      "data-ocid": "contact.company_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", children: "Phone Number" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "phone",
                      placeholder: "+1 (555) 000-0000",
                      value: formData.phone,
                      onChange: (e) => updateField("phone", e.target.value),
                      "data-ocid": "contact.phone_input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "message", children: "How Can We Help? *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "message",
                    placeholder: "Tell us about your website, current SEO challenges, and goals...",
                    rows: 4,
                    value: formData.message,
                    onChange: (e) => updateField("message", e.target.value),
                    onBlur: () => {
                      if (!formData.message.trim())
                        setValidationErrors((p) => ({
                          ...p,
                          message: "Please describe your needs."
                        }));
                      else clearFieldError("message");
                    },
                    "data-ocid": "contact.message_textarea",
                    className: validationErrors.message ? "border-destructive" : ""
                  }
                ),
                validationErrors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-destructive text-xs",
                    "data-ocid": "contact.message_field_error",
                    children: validationErrors.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    id: "terms",
                    checked: termsAccepted,
                    onChange: (e) => {
                      setTermsAccepted(e.target.checked);
                      if (e.target.checked) clearFieldError("terms");
                    },
                    className: "mt-0.5 w-4 h-4 accent-primary cursor-pointer",
                    "data-ocid": "contact.terms_checkbox"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "label",
                  {
                    htmlFor: "terms",
                    className: "text-sm text-muted-foreground cursor-pointer",
                    children: [
                      "I agree to the",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary underline underline-offset-2", children: "Terms of Service" }),
                      " ",
                      "and",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary underline underline-offset-2", children: "Privacy Policy" }),
                      "."
                    ]
                  }
                )
              ] }),
              validationErrors.terms && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-xs",
                  "data-ocid": "contact.terms_field_error",
                  children: validationErrors.terms
                }
              ),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-destructive text-sm bg-destructive/10 rounded-lg px-4 py-3",
                  "data-ocid": "contact.error_state",
                  children: error
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  size: "lg",
                  disabled: status === "submitting",
                  className: "w-full btn-gradient font-semibold py-6 text-base shadow-md hover:shadow-lg",
                  "data-ocid": "contact.submit_button",
                  children: status === "submitting" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 mr-2 animate-spin" }),
                    "Sending…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    "Send Message ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 w-5 h-5" })
                  ] })
                }
              )
            ]
          }
        ) }) })
      }
    )
  ] }) }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PricingSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WorkflowTeaserSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
  ] });
}
export {
  Home as default
};
