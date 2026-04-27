import { a as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a8 as Link, B as Button } from "./index-24rtJ0z8.js";
import { B as Badge, C as Card, a as CardContent } from "./card-0ej6j6D7.js";
import { S as Search } from "./search-Dip9EEXg.js";
import { C as CodeXml, B as BookOpen } from "./code-xml-BDMm4JF1.js";
import { M as MapPin, S as ShoppingCart, B as BotMessageSquare } from "./shopping-cart-BTjmEs3O.js";
import { L as Link2, F as FileSearch } from "./link-2-BHkDGAq8.js";
import { m as motion, C as ChevronRight } from "./proxy-CZnS4c9m.js";
import { T as TrendingUp } from "./trending-up-Cde0HWyY.js";
import { C as Clock } from "./clock-DVV689-T.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
const BLOG_POSTS = [
  {
    slug: "on-page-seo",
    title: "The Ultimate Guide to On-Page SEO: Rank Higher in 2024",
    category: "On-Page SEO",
    icon: Search,
    excerpt: "Master on-page SEO techniques to boost rankings — from crafting compelling title tags and meta descriptions to strategic keyword placement and content structure that search engines reward.",
    readTime: "8 min",
    keywords: [
      "on-page SEO",
      "on-page optimization",
      "title tags",
      "meta descriptions",
      "keyword optimization"
    ],
    publishDate: "2024-01-15"
  },
  {
    slug: "technical-seo",
    title: "Technical SEO Mastery: Speed, Structure & Crawlability",
    category: "Technical SEO",
    icon: CodeXml,
    excerpt: "Learn how technical SEO improvements drive organic growth — covering Core Web Vitals, XML sitemaps, schema markup, crawl budget optimization, and site architecture best practices.",
    readTime: "10 min",
    keywords: [
      "technical SEO",
      "site speed",
      "crawlability",
      "XML sitemap",
      "schema markup"
    ],
    publishDate: "2024-01-22"
  },
  {
    slug: "local-seo",
    title: "Local SEO Strategies: Dominate Your City's Search Results",
    category: "Local SEO",
    icon: MapPin,
    excerpt: "Proven local SEO tactics to outrank competitors in your city — optimize your Google Business Profile, build authoritative local citations, and win near me searches.",
    readTime: "7 min",
    keywords: [
      "local SEO",
      "Google My Business",
      "local citations",
      "local search optimization",
      "near me searches"
    ],
    publishDate: "2024-01-29"
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO: Drive Sales with Organic Traffic",
    category: "E-Commerce SEO",
    icon: ShoppingCart,
    excerpt: "Unlock e-commerce SEO strategies to increase product visibility — master product page optimization, category SEO, shopping feeds, and WooCommerce SEO best practices.",
    readTime: "9 min",
    keywords: [
      "e-commerce SEO",
      "product page optimization",
      "category SEO",
      "shopping SEO",
      "WooCommerce SEO"
    ],
    publishDate: "2024-02-05"
  },
  {
    slug: "link-building",
    title: "Link Building in 2024: Ethical Strategies That Actually Work",
    category: "Link Building",
    icon: Link2,
    excerpt: "Build high-quality backlinks that boost domain authority using white hat link building — guest posting, digital PR, broken link building, and competitor analysis.",
    readTime: "8 min",
    keywords: [
      "link building",
      "backlinks",
      "domain authority",
      "guest posting",
      "white hat link building"
    ],
    publishDate: "2024-02-12"
  },
  {
    slug: "seo-audit-guide",
    title: "Complete SEO Audit Guide: Find & Fix Your Website's Issues",
    category: "SEO Audit",
    icon: FileSearch,
    excerpt: "Step-by-step SEO audit process to identify and fix ranking blockers — use our proven SEO checklist to conduct a thorough technical audit and prioritize quick wins.",
    readTime: "11 min",
    keywords: [
      "SEO audit",
      "website audit",
      "SEO analysis",
      "SEO checklist",
      "technical audit"
    ],
    publishDate: "2024-02-19"
  },
  {
    slug: "ai-seo-services",
    title: "AI-Powered SEO: The Future of Search Optimization",
    category: "AI SEO",
    icon: BotMessageSquare,
    excerpt: "How artificial intelligence is transforming SEO strategies — explore AI content optimization, machine learning SEO tools, and automated SEO workflows that scale results.",
    readTime: "6 min",
    keywords: [
      "AI SEO",
      "artificial intelligence SEO",
      "AI content optimization",
      "machine learning SEO",
      "automated SEO"
    ],
    publishDate: "2024-02-26"
  },
  {
    slug: "content-seo",
    title: "Content SEO Strategy: Create Content That Ranks and Converts",
    category: "Content SEO",
    icon: BookOpen,
    excerpt: "Craft SEO-optimized content that attracts traffic and drives conversions — build topical authority, develop content clusters, and write SEO content that outperforms competitors.",
    readTime: "9 min",
    keywords: [
      "content SEO",
      "content strategy",
      "SEO content writing",
      "content marketing",
      "keyword research"
    ],
    publishDate: "2024-03-04"
  }
];
const CATEGORY_ICONS = {
  "On-Page SEO": Search,
  "Technical SEO": CodeXml,
  "Local SEO": MapPin,
  "E-Commerce SEO": ShoppingCart,
  "Link Building": Link2,
  "SEO Audit": FileSearch,
  "AI SEO": BotMessageSquare,
  "Content SEO": BookOpen
};
const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))
];
const CATEGORY_COLORS = {
  "On-Page SEO": "bg-primary/10 text-primary border-primary/20",
  "Technical SEO": "bg-accent/10 text-accent border-accent/20",
  "Local SEO": "bg-primary/10 text-primary border-primary/20",
  "E-Commerce SEO": "bg-accent/10 text-accent border-accent/20",
  "Link Building": "bg-primary/10 text-primary border-primary/20",
  "SEO Audit": "bg-accent/10 text-accent border-accent/20",
  "AI SEO": "bg-primary/10 text-primary border-primary/20",
  "Content SEO": "bg-accent/10 text-accent border-accent/20"
};
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
function Blog() {
  const [activeCategory, setActiveCategory] = reactExports.useState("All");
  const filtered = activeCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory);
  const featured = BLOG_POSTS[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "blog.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent/80 text-primary-foreground py-20 md:py-28", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/30 blur-3xl translate-y-1/2 -translate-x-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-5 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5", children: "📚 Expert SEO Knowledge Base" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5", children: [
              "SEO Blog &",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent", children: "Digital Marketing Insights" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 font-body leading-relaxed", children: "Expert guides, proven strategies, and actionable tips to grow your organic traffic and dominate search engine results pages." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/audit", "data-ocid": "blog.hero.audit_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg",
                  children: [
                    "Get Free SEO Audit",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 w-5 h-5" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "blog.hero.services_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-white/50 text-primary-foreground hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg bg-transparent",
                  children: "View Our Services"
                }
              ) })
            ] })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "mb-8",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground", children: "Featured Article" })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: featured.slug },
              "data-ocid": "blog.featured_card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 shadow-lg hover:shadow-xl transition-smooth bg-card group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 btn-gradient" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 md:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `mb-4 text-xs font-semibold border ${CATEGORY_COLORS[featured.category] ?? "bg-primary/10 text-primary border-primary/20"}`,
                        children: featured.category
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-200", children: featured.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: featured.excerpt }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm text-muted-foreground mb-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                        featured.readTime,
                        " read"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(featured.publishDate) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-smooth", children: [
                      "Read Full Article",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-primary/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4", children: "Key Topics Covered" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3", children: featured.keywords.map((kw) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2.5 text-sm text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: kw })
                        ]
                      },
                      kw
                    )) })
                  ] })
                ] }) })
              ] })
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4", children: [
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
              "All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "SEO Articles" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "In-depth guides covering every aspect of search engine optimization — from technical foundations to advanced strategies." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: 0.1 },
          className: "flex flex-wrap gap-2 justify-center mb-10",
          "data-ocid": "blog.category_filter",
          children: ALL_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setActiveCategory(cat),
              "data-ocid": `blog.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
              className: `px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${activeCategory === cat ? "btn-gradient text-primary-foreground border-transparent shadow-sm" : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/30"}`,
              children: cat
            },
            cat
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          "data-ocid": "blog.posts_grid",
          children: filtered.map((post, index) => {
            const Icon = CATEGORY_ICONS[post.category] ?? BookOpen;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: index * 0.07 },
                "data-ocid": `blog.post_card.${index + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/blog/$slug",
                    params: { slug: post.slug },
                    "data-ocid": `blog.post_card.${index + 1}.link`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "card-elevated group h-full rounded-xl hover:shadow-lg transition-smooth cursor-pointer overflow-hidden", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 btn-gradient opacity-0 group-hover:opacity-100 transition-smooth" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs font-semibold border ${CATEGORY_COLORS[post.category] ?? "bg-primary/10 text-primary border-primary/20"}`,
                              children: post.category
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2", children: post.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1", children: post.excerpt }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: post.keywords.slice(0, 2).map((kw) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border",
                            children: kw
                          },
                          kw
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-border", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3.5 h-3.5" }),
                              post.readTime
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(post.publishDate) })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth", children: [
                            "Read Article",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                          ] })
                        ] })
                      ] })
                    ] })
                  }
                )
              },
              post.slug
            );
          })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "mb-5 text-primary border-primary/30 bg-primary/5 px-4 py-1.5",
              children: "🚀 Ready to Rank Higher?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-4", children: [
            "Put These Strategies",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Into Action" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed", children: "Reading about SEO is only half the battle. Let our experts implement these proven strategies for your website and deliver measurable ranking improvements." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/audit", "data-ocid": "blog.cta.audit_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                className: "btn-gradient font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg",
                children: [
                  "Get Free SEO Audit",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-2 w-5 h-5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", "data-ocid": "blog.cta.services_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "px-8 py-6 text-lg",
                children: "Explore Our Services"
              }
            ) })
          ] })
        ]
      }
    ) }) })
  ] });
}
const Blog$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BLOG_POSTS,
  default: Blog
}, Symbol.toStringTag, { value: "Module" }));
export {
  ArrowRight as A,
  BLOG_POSTS as B,
  Blog$1 as a
};
