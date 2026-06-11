import { j as jsxRuntimeExports, Z as Zap, B as Button } from "./index-BFTwSqlB.js";
import { B as Badge } from "./badge-YmYYDjzo.js";
import { C as Card, a as CardContent } from "./card-C1y6S-Xe.js";
import { m as motion } from "./proxy-CPHCLHqo.js";
import { C as ChartNoAxesColumn, S as Smartphone } from "./smartphone-DhHOIrTV.js";
import { L as Link2, F as FileSearch } from "./link-2-ChUez_w4.js";
import { S as SearchCheck, B as Braces, W as Wifi } from "./wifi-BNCa0GsV.js";
import { C as ChartColumn } from "./chart-column-BjDtNuD2.js";
import { G as Globe } from "./globe-CGFHJRfd.js";
import { C as CodeXml, B as BookOpen } from "./code-xml-CQtMMET7.js";
import { C as ChevronRight } from "./chevron-right-DE4clAdc.js";
const TOOLS = [
  {
    icon: ChartNoAxesColumn,
    name: "Keyword Density Checker",
    desc: "Analyze keyword usage and optimize content density for better rankings.",
    category: "Content"
  },
  {
    icon: Link2,
    name: "Backlink Analyzer",
    desc: "Audit your backlink profile and discover new link-building opportunities.",
    category: "Links"
  },
  {
    icon: Zap,
    name: "Page Speed Checker",
    desc: "Measure Core Web Vitals and get actionable speed improvement recommendations.",
    category: "Technical"
  },
  {
    icon: Smartphone,
    name: "Mobile Friendliness Test",
    desc: "Verify your site passes Google's mobile-first indexing requirements.",
    category: "Technical"
  },
  {
    icon: FileSearch,
    name: "Meta Tag Generator",
    desc: "Generate perfectly optimized title tags and meta descriptions for any page.",
    category: "On-Page"
  },
  {
    icon: SearchCheck,
    name: "Competitor Analyzer",
    desc: "Uncover your competitors' SEO strategies, keywords, and backlink sources.",
    category: "Research"
  },
  {
    icon: ChartColumn,
    name: "Rank Tracker",
    desc: "Monitor daily keyword rankings across Google, Bing, and other search engines.",
    category: "Tracking"
  },
  {
    icon: Braces,
    name: "Schema Markup Validator",
    desc: "Validate and test structured data to unlock rich snippets in search results.",
    category: "Technical"
  },
  {
    icon: Globe,
    name: "XML Sitemap Generator",
    desc: "Auto-generate XML sitemaps to ensure complete search engine crawl coverage.",
    category: "Technical"
  },
  {
    icon: CodeXml,
    name: "Robots.txt Generator",
    desc: "Create a properly formatted robots.txt to control search engine bot access.",
    category: "Technical"
  },
  {
    icon: Wifi,
    name: "Broken Link Finder",
    desc: "Identify and fix broken internal and external links affecting your SEO authority.",
    category: "Links"
  },
  {
    icon: BookOpen,
    name: "Heading Tag Analyzer",
    desc: "Audit H1–H6 hierarchy to ensure perfectly structured, SEO-friendly content.",
    category: "On-Page"
  }
];
const CATEGORIES = [
  "All",
  "Technical",
  "Content",
  "Links",
  "On-Page",
  "Research",
  "Tracking"
];
const CATEGORY_COLORS = {
  Technical: "bg-primary/10 text-primary border-primary/20",
  Content: "bg-accent/10 text-accent border-accent/20",
  Links: "bg-primary/15 text-primary border-primary/25",
  "On-Page": "bg-accent/15 text-accent border-accent/25",
  Research: "bg-primary/10 text-primary border-primary/20",
  Tracking: "bg-accent/10 text-accent border-accent/20"
};
function Tools() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "tools.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-accent/80 via-primary/80 to-primary text-primary-foreground py-20 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 opacity-10",
          style: {
            backgroundImage: "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl translate-y-1/2 translate-x-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5", children: "🛠️ 12 Free Tools — No Sign-up Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5", children: [
              "Free",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent", children: "SEO Tools" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-primary-foreground/85 max-w-2xl mx-auto font-body leading-relaxed", children: "Powerful, no-cost tools to audit, analyze, and improve your SEO performance. Instant results, no registration needed." })
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
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Decorative wave divider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,60 C360,0 1080,60 1440,20 L1440,60 Z" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-8 md:gap-16", children: [
      { value: "12", label: "Free Tools" },
      { value: "100%", label: "No Sign-up" },
      { value: "Instant", label: "Results" },
      { value: "Always", label: "Up to Date" }
    ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold gradient-text", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: label })
    ] }, label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
              "Browse Our ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Tool Suite" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Every tool you need to diagnose issues, uncover opportunities, and optimize your site for search engines." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex flex-wrap justify-center gap-2 mb-10",
          "data-ocid": "tools.category_filters",
          children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "px-3 py-1 text-sm cursor-default border-primary/20 text-muted-foreground",
              "data-ocid": `tools.filter.${cat.toLowerCase()}`,
              children: cat
            },
            cat
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",
          "data-ocid": "tools.list",
          children: TOOLS.map(({ icon: Icon, name, desc, category }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: index * 0.05 },
              "data-ocid": `tools.item.${index + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "card-elevated group h-full rounded-xl bg-card hover:shadow-lg transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-xs border ${CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground"}`,
                      children: category
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-snug", children: name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed flex-1", children: desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/audit", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    variant: "outline",
                    className: "w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary text-xs mt-auto transition-smooth",
                    "data-ocid": `tools.use_button.${index + 1}`,
                    children: [
                      "Use Tool ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-3 h-3" })
                    ]
                  }
                ) })
              ] }) })
            },
            name
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-bold text-foreground mb-4", children: [
            "Need a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Full SEO Strategy?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Our free tools are just the beginning. Let our experts build a custom strategy that drives real, sustainable organic growth." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contact", "data-ocid": "tools.bottom.contact_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                className: "btn-gradient font-semibold px-8 py-6 text-lg shadow-md",
                children: [
                  "Get a Free Strategy Session",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 w-5 h-5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/audit", "data-ocid": "tools.bottom.audit_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "px-8 py-6 text-lg",
                children: "Run Full SEO Audit"
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  Tools as default
};
