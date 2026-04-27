import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  BarChart3,
  BookOpen,
  Braces,
  ChevronRight,
  Code2,
  FileSearch,
  Globe,
  Link2,
  SearchCheck,
  Smartphone,
  Wifi,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const TOOLS = [
  {
    icon: BarChart2,
    name: "Keyword Density Checker",
    desc: "Analyze keyword usage and optimize content density for better rankings.",
    category: "Content",
  },
  {
    icon: Link2,
    name: "Backlink Analyzer",
    desc: "Audit your backlink profile and discover new link-building opportunities.",
    category: "Links",
  },
  {
    icon: Zap,
    name: "Page Speed Checker",
    desc: "Measure Core Web Vitals and get actionable speed improvement recommendations.",
    category: "Technical",
  },
  {
    icon: Smartphone,
    name: "Mobile Friendliness Test",
    desc: "Verify your site passes Google's mobile-first indexing requirements.",
    category: "Technical",
  },
  {
    icon: FileSearch,
    name: "Meta Tag Generator",
    desc: "Generate perfectly optimized title tags and meta descriptions for any page.",
    category: "On-Page",
  },
  {
    icon: SearchCheck,
    name: "Competitor Analyzer",
    desc: "Uncover your competitors' SEO strategies, keywords, and backlink sources.",
    category: "Research",
  },
  {
    icon: BarChart3,
    name: "Rank Tracker",
    desc: "Monitor daily keyword rankings across Google, Bing, and other search engines.",
    category: "Tracking",
  },
  {
    icon: Braces,
    name: "Schema Markup Validator",
    desc: "Validate and test structured data to unlock rich snippets in search results.",
    category: "Technical",
  },
  {
    icon: Globe,
    name: "XML Sitemap Generator",
    desc: "Auto-generate XML sitemaps to ensure complete search engine crawl coverage.",
    category: "Technical",
  },
  {
    icon: Code2,
    name: "Robots.txt Generator",
    desc: "Create a properly formatted robots.txt to control search engine bot access.",
    category: "Technical",
  },
  {
    icon: Wifi,
    name: "Broken Link Finder",
    desc: "Identify and fix broken internal and external links affecting your SEO authority.",
    category: "Links",
  },
  {
    icon: BookOpen,
    name: "Heading Tag Analyzer",
    desc: "Audit H1–H6 hierarchy to ensure perfectly structured, SEO-friendly content.",
    category: "On-Page",
  },
];

const CATEGORIES = [
  "All",
  "Technical",
  "Content",
  "Links",
  "On-Page",
  "Research",
  "Tracking",
];

const CATEGORY_COLORS: Record<string, string> = {
  Technical: "bg-primary/10 text-primary border-primary/20",
  Content: "bg-accent/10 text-accent border-accent/20",
  Links: "bg-primary/15 text-primary border-primary/25",
  "On-Page": "bg-accent/15 text-accent border-accent/25",
  Research: "bg-primary/10 text-primary border-primary/20",
  Tracking: "bg-accent/10 text-accent border-accent/20",
};

export default function Tools() {
  return (
    <div data-ocid="tools.page">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/80 via-primary/80 to-primary text-primary-foreground py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl translate-y-1/2 translate-x-1/4" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5">
              🛠️ 12 Free Tools — No Sign-up Required
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              Free{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                SEO Tools
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto font-body leading-relaxed">
              Powerful, no-cost tools to audit, analyze, and improve your SEO
              performance. Instant results, no registration needed.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            className="w-full fill-background"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <title>Decorative wave divider</title>
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: "12", label: "Free Tools" },
              { value: "100%", label: "No Sign-up" },
              { value: "Instant", label: "Results" },
              { value: "Always", label: "Up to Date" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-bold gradient-text">
                  {value}
                </div>
                <div className="text-muted-foreground text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Our <span className="gradient-text">Tool Suite</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every tool you need to diagnose issues, uncover opportunities, and
              optimize your site for search engines.
            </p>
          </motion.div>

          {/* Category filter display */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="tools.category_filters"
          >
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant="outline"
                className="px-3 py-1 text-sm cursor-default border-primary/20 text-muted-foreground"
                data-ocid={`tools.filter.${cat.toLowerCase()}`}
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            data-ocid="tools.list"
          >
            {TOOLS.map(({ icon: Icon, name, desc, category }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                data-ocid={`tools.item.${index + 1}`}
              >
                <Card className="card-elevated group h-full rounded-xl bg-card hover:shadow-lg transition-smooth">
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs border ${CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground"}`}
                      >
                        {category}
                      </Badge>
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-sm leading-snug">
                      {name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                      {desc}
                    </p>
                    <a href="/audit">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary text-xs mt-auto transition-smooth"
                        data-ocid={`tools.use_button.${index + 1}`}
                      >
                        Use Tool <ChevronRight className="ml-1 w-3 h-3" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Need a <span className="gradient-text">Full SEO Strategy?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our free tools are just the beginning. Let our experts build a
              custom strategy that drives real, sustainable organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" data-ocid="tools.bottom.contact_button">
                <Button
                  size="lg"
                  className="btn-gradient font-semibold px-8 py-6 text-lg shadow-md"
                >
                  Get a Free Strategy Session
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/audit" data-ocid="tools.bottom.audit_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  Run Full SEO Audit
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
