import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BarChart2,
  BarChart3,
  BookOpen,
  BotMessageSquare,
  Braces,
  CheckCircle,
  ChevronRight,
  Clock,
  Code2,
  FileSearch,
  Globe,
  Link2,
  Loader2,
  MapPin,
  MessageSquare,
  Search,
  SearchCheck,
  ShoppingCart,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLeadForm } from "../hooks/useLeadForm";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: Search,
    name: "On-Page SEO",
    desc: "Optimize every element on your pages — titles, meta tags, headings, and content for maximum ranking power.",
  },
  {
    icon: Code2,
    name: "Technical SEO",
    desc: "Fix crawlability, site speed, structured data, and indexing issues that hold your rankings back.",
  },
  {
    icon: MapPin,
    name: "Local SEO",
    desc: "Dominate Google Maps and local search results to drive foot traffic and hyper-local conversions.",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce SEO",
    desc: "Scale organic revenue for online stores with product-page optimization, category SEO, and schema markup.",
  },
  {
    icon: Link2,
    name: "Link Building",
    desc: "Earn high-authority backlinks through white-hat outreach and content strategies that build lasting domain trust.",
  },
  {
    icon: FileSearch,
    name: "SEO Audit",
    desc: "Comprehensive 150-point audit identifying every opportunity and issue across your entire website.",
  },
  {
    icon: BotMessageSquare,
    name: "AI SEO Services",
    desc: "Leverage cutting-edge AI to automate keyword research, content gaps analysis, and ranking predictions.",
  },
  {
    icon: BookOpen,
    name: "Content SEO",
    desc: "Create search-optimized content that ranks, engages readers, and converts visitors into customers.",
  },
];

const TOOLS = [
  {
    icon: BarChart2,
    name: "Keyword Density Checker",
    desc: "Analyze keyword usage and optimize content density for better rankings.",
  },
  {
    icon: Link2,
    name: "Backlink Analyzer",
    desc: "Audit your backlink profile and discover new link-building opportunities.",
  },
  {
    icon: Zap,
    name: "Page Speed Checker",
    desc: "Measure Core Web Vitals and get actionable speed improvement recommendations.",
  },
  {
    icon: Smartphone,
    name: "Mobile Friendliness Test",
    desc: "Verify your site passes Google's mobile-first indexing requirements.",
  },
  {
    icon: FileSearch,
    name: "Meta Tag Generator",
    desc: "Generate perfectly optimized title tags and meta descriptions for any page.",
  },
  {
    icon: SearchCheck,
    name: "Competitor Analyzer",
    desc: "Uncover your competitors' SEO strategies, keywords, and backlink sources.",
  },
  {
    icon: BarChart3,
    name: "Rank Tracker",
    desc: "Monitor daily keyword rankings across Google, Bing, and other search engines.",
  },
  {
    icon: Braces,
    name: "Schema Markup Validator",
    desc: "Validate and test structured data to unlock rich snippets in search results.",
  },
  {
    icon: Globe,
    name: "XML Sitemap Generator",
    desc: "Auto-generate XML sitemaps to ensure complete search engine crawl coverage.",
  },
  {
    icon: Code2,
    name: "Robots.txt Generator",
    desc: "Create a properly formatted robots.txt to control search engine bot access.",
  },
  {
    icon: Wifi,
    name: "Broken Link Finder",
    desc: "Identify and fix broken internal and external links affecting your SEO authority.",
  },
  {
    icon: BookOpen,
    name: "Heading Tag Analyzer",
    desc: "Audit H1–H6 hierarchy to ensure perfectly structured, SEO-friendly content.",
  },
];

const STATS = [
  { value: "500+", label: "Successful Campaigns", icon: Award },
  { value: "95%", label: "Client Retention Rate", icon: Users },
  { value: "400%", label: "Avg Traffic Growth", icon: TrendingUp },
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "50+", label: "Expert Team Members", icon: MessageSquare },
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
      "10 Link Building / Month",
    ],
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
      "Social Media Ads Management",
    ],
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
      "Social Media Ads Management",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "TechCorp",
    text: "Our organic traffic increased by 430% in just 8 months. The team's AI-driven strategies uncovered opportunities we never knew existed. We now consistently rank on page one for our most competitive keywords.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "RetailPlus",
    text: "Switching to this agency was the best marketing decision we've made. Revenue from organic search tripled within a year and our cost-per-acquisition dropped dramatically. Highly recommend their e-commerce SEO expertise.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    company: "LocalBiz",
    text: "After struggling to appear in local searches, we now dominate Google Maps in our city. Foot traffic has doubled and our Google Business profile gets 10x more views than before we started.",
    rating: 5,
  },
  {
    name: "David Martinez",
    company: "E-ShopPro",
    text: "The technical SEO audit alone was worth every penny — they identified 47 critical issues. After fixing them, our crawl coverage and rankings improved substantially within weeks. Exceptional team.",
    rating: 5,
  },
];

const TRUST_BADGES = [
  "Google Partner",
  "10,000+ Clients",
  "15+ Years Experience",
  "400% Avg Traffic Growth",
  "4.9/5 Rating",
];

// ─── Helper ───────────────────────────────────────────────────────────────────

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.slice(0, count).map((k) => (
        <Star key={k} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent/80 text-primary-foreground"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/30 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge className="mb-6 bg-white/20 text-primary-foreground border-white/30 hover:bg-white/30 text-sm px-4 py-1.5">
            🚀 AI-Powered SEO Platform
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Dominate Search Rankings with{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI-Powered SEO
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            Increase your organic traffic, outrank competitors, and grow your
            digital presence with data-driven strategies powered by artificial
            intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href="/audit" data-ocid="hero.audit_button">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-smooth w-full sm:w-auto"
              >
                Get Free SEO Audit
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a
              href="/services"
              data-ocid="hero.services_link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/services";
              }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-primary-foreground hover:bg-white/10 hover:border-white font-semibold px-8 py-6 text-lg transition-smooth w-full sm:w-auto bg-transparent"
              >
                View Our Services
              </Button>
            </a>
          </div>

          <div
            className="flex flex-wrap justify-center gap-3"
            data-ocid="hero.trust_badges"
          >
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/90"
              >
                <CheckCircle className="w-3.5 h-3.5 text-green-300" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          className="w-full fill-background"
          preserveAspectRatio="none"
          aria-hidden="true"
          role="presentation"
        >
          <title>Decorative wave divider</title>
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" />
        </svg>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
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
            Our SEO & Digital Marketing{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From technical foundations to content strategy, we provide
            end-to-end SEO solutions that deliver measurable results.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map(({ icon: Icon, name, desc }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              data-ocid={`services.item.${index + 1}`}
            >
              <Card className="card-elevated group cursor-pointer h-full rounded-xl">
                <CardContent className="p-6 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {desc}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-smooth">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tools ────────────────────────────────────────────────────────────────────

function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-muted/30">
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
            className="mb-4 text-accent border-accent/30 bg-accent/5 px-4 py-1.5"
          >
            Free Resources
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free <span className="gradient-text">SEO Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful, no-cost tools to audit, analyze, and improve your SEO
            performance — no sign-up required.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-ocid="tools.list"
        >
          {TOOLS.map(({ icon: Icon, name, desc }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-ocid={`tools.item.${index + 1}`}
            >
              <Card className="card-elevated group h-full rounded-xl bg-card">
                <CardContent className="p-5 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-5 h-5 text-accent" />
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
                      Use Tool
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats / Why Choose Us ───────────────────────────────────────────────────

function StatsSection() {
  return (
    <section id="why-us" className="py-20 bg-background">
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
            Track Record
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Leading Brands <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Numbers speak louder than words. Here's what 15 years of relentless
            focus on results looks like.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          data-ocid="stats.list"
        >
          {STATS.map(({ value, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              data-ocid={`stats.item.${index + 1}`}
            >
              <Card className="card-elevated rounded-xl text-center group hover:border-primary/30 transition-smooth">
                <CardContent className="p-8 flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="font-display text-4xl font-bold gradient-text">
                    {value}
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
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
            Transparent Pricing
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, <span className="gradient-text">Scalable Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No hidden fees. No long-term lock-ins. Just clear, results-focused
            SEO plans — all with a{" "}
            <span className="text-primary font-semibold">
              15-day free trial
            </span>
            .
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start"
          data-ocid="pricing.list"
        >
          {PRICING.map(
            (
              {
                name,
                price,
                desc,
                popular,
                trialDays,
                setupDays,
                socialMediaAdsDeal,
                features,
              },
              index,
            ) => {
              const discountedPrice = Math.round(price * 0.8);
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  data-ocid={`pricing.item.${index + 1}`}
                >
                  <Card
                    className={`h-full rounded-2xl flex flex-col relative overflow-hidden transition-smooth ${
                      popular
                        ? "ring-2 ring-primary shadow-xl"
                        : "card-elevated hover:shadow-lg"
                    }`}
                  >
                    {/* Top accent bar */}
                    {popular && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 btn-gradient" />
                    )}

                    {/* Free Trial Banner */}
                    <div
                      className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold tracking-wide ${
                        popular
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                      data-ocid={`pricing.trial_badge.${index + 1}`}
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      {trialDays}-Day Free Trial — No credit card needed
                    </div>

                    <CardContent className="p-8 flex flex-col gap-5 flex-1">
                      <div>
                        {popular && (
                          <Badge className="mb-3 btn-gradient text-primary-foreground border-0 text-xs">
                            Most Popular
                          </Badge>
                        )}
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {name}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-1">
                          {desc}
                        </p>
                      </div>

                      {/* Discount badge */}
                      <div
                        className="flex items-center gap-2 rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-3 py-2"
                        data-ocid={`pricing.discount_badge.${index + 1}`}
                      >
                        <Zap className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                        <p className="text-xs font-semibold text-yellow-700">
                          Pay now & save 20% — limited offer
                        </p>
                      </div>

                      <div>
                        {/* Original price struck through */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-display text-2xl font-medium text-muted-foreground line-through">
                            ${price}
                          </span>
                          <Badge
                            variant="outline"
                            className="text-xs border-green-500/30 text-green-600 bg-green-50"
                          >
                            Save ${price - discountedPrice}
                          </Badge>
                        </div>
                        {/* Discounted price */}
                        <div className="flex items-end gap-1">
                          <span className="font-display text-5xl font-bold gradient-text">
                            ${discountedPrice}
                          </span>
                          <span className="text-muted-foreground mb-2">
                            /mo
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs mt-1.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Setup completed within {setupDays} days
                        </p>
                      </div>

                      {socialMediaAdsDeal && (
                        <div
                          className="flex items-start gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2.5"
                          data-ocid={`pricing.social_ads_deal.${index + 1}`}
                        >
                          <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <p className="text-xs font-medium text-accent leading-snug">
                            Social Media Ads:{" "}
                            <span className="font-bold">First month free</span>{" "}
                            on onboarding
                          </p>
                        </div>
                      )}

                      <ul className="space-y-3 flex-1">
                        {features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        data-ocid={`pricing.cta_button.${index + 1}`}
                      >
                        <Button
                          className={`w-full font-semibold py-5 transition-smooth ${popular ? "btn-gradient shadow-md hover:shadow-lg" : ""}`}
                          variant={popular ? "default" : "outline"}
                        >
                          Start Free Trial
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
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
            Client Stories
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results from real businesses. Here's how we've transformed
            their digital presence.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          data-ocid="testimonials.list"
        >
          {TESTIMONIALS.map(({ name, company, text, rating }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-ocid={`testimonials.item.${index + 1}`}
            >
              <Card className="card-elevated rounded-xl h-full">
                <CardContent className="p-7 flex flex-col gap-4">
                  <StarRating count={rating} />
                  <p className="text-foreground leading-relaxed flex-1 italic">
                    "{text}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                      {name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {name}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactSection() {
  const { formData, updateField, status, error, submitForm } = useLeadForm();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    submitForm(e);
  };

  const clearFieldError = (field: string) =>
    setValidationErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5"
            >
              Get In Touch
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to{" "}
              <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tell us about your goals and we'll craft a custom SEO strategy to
              get you there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="rounded-2xl shadow-lg border-border">
              <CardContent className="p-8 md:p-10">
                {status === "success" ? (
                  <div
                    className="flex flex-col items-center gap-4 py-12 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thanks for reaching out! Our SEO experts will review your
                      request and get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-6"
                    data-ocid="contact.form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Jane Smith"
                          value={formData.fullName}
                          onChange={(e) =>
                            updateField("fullName", e.target.value)
                          }
                          onBlur={() => {
                            if (!formData.fullName.trim())
                              setValidationErrors((p) => ({
                                ...p,
                                fullName: "Full name is required.",
                              }));
                            else clearFieldError("fullName");
                          }}
                          data-ocid="contact.fullname_input"
                          className={
                            validationErrors.fullName
                              ? "border-destructive"
                              : ""
                          }
                        />
                        {validationErrors.fullName && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="contact.fullname_field_error"
                          >
                            {validationErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          onBlur={() => {
                            if (!formData.email.trim())
                              setValidationErrors((p) => ({
                                ...p,
                                email: "Email is required.",
                              }));
                            else if (
                              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                            )
                              setValidationErrors((p) => ({
                                ...p,
                                email: "Enter a valid email.",
                              }));
                            else clearFieldError("email");
                          }}
                          data-ocid="contact.email_input"
                          className={
                            validationErrors.email ? "border-destructive" : ""
                          }
                        />
                        {validationErrors.email && (
                          <p
                            className="text-destructive text-xs"
                            data-ocid="contact.email_field_error"
                          >
                            {validationErrors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Acme Inc."
                          value={formData.company}
                          onChange={(e) =>
                            updateField("company", e.target.value)
                          }
                          data-ocid="contact.company_input"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          data-ocid="contact.phone_input"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How Can We Help? *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your website, current SEO challenges, and goals..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        onBlur={() => {
                          if (!formData.message.trim())
                            setValidationErrors((p) => ({
                              ...p,
                              message: "Please describe your needs.",
                            }));
                          else clearFieldError("message");
                        }}
                        data-ocid="contact.message_textarea"
                        className={
                          validationErrors.message ? "border-destructive" : ""
                        }
                      />
                      {validationErrors.message && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.message_field_error"
                        >
                          {validationErrors.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => {
                          setTermsAccepted(e.target.checked);
                          if (e.target.checked) clearFieldError("terms");
                        }}
                        className="mt-0.5 w-4 h-4 accent-primary cursor-pointer"
                        data-ocid="contact.terms_checkbox"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        I agree to the{" "}
                        <span className="text-primary underline underline-offset-2">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-primary underline underline-offset-2">
                          Privacy Policy
                        </span>
                        .
                      </label>
                    </div>
                    {validationErrors.terms && (
                      <p
                        className="text-destructive text-xs"
                        data-ocid="contact.terms_field_error"
                      >
                        {validationErrors.terms}
                      </p>
                    )}

                    {error && (
                      <p
                        className="text-destructive text-sm bg-destructive/10 rounded-lg px-4 py-3"
                        data-ocid="contact.error_state"
                      >
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "submitting"}
                      className="w-full btn-gradient font-semibold py-6 text-base shadow-md hover:shadow-lg"
                      data-ocid="contact.submit_button"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <ChevronRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <ServicesSection />
      <ToolsSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
