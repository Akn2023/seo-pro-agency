import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  BotMessageSquare,
  ChevronRight,
  Clock,
  Code2,
  FileSearch,
  Link2,
  MapPin,
  Search,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  keywords: string[];
  publishDate: string;
  icon: React.ElementType;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "on-page-seo",
    title: "The Ultimate Guide to On-Page SEO: Rank Higher in 2024",
    category: "On-Page SEO",
    icon: Search,
    excerpt:
      "Master on-page SEO techniques to boost rankings — from crafting compelling title tags and meta descriptions to strategic keyword placement and content structure that search engines reward.",
    readTime: "8 min",
    keywords: [
      "on-page SEO",
      "on-page optimization",
      "title tags",
      "meta descriptions",
      "keyword optimization",
    ],
    publishDate: "2024-01-15",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO Mastery: Speed, Structure & Crawlability",
    category: "Technical SEO",
    icon: Code2,
    excerpt:
      "Learn how technical SEO improvements drive organic growth — covering Core Web Vitals, XML sitemaps, schema markup, crawl budget optimization, and site architecture best practices.",
    readTime: "10 min",
    keywords: [
      "technical SEO",
      "site speed",
      "crawlability",
      "XML sitemap",
      "schema markup",
    ],
    publishDate: "2024-01-22",
  },
  {
    slug: "local-seo",
    title: "Local SEO Strategies: Dominate Your City's Search Results",
    category: "Local SEO",
    icon: MapPin,
    excerpt:
      "Proven local SEO tactics to outrank competitors in your city — optimize your Google Business Profile, build authoritative local citations, and win near me searches.",
    readTime: "7 min",
    keywords: [
      "local SEO",
      "Google My Business",
      "local citations",
      "local search optimization",
      "near me searches",
    ],
    publishDate: "2024-01-29",
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO: Drive Sales with Organic Traffic",
    category: "E-Commerce SEO",
    icon: ShoppingCart,
    excerpt:
      "Unlock e-commerce SEO strategies to increase product visibility — master product page optimization, category SEO, shopping feeds, and WooCommerce SEO best practices.",
    readTime: "9 min",
    keywords: [
      "e-commerce SEO",
      "product page optimization",
      "category SEO",
      "shopping SEO",
      "WooCommerce SEO",
    ],
    publishDate: "2024-02-05",
  },
  {
    slug: "link-building",
    title: "Link Building in 2024: Ethical Strategies That Actually Work",
    category: "Link Building",
    icon: Link2,
    excerpt:
      "Build high-quality backlinks that boost domain authority using white hat link building — guest posting, digital PR, broken link building, and competitor analysis.",
    readTime: "8 min",
    keywords: [
      "link building",
      "backlinks",
      "domain authority",
      "guest posting",
      "white hat link building",
    ],
    publishDate: "2024-02-12",
  },
  {
    slug: "seo-audit-guide",
    title: "Complete SEO Audit Guide: Find & Fix Your Website's Issues",
    category: "SEO Audit",
    icon: FileSearch,
    excerpt:
      "Step-by-step SEO audit process to identify and fix ranking blockers — use our proven SEO checklist to conduct a thorough technical audit and prioritize quick wins.",
    readTime: "11 min",
    keywords: [
      "SEO audit",
      "website audit",
      "SEO analysis",
      "SEO checklist",
      "technical audit",
    ],
    publishDate: "2024-02-19",
  },
  {
    slug: "ai-seo-services",
    title: "AI-Powered SEO: The Future of Search Optimization",
    category: "AI SEO",
    icon: BotMessageSquare,
    excerpt:
      "How artificial intelligence is transforming SEO strategies — explore AI content optimization, machine learning SEO tools, and automated SEO workflows that scale results.",
    readTime: "6 min",
    keywords: [
      "AI SEO",
      "artificial intelligence SEO",
      "AI content optimization",
      "machine learning SEO",
      "automated SEO",
    ],
    publishDate: "2024-02-26",
  },
  {
    slug: "content-seo",
    title: "Content SEO Strategy: Create Content That Ranks and Converts",
    category: "Content SEO",
    icon: BookOpen,
    excerpt:
      "Craft SEO-optimized content that attracts traffic and drives conversions — build topical authority, develop content clusters, and write SEO content that outperforms competitors.",
    readTime: "9 min",
    keywords: [
      "content SEO",
      "content strategy",
      "SEO content writing",
      "content marketing",
      "keyword research",
    ],
    publishDate: "2024-03-04",
  },
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "On-Page SEO": Search,
  "Technical SEO": Code2,
  "Local SEO": MapPin,
  "E-Commerce SEO": ShoppingCart,
  "Link Building": Link2,
  "SEO Audit": FileSearch,
  "AI SEO": BotMessageSquare,
  "Content SEO": BookOpen,
};

const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(BLOG_POSTS.map((p) => p.category))),
];

const CATEGORY_COLORS: Record<string, string> = {
  "On-Page SEO": "bg-primary/10 text-primary border-primary/20",
  "Technical SEO": "bg-accent/10 text-accent border-accent/20",
  "Local SEO": "bg-primary/10 text-primary border-primary/20",
  "E-Commerce SEO": "bg-accent/10 text-accent border-accent/20",
  "Link Building": "bg-primary/10 text-primary border-primary/20",
  "SEO Audit": "bg-accent/10 text-accent border-accent/20",
  "AI SEO": "bg-primary/10 text-primary border-primary/20",
  "Content SEO": "bg-accent/10 text-accent border-accent/20",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = BLOG_POSTS[0];

  return (
    <div data-ocid="blog.page">
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/30 blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5">
              📚 Expert SEO Knowledge Base
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              SEO Blog &{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Digital Marketing Insights
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 font-body leading-relaxed">
              Expert guides, proven strategies, and actionable tips to grow your
              organic traffic and dominate search engine results pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/audit" data-ocid="blog.hero.audit_button">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg"
                >
                  Get Free SEO Audit
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services" data-ocid="blog.hero.services_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-primary-foreground hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg bg-transparent"
                >
                  View Our Services
                </Button>
              </Link>
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

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">
                Featured Article
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              data-ocid="blog.featured_card"
            >
              <div className="rounded-2xl overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 shadow-lg hover:shadow-xl transition-smooth bg-card group">
                <div className="h-1.5 btn-gradient" />
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge
                        className={`mb-4 text-xs font-semibold border ${CATEGORY_COLORS[featured.category] ?? "bg-primary/10 text-primary border-primary/20"}`}
                      >
                        {featured.category}
                      </Badge>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-200">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featured.readTime} read
                        </span>
                        <span>{formatDate(featured.publishDate)}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-smooth">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-primary/10">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                        Key Topics Covered
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        {featured.keywords.map((kw) => (
                          <div
                            key={kw}
                            className="flex items-center gap-2.5 text-sm text-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                            <span>{kw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid with Filters */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              All <span className="gradient-text">SEO Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              In-depth guides covering every aspect of search engine
              optimization — from technical foundations to advanced strategies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-10"
            data-ocid="blog.category_filter"
          >
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                data-ocid={`blog.filter.${cat.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth border ${
                  activeCategory === cat
                    ? "btn-gradient text-primary-foreground border-transparent shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="blog.posts_grid"
          >
            {filtered.map((post, index) => {
              const Icon = CATEGORY_ICONS[post.category] ?? BookOpen;
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  data-ocid={`blog.post_card.${index + 1}`}
                >
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    data-ocid={`blog.post_card.${index + 1}.link`}
                  >
                    <Card className="card-elevated group h-full rounded-xl hover:shadow-lg transition-smooth cursor-pointer overflow-hidden">
                      <div className="h-1 btn-gradient opacity-0 group-hover:opacity-100 transition-smooth" />
                      <CardContent className="p-6 flex flex-col gap-4">
                        {/* Icon + Category */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge
                            className={`text-xs font-semibold border ${CATEGORY_COLORS[post.category] ?? "bg-primary/10 text-primary border-primary/20"}`}
                          >
                            {post.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="font-display font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-1.5">
                          {post.keywords.slice(0, 2).map((kw) => (
                            <span
                              key={kw}
                              className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full border border-border"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>

                        {/* Meta + CTA */}
                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold group-hover:gap-2 transition-smooth">
                            Read Article
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge
              variant="outline"
              className="mb-5 text-primary border-primary/30 bg-primary/5 px-4 py-1.5"
            >
              🚀 Ready to Rank Higher?
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Put These Strategies{" "}
              <span className="gradient-text">Into Action</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Reading about SEO is only half the battle. Let our experts
              implement these proven strategies for your website and deliver
              measurable ranking improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/audit" data-ocid="blog.cta.audit_button">
                <Button
                  size="lg"
                  className="btn-gradient font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg"
                >
                  Get Free SEO Audit
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services" data-ocid="blog.cta.services_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
