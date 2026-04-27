import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  BotMessageSquare,
  CheckCircle,
  ChevronRight,
  Code2,
  FileSearch,
  Globe,
  Link2,
  MapPin,
  Monitor,
  Palette,
  Search,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

const SERVICES = [
  {
    icon: Search,
    name: "On-Page SEO",
    slug: "on-page-seo",
    desc: "Optimize every element on your pages — titles, meta tags, headings, and content for maximum ranking power.",
    highlights: [
      "Title & meta optimization",
      "Content structure",
      "Internal linking",
      "Keyword placement",
    ],
  },
  {
    icon: Code2,
    name: "Technical SEO",
    slug: "technical-seo",
    desc: "Fix crawlability, site speed, structured data, and indexing issues that hold your rankings back.",
    highlights: [
      "Core Web Vitals",
      "Schema markup",
      "Crawl optimization",
      "Site architecture",
    ],
  },
  {
    icon: MapPin,
    name: "Local SEO",
    slug: "local-seo",
    desc: "Dominate Google Maps and local search results to drive foot traffic and hyper-local conversions.",
    highlights: [
      "Google Business Profile",
      "Local citations",
      "Review management",
      "Local content",
    ],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce SEO",
    slug: "ecommerce-seo",
    desc: "Scale organic revenue for online stores with product-page optimization, category SEO, and schema markup.",
    highlights: [
      "Product page SEO",
      "Category optimization",
      "Product schema",
      "Shopping feeds",
    ],
  },
  {
    icon: Link2,
    name: "Link Building",
    slug: "link-building",
    desc: "Earn high-authority backlinks through white-hat outreach and content strategies that build lasting domain trust.",
    highlights: [
      "Guest posting",
      "Broken link building",
      "Digital PR",
      "Competitor analysis",
    ],
  },
  {
    icon: FileSearch,
    name: "SEO Audit",
    slug: "seo-audit-guide",
    desc: "Comprehensive 150-point audit identifying every opportunity and issue across your entire website.",
    highlights: [
      "150-point checklist",
      "Competitor gap analysis",
      "Priority action plan",
      "Monthly reports",
    ],
  },
  {
    icon: BotMessageSquare,
    name: "AI SEO Services",
    slug: "ai-seo-services",
    desc: "Leverage cutting-edge AI to automate keyword research, content gaps analysis, and ranking predictions.",
    highlights: [
      "AI keyword research",
      "Content gap analysis",
      "Rank prediction",
      "Automated reporting",
    ],
  },
  {
    icon: BookOpen,
    name: "Content SEO",
    slug: "content-seo",
    desc: "Create search-optimized content that ranks, engages readers, and converts visitors into customers.",
    highlights: [
      "Topical authority",
      "Content clusters",
      "Evergreen strategy",
      "Conversion copywriting",
    ],
  },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Professional SEO Services by SEO Pro Agency",
  description:
    "Comprehensive digital marketing and SEO services including On-Page SEO, Technical SEO, Local SEO, E-Commerce SEO, Link Building, SEO Audit, AI SEO, and Content SEO.",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.desc,
      url: `/blog/${s.slug}`,
      provider: {
        "@type": "Organization",
        name: "SEO Pro Agency",
      },
    },
  })),
};

const WEB_DESIGN_FEATURES = [
  "Fully Responsive Design (Mobile, Tablet, Desktop)",
  "SEO-Optimized HTML Structure & Semantic Markup",
  "Optimized Page Speed (90+ Lighthouse Score)",
  "Meta Tags, Open Graph & Schema Integration",
  "Sitemap & Robots.txt Configuration",
  "Google Analytics & Search Console Setup",
  "SSL & Security Best Practices",
  "Contact Form & CTA Integration",
  "Social Media Profiles Integration",
  "30-Day Post-Launch Support",
];

export default function Services() {
  useEffect(() => {
    document.title =
      "SEO Services - Professional Digital Marketing Agency | SEO Pro Agency";

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector<HTMLMetaElement>(
        `meta[${attr}="${name}"]`,
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Explore our comprehensive SEO services including On-Page SEO, Technical SEO, Local SEO, E-Commerce SEO, Link Building, AI SEO, and Content SEO. Boost your rankings today.",
    );
    setMeta(
      "keywords",
      "SEO services, on-page SEO, technical SEO, local SEO, e-commerce SEO, link building, AI SEO, content SEO, search engine optimization, digital marketing agency, SEO audit, keyword research, organic traffic, Google rankings",
    );

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/services`);

    setMeta(
      "og:title",
      "SEO Services - Professional Digital Marketing Agency | SEO Pro Agency",
      "property",
    );
    setMeta(
      "og:description",
      "Comprehensive SEO services: On-Page, Technical, Local, E-Commerce, Link Building, AI SEO & Content SEO. Drive real organic traffic growth.",
      "property",
    );
    setMeta("og:url", `${window.location.origin}/services`, "property");
    setMeta("og:type", "website", "property");

    const scriptId = "services-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(STRUCTURED_DATA);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <div data-ocid="services.page">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent/80 text-primary-foreground py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5">
              🏆 Full-Service Digital Agency
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              Professional SEO Services That{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Drive Real Results
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 font-body leading-relaxed">
              From technical SEO foundations to AI-powered keyword strategies —
              our data-driven digital marketing services boost your Google
              rankings, increase organic traffic, and turn visitors into
              customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" data-ocid="services.hero.contact_button">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg"
                >
                  Get a Free Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/audit" data-ocid="services.hero.audit_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-primary-foreground hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg bg-transparent"
                >
                  Free SEO Audit
                </Button>
              </a>
            </div>
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

      {/* Web Design Featured Section */}
      <section id="web-design" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 btn-gradient text-primary-foreground border-0 px-4 py-1.5">
              ✨ New Service
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Web Design with{" "}
              <span className="gradient-text">Full SEO Optimization</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get a professionally designed website that's engineered to rank —
              every page built for both users and search engines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-ocid="services.web_design_card"
          >
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden ring-2 ring-primary shadow-2xl">
              {/* Top gradient bar */}
              <div className="h-1.5 btn-gradient" />

              <div className="bg-card p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  {/* Left: Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl btn-gradient flex items-center justify-center shadow-lg">
                        <Palette className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          Web Design
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Complete website solution
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      A beautiful website isn't enough — it needs to rank. Our
                      web design service combines stunning visuals with deep SEO
                      integration, delivering a site that attracts visitors and
                      converts them into customers.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
                        <Sparkles className="w-3 h-3 mr-1" /> Fully SEO
                        Optimized
                      </Badge>
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        <Zap className="w-3 h-3 mr-1" /> Fast Load Times
                      </Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        <Monitor className="w-3 h-3 mr-1" /> Mobile-First Design
                      </Badge>
                      <Badge className="bg-accent/10 text-accent border-accent/20">
                        <Globe className="w-3 h-3 mr-1" /> Modern & Professional
                      </Badge>
                    </div>

                    {/* Pricing */}
                    <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-6">
                      <div className="flex items-end gap-2 mb-1">
                        <span className="font-display text-5xl font-bold gradient-text">
                          $499
                        </span>
                        <span className="text-muted-foreground mb-2 text-lg font-medium">
                          one-time
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        Complete website delivered in 7–14 business days
                      </p>
                      <a
                        href="/#contact"
                        data-ocid="services.web_design.cta_button"
                      >
                        <Button
                          size="lg"
                          className="w-full btn-gradient font-semibold py-5 shadow-md hover:shadow-lg transition-smooth"
                        >
                          Get Your Website Built
                          <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right: Features checklist */}
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-4 text-lg">
                      Everything Included:
                    </h4>
                    <ul
                      className="space-y-3"
                      data-ocid="services.web_design.features_list"
                    >
                      {WEB_DESIGN_FEATURES.map((feature, i) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground"
                          data-ocid={`services.web_design.feature.${i + 1}`}
                        >
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5"
            >
              Our Expertise
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive <span className="gradient-text">SEO Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              End-to-end search engine optimization solutions — from{" "}
              <strong className="text-foreground font-medium">
                on-page SEO
              </strong>{" "}
              and{" "}
              <strong className="text-foreground font-medium">
                technical SEO
              </strong>{" "}
              to{" "}
              <strong className="text-foreground font-medium">local SEO</strong>
              ,{" "}
              <strong className="text-foreground font-medium">
                e-commerce SEO
              </strong>
              , and{" "}
              <strong className="text-foreground font-medium">
                AI-powered keyword research
              </strong>
              . Every strategy is backed by data, every action tied to
              measurable organic growth. Click any service to read our in-depth
              guide.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="services.seo_grid"
          >
            {SERVICES.map(
              ({ icon: Icon, name, slug, desc, highlights }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  data-ocid={`services.seo_item.${index + 1}`}
                >
                  <Card className="card-elevated group cursor-pointer h-full rounded-xl hover:shadow-lg transition-smooth">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-lg leading-snug mb-2">
                          {name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                      <ul className="space-y-1.5 flex-1">
                        {highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/blog/$slug"
                        params={{ slug }}
                        data-ocid={`services.seo_item.${index + 1}.learn_more_link`}
                        aria-label={`Learn more about ${name}`}
                      >
                        <span className="inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-smooth">
                          Learn More <ChevronRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a free consultation and let our SEO experts craft the
              right search engine optimization strategy for your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" data-ocid="services.bottom.contact_button">
                <Button
                  size="lg"
                  className="btn-gradient font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg"
                >
                  Book Free Consultation
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/audit" data-ocid="services.bottom.audit_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  Run Free SEO Audit
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
