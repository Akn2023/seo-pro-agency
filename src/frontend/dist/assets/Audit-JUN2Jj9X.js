import { a as createLucideIcon, r as reactExports, j as jsxRuntimeExports, c as cn, B as Button, Z as Zap } from "./index-24rtJ0z8.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle, B as Badge } from "./card-0ej6j6D7.js";
import { u as useActor, a as useMutation, c as createActor, I as Input, L as LoaderCircle } from "./backend-BgMHDLqn.js";
import { P as Primitive } from "./index-ZnZZOQf_.js";
import { S as Search } from "./search-Dip9EEXg.js";
import { G as Globe } from "./globe-Brxx8o0O.js";
import { C as ChartNoAxesColumn, S as Smartphone } from "./smartphone-CR7AMoDM.js";
import { S as Shield } from "./shield-BLAcCgR1.js";
import { T as TrendingUp } from "./trending-up-Cde0HWyY.js";
import { F as FileSearch, L as Link2 } from "./link-2-BHkDGAq8.js";
import { T as Tag } from "./tag-D8o5AklF.js";
import { C as CircleCheckBig } from "./circle-check-big-BkaSKI10.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
];
const Gauge = createLucideIcon("gauge", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
function useAuditTool() {
  const { actor } = useActor(createActor);
  const [url, setUrl] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const [report, setReport] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  const mutation = useMutation({
    mutationFn: async (auditUrl) => {
      if (!actor) throw new Error("Backend not available");
      return actor.runSeoAudit(auditUrl);
    },
    onMutate: () => {
      setStatus("loading");
      setError(null);
      setReport(null);
    },
    onSuccess: (result) => {
      if (result.__kind__ === "ok") {
        setReport(result.ok);
        setStatus("success");
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
  const runAudit = () => {
    if (!url.trim()) return;
    const normalized = url.startsWith("http") ? url : `https://${url}`;
    mutation.mutate(normalized);
  };
  const reset = () => {
    setUrl("");
    setStatus("idle");
    setReport(null);
    setError(null);
  };
  return { url, setUrl, status, report, error, runAudit, reset };
}
function scoreColor(score) {
  if (score >= 75)
    return "text-[hsl(142,76%,30%)] dark:text-[hsl(142,60%,55%)]";
  if (score >= 50) return "text-[hsl(38,92%,40%)] dark:text-[hsl(38,92%,60%)]";
  return "text-destructive";
}
function scoreTrack(score) {
  if (score >= 75) return "bg-[hsl(142,76%,36%)]";
  if (score >= 50) return "bg-[hsl(38,92%,50%)]";
  return "bg-destructive";
}
function scoreLabel(score) {
  if (score >= 75) return { text: "Good", variant: "success" };
  if (score >= 50) return { text: "Needs Work", variant: "warning" };
  return { text: "Poor", variant: "destructive" };
}
function badgeClass(variant) {
  if (variant === "success")
    return "bg-[hsl(142,76%,36%/0.12)] text-[hsl(142,76%,28%)] border-[hsl(142,76%,36%/0.3)] dark:text-[hsl(142,60%,55%)]";
  if (variant === "warning")
    return "bg-[hsl(38,92%,50%/0.12)] text-[hsl(38,92%,35%)] border-[hsl(38,92%,50%/0.3)] dark:text-[hsl(38,92%,60%)]";
  return "bg-destructive/10 text-destructive border-destructive/30";
}
function ScoreGauge({ score }) {
  const color = scoreColor(score);
  const circumference = 2 * Math.PI * 54;
  const strokeDash = score / 100 * circumference;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "140",
        height: "140",
        viewBox: "0 0 140 140",
        className: "-rotate-90",
        "aria-label": `SEO score: ${score} out of 100`,
        role: "img",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "70",
              cy: "70",
              r: "54",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "10",
              className: "text-muted"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "70",
              cy: "70",
              r: "54",
              fill: "none",
              strokeWidth: "10",
              strokeLinecap: "round",
              strokeDasharray: `${strokeDash} ${circumference}`,
              className: `transition-all duration-1000 ${score >= 75 ? "stroke-[hsl(142,76%,36%)]" : score >= 50 ? "stroke-[hsl(38,92%,50%)]" : "stroke-destructive"}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-4xl font-display font-bold ${color}`, children: score }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-body", children: "/ 100" })
    ] })
  ] });
}
function CategoryCard({ label, score, icon, index }) {
  const { text, variant } = scoreLabel(score);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "card-elevated rounded-xl p-5 flex flex-col gap-3",
      "data-ocid": `audit.category_card.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-sm text-foreground", children: label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `text-xs font-medium ${badgeClass(variant)}`,
              children: text
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-muted rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-2 rounded-full transition-all duration-700 ${scoreTrack(score)}`,
              style: { width: `${score}%` }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: `text-sm font-bold min-w-[2.5rem] text-right ${scoreColor(score)}`,
              children: [
                score,
                "%"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function FeatureHighlight({
  icon,
  title,
  description,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-smooth",
      "data-ocid": `audit.feature.${index}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg btn-gradient flex items-center justify-center text-primary-foreground", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-sm text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: description })
        ] })
      ]
    }
  );
}
const FEATURE_CHECKS = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSearch, { size: 16 }),
    title: "On-Page SEO",
    description: "Headings, content quality, keyword usage, internal linking"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16 }),
    title: "Technical SEO",
    description: "Crawlability, sitemaps, robots.txt, structured data"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 }),
    title: "Page Speed",
    description: "Core Web Vitals, load time, resource optimization"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 16 }),
    title: "Mobile Friendliness",
    description: "Responsive design, touch targets, viewport configuration"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16 }),
    title: "Meta Tags",
    description: "Title tags, meta descriptions, Open Graph, Twitter cards"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { size: 16 }),
    title: "Backlinks",
    description: "Domain authority, referring domains, link quality"
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 16 }),
    title: "Content Analysis",
    description: "Readability, word count, duplicate content detection"
  }
];
const LOADING_MESSAGES = [
  "Crawling your website…",
  "Analyzing on-page elements…",
  "Checking technical SEO…",
  "Evaluating page speed…",
  "Reviewing mobile experience…",
  "Compiling your report…"
];
function ResultsSection({ report }) {
  const overall = Number(report.overallScore);
  const categories = [
    {
      label: "On-Page SEO",
      score: Number(report.onPageScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSearch, { size: 16 })
    },
    {
      label: "Technical SEO",
      score: Number(report.technicalScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16 })
    },
    {
      label: "Page Speed",
      score: Number(report.pageSpeedScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16 })
    },
    {
      label: "Mobile Friendliness",
      score: Number(report.mobileFriendlinessScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 16 })
    },
    {
      label: "Meta Tags",
      score: Number(report.metaTagsScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16 })
    },
    {
      label: "Backlinks",
      score: Number(report.backlinkScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { size: 16 })
    },
    {
      label: "Content Analysis",
      score: Number(report.contentAnalysisScore),
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 16 })
    }
  ];
  const { text: overallText, variant: overallVariant } = scoreLabel(overall);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-[fade-in_0.4s_ease-out]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "card-elevated overflow-hidden",
        "data-ocid": "audit.overall_score.card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 btn-gradient w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-8 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreGauge, { score: overall }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: `text-sm font-semibold px-3 py-1 ${badgeClass(overallVariant)}`,
                  children: overallText
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-2", children: "SEO Health Report" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed mb-1", children: [
                "Analyzed:",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground break-all", children: report.url })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "Your site scored",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold ${scoreColor(overall)}`, children: [
                  overall,
                  "/100"
                ] }),
                " ",
                "overall.",
                " ",
                overall >= 75 ? "Great work — a few tweaks can push you higher." : overall >= 50 ? "Solid foundation, but there's meaningful room to improve." : "Significant SEO issues detected. Start with the recommendations below."
              ] })
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { size: 20, className: "text-primary" }),
        "Category Breakdown"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          "data-ocid": "audit.categories.grid",
          children: categories.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCard, { ...cat, index: i + 1 }, cat.label))
        }
      )
    ] }),
    report.recommendations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "audit.recommendations.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20, className: "text-primary" }),
        "Actionable Recommendations"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: report.recommendations.map((rec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex gap-3 p-4 bg-muted/30 rounded-xl border border-border hover:border-primary/20 transition-smooth",
          "data-ocid": "audit.recommendation.item",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheckBig,
              {
                size: 18,
                className: "text-primary flex-shrink-0 mt-0.5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: rec })
          ]
        },
        rec
      )) })
    ] })
  ] });
}
function AuditPage() {
  const { url, setUrl, status, report, error, runAudit, reset } = useAuditTool();
  const [urlError, setUrlError] = reactExports.useState("");
  const [msgIdx, setMsgIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (status !== "loading") return;
    setMsgIdx(0);
    const interval = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2e3);
    return () => clearInterval(interval);
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setUrlError("Please enter a website URL.");
      return;
    }
    const normalized = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
    if (!/^https?:\/\/.+/.test(normalized)) {
      setUrlError("URL must start with http:// or https://");
      return;
    }
    setUrlError("");
    runAudit();
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    if (urlError) setUrlError("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b border-border py-14 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center space-y-4 animate-[slide-up_0.5s_ease-out]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 14, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary uppercase tracking-wide", children: "Free SEO Audit" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-display font-bold text-foreground leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AI-Powered" }),
        " SEO Audit Tool"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed", children: "Instantly analyze any website's SEO health across 7 key categories. Get actionable recommendations in seconds." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-8 px-4 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex flex-col sm:flex-row gap-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Globe,
                {
                  size: 16,
                  className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  "data-ocid": "audit.url.input",
                  type: "text",
                  placeholder: "https://yourwebsite.com",
                  value: url,
                  onChange: handleUrlChange,
                  disabled: status === "loading",
                  className: "pl-9 h-12 text-base border-input focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-lg"
                }
              )
            ] }),
            status === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                onClick: reset,
                variant: "outline",
                className: "h-12 px-6 font-semibold transition-smooth",
                "data-ocid": "audit.run_another.button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16, className: "mr-2" }),
                  "Run Another"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: status === "loading",
                className: "h-12 px-8 btn-gradient font-semibold rounded-lg shadow-md hover:shadow-lg transition-smooth",
                "data-ocid": "audit.analyze.submit_button",
                children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "mr-2 animate-spin" }),
                  "Analyzing…"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "mr-2" }),
                  "Analyze Now"
                ] })
              }
            )
          ]
        }
      ),
      urlError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          className: "mt-2 text-sm text-destructive flex items-center gap-1.5",
          "data-ocid": "audit.url.field_error",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { size: 14 }),
            urlError
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "border-destructive/50 bg-destructive/5 mb-8",
          "data-ocid": "audit.error_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex items-start gap-4 pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleAlert,
              {
                size: 20,
                className: "text-destructive flex-shrink-0 mt-0.5"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: "Audit Failed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: error ?? "Something went wrong. Please try again." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: reset,
                className: "ml-auto flex-shrink-0",
                "data-ocid": "audit.error.reset_button",
                children: "Try Again"
              }
            )
          ] })
        }
      ),
      status === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center gap-6 py-16",
          "data-ocid": "audit.loading_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-20 h-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full btn-gradient opacity-20 animate-ping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center w-20 h-20 rounded-full btn-gradient", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 28, className: "text-primary-foreground" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground", children: LOADING_MESSAGES[msgIdx] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "This usually takes 10–20 seconds" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { className: "h-2 animate-pulse" }) })
          ]
        }
      ),
      status === "success" && report && /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsSection, { report }),
      status === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "animate-[fade-in_0.4s_ease-out]",
          "data-ocid": "audit.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-display text-foreground flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { size: 18, className: "text-primary" }),
                  "What We Analyze"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Our AI engine checks 7 critical SEO categories and surfaces the issues that matter most." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: FEATURE_CHECKS.map((feat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                FeatureHighlight,
                {
                  ...feat,
                  index: i + 1
                },
                feat.title
              )) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-4", children: [
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 }),
                label: "Instant Results",
                sub: "Under 20 seconds"
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 18 }),
                label: "100% Free",
                sub: "No credit card needed"
              },
              {
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18 }),
                label: "Actionable Tips",
                sub: "Clear next steps"
              }
            ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: t.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.sub })
                  ] })
                ]
              },
              t.label
            )) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  AuditPage as default
};
