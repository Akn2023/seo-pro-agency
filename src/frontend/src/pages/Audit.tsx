import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  AlertCircle,
  BarChart2,
  CheckCircle,
  FileSearch,
  Gauge,
  Globe,
  Link2,
  Loader2,
  RefreshCw,
  Search,
  Shield,
  Smartphone,
  Tag,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuditTool } from "../hooks/useAuditTool";
import type { AuditReport } from "../types";

/* ─── helpers ─── */
function scoreColor(score: number) {
  if (score >= 75)
    return "text-[hsl(142,76%,30%)] dark:text-[hsl(142,60%,55%)]";
  if (score >= 50) return "text-[hsl(38,92%,40%)] dark:text-[hsl(38,92%,60%)]";
  return "text-destructive";
}

function scoreTrack(score: number) {
  if (score >= 75) return "bg-[hsl(142,76%,36%)]";
  if (score >= 50) return "bg-[hsl(38,92%,50%)]";
  return "bg-destructive";
}

function scoreLabel(score: number) {
  if (score >= 75) return { text: "Good", variant: "success" } as const;
  if (score >= 50) return { text: "Needs Work", variant: "warning" } as const;
  return { text: "Poor", variant: "destructive" } as const;
}

function badgeClass(variant: "success" | "warning" | "destructive") {
  if (variant === "success")
    return "bg-[hsl(142,76%,36%/0.12)] text-[hsl(142,76%,28%)] border-[hsl(142,76%,36%/0.3)] dark:text-[hsl(142,60%,55%)]";
  if (variant === "warning")
    return "bg-[hsl(38,92%,50%/0.12)] text-[hsl(38,92%,35%)] border-[hsl(38,92%,50%/0.3)] dark:text-[hsl(38,92%,60%)]";
  return "bg-destructive/10 text-destructive border-destructive/30";
}

/* ─── ScoreGauge ─── */
interface ScoreGaugeProps {
  score: number;
}

function ScoreGauge({ score }: ScoreGaugeProps) {
  const color = scoreColor(score);
  const circumference = 2 * Math.PI * 54;
  const strokeDash = (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        className="-rotate-90"
        aria-label={`SEO score: ${score} out of 100`}
        role="img"
      >
        <circle
          cx="70"
          cy="70"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-muted"
        />
        <circle
          cx="70"
          cy="70"
          r="54"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${strokeDash} ${circumference}`}
          className={`transition-all duration-1000 ${
            score >= 75
              ? "stroke-[hsl(142,76%,36%)]"
              : score >= 50
                ? "stroke-[hsl(38,92%,50%)]"
                : "stroke-destructive"
          }`}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className={`text-4xl font-display font-bold ${color}`}>
          {score}
        </span>
        <span className="text-xs text-muted-foreground font-body">/ 100</span>
      </div>
    </div>
  );
}

/* ─── CategoryCard ─── */
interface CategoryCardProps {
  label: string;
  score: number;
  icon: React.ReactNode;
  index: number;
}

function CategoryCard({ label, score, icon, index }: CategoryCardProps) {
  const { text, variant } = scoreLabel(score);
  return (
    <div
      className="card-elevated rounded-xl p-5 flex flex-col gap-3"
      data-ocid={`audit.category_card.${index}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary">{icon}</span>
          <span className="font-display font-semibold text-sm text-foreground">
            {label}
          </span>
        </div>
        <Badge
          variant="outline"
          className={`text-xs font-medium ${badgeClass(variant)}`}
        >
          {text}
        </Badge>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-700 ${scoreTrack(score)}`}
            style={{ width: `${score}%` }}
          />
        </div>
        <span
          className={`text-sm font-bold min-w-[2.5rem] text-right ${scoreColor(score)}`}
        >
          {score}%
        </span>
      </div>
    </div>
  );
}

/* ─── FeatureHighlight ─── */
interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureHighlight({
  icon,
  title,
  description,
  index,
}: FeatureHighlightProps) {
  return (
    <div
      className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-smooth"
      data-ocid={`audit.feature.${index}`}
    >
      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg btn-gradient flex items-center justify-center text-primary-foreground">
        {icon}
      </div>
      <div>
        <p className="font-display font-semibold text-sm text-foreground">
          {title}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ─── constants ─── */
const FEATURE_CHECKS = [
  {
    icon: <FileSearch size={16} />,
    title: "On-Page SEO",
    description: "Headings, content quality, keyword usage, internal linking",
  },
  {
    icon: <Shield size={16} />,
    title: "Technical SEO",
    description: "Crawlability, sitemaps, robots.txt, structured data",
  },
  {
    icon: <Zap size={16} />,
    title: "Page Speed",
    description: "Core Web Vitals, load time, resource optimization",
  },
  {
    icon: <Smartphone size={16} />,
    title: "Mobile Friendliness",
    description: "Responsive design, touch targets, viewport configuration",
  },
  {
    icon: <Tag size={16} />,
    title: "Meta Tags",
    description: "Title tags, meta descriptions, Open Graph, Twitter cards",
  },
  {
    icon: <Link2 size={16} />,
    title: "Backlinks",
    description: "Domain authority, referring domains, link quality",
  },
  {
    icon: <BarChart2 size={16} />,
    title: "Content Analysis",
    description: "Readability, word count, duplicate content detection",
  },
];

const LOADING_MESSAGES = [
  "Crawling your website…",
  "Analyzing on-page elements…",
  "Checking technical SEO…",
  "Evaluating page speed…",
  "Reviewing mobile experience…",
  "Compiling your report…",
];

/* ─── ResultsSection ─── */
function ResultsSection({ report }: { report: AuditReport }) {
  const overall = Number(report.overallScore);

  const categories = [
    {
      label: "On-Page SEO",
      score: Number(report.onPageScore),
      icon: <FileSearch size={16} />,
    },
    {
      label: "Technical SEO",
      score: Number(report.technicalScore),
      icon: <Shield size={16} />,
    },
    {
      label: "Page Speed",
      score: Number(report.pageSpeedScore),
      icon: <Zap size={16} />,
    },
    {
      label: "Mobile Friendliness",
      score: Number(report.mobileFriendlinessScore),
      icon: <Smartphone size={16} />,
    },
    {
      label: "Meta Tags",
      score: Number(report.metaTagsScore),
      icon: <Tag size={16} />,
    },
    {
      label: "Backlinks",
      score: Number(report.backlinkScore),
      icon: <Link2 size={16} />,
    },
    {
      label: "Content Analysis",
      score: Number(report.contentAnalysisScore),
      icon: <BarChart2 size={16} />,
    },
  ];

  const { text: overallText, variant: overallVariant } = scoreLabel(overall);

  return (
    <div className="space-y-8 animate-[fade-in_0.4s_ease-out]">
      {/* Overall Score */}
      <Card
        className="card-elevated overflow-hidden"
        data-ocid="audit.overall_score.card"
      >
        <div className="h-1 btn-gradient w-full" />
        <CardContent className="pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <ScoreGauge score={overall} />
              <Badge
                variant="outline"
                className={`text-sm font-semibold px-3 py-1 ${badgeClass(overallVariant)}`}
              >
                {overallText}
              </Badge>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                SEO Health Report
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                Analyzed:{" "}
                <span className="font-medium text-foreground break-all">
                  {report.url}
                </span>
              </p>
              <p className="text-muted-foreground text-sm">
                Your site scored{" "}
                <span className={`font-bold ${scoreColor(overall)}`}>
                  {overall}/100
                </span>{" "}
                overall.{" "}
                {overall >= 75
                  ? "Great work — a few tweaks can push you higher."
                  : overall >= 50
                    ? "Solid foundation, but there's meaningful room to improve."
                    : "Significant SEO issues detected. Start with the recommendations below."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Scores */}
      <div>
        <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Gauge size={20} className="text-primary" />
          Category Breakdown
        </h3>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          data-ocid="audit.categories.grid"
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.label} {...cat} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Recommendations */}
      {report.recommendations.length > 0 && (
        <div data-ocid="audit.recommendations.section">
          <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Actionable Recommendations
          </h3>
          <div className="space-y-3">
            {report.recommendations.map((rec) => (
              <div
                key={rec}
                className="flex gap-3 p-4 bg-muted/30 rounded-xl border border-border hover:border-primary/20 transition-smooth"
                data-ocid="audit.recommendation.item"
              >
                <CheckCircle
                  size={18}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-foreground leading-relaxed">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── main page ─── */
export default function AuditPage() {
  const { url, setUrl, status, report, error, runAudit, reset } =
    useAuditTool();
  const [urlError, setUrlError] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;
    setMsgIdx(0);
    const interval = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();
    if (!trimmed) {
      setUrlError("Please enter a website URL.");
      return;
    }
    const normalized = trimmed.startsWith("http")
      ? trimmed
      : `https://${trimmed}`;
    if (!/^https?:\/\/.+/.test(normalized)) {
      setUrlError("URL must start with http:// or https://");
      return;
    }
    setUrlError("");
    runAudit();
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (urlError) setUrlError("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-muted/30 border-b border-border py-14 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-[slide-up_0.5s_ease-out]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <Search size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Free SEO Audit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
            <span className="gradient-text">AI-Powered</span> SEO Audit Tool
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Instantly analyze any website's SEO health across 7 key categories.
            Get actionable recommendations in seconds.
          </p>
        </div>
      </section>

      {/* URL Input Form */}
      <section className="bg-card border-b border-border py-8 px-4 shadow-sm">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <Globe
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <Input
                data-ocid="audit.url.input"
                type="text"
                placeholder="https://yourwebsite.com"
                value={url}
                onChange={handleUrlChange}
                disabled={status === "loading"}
                className="pl-9 h-12 text-base border-input focus:border-primary focus:ring-1 focus:ring-primary/30 rounded-lg"
              />
            </div>
            {status === "success" ? (
              <Button
                type="button"
                onClick={reset}
                variant="outline"
                className="h-12 px-6 font-semibold transition-smooth"
                data-ocid="audit.run_another.button"
              >
                <RefreshCw size={16} className="mr-2" />
                Run Another
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={status === "loading"}
                className="h-12 px-8 btn-gradient font-semibold rounded-lg shadow-md hover:shadow-lg transition-smooth"
                data-ocid="audit.analyze.submit_button"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Analyzing…
                  </>
                ) : (
                  <>
                    <Search size={16} className="mr-2" />
                    Analyze Now
                  </>
                )}
              </Button>
            )}
          </form>
          {urlError && (
            <p
              className="mt-2 text-sm text-destructive flex items-center gap-1.5"
              data-ocid="audit.url.field_error"
            >
              <AlertCircle size={14} />
              {urlError}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Error State */}
          {status === "error" && (
            <Card
              className="border-destructive/50 bg-destructive/5 mb-8"
              data-ocid="audit.error_state"
            >
              <CardContent className="flex items-start gap-4 pt-6">
                <AlertCircle
                  size={20}
                  className="text-destructive flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Audit Failed
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {error ?? "Something went wrong. Please try again."}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={reset}
                  className="ml-auto flex-shrink-0"
                  data-ocid="audit.error.reset_button"
                >
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Loading State */}
          {status === "loading" && (
            <div
              className="flex flex-col items-center gap-6 py-16"
              data-ocid="audit.loading_state"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full btn-gradient opacity-20 animate-ping" />
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full btn-gradient">
                  <Search size={28} className="text-primary-foreground" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="font-display font-semibold text-lg text-foreground">
                  {LOADING_MESSAGES[msgIdx]}
                </p>
                <p className="text-sm text-muted-foreground">
                  This usually takes 10–20 seconds
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Progress className="h-2 animate-pulse" />
              </div>
            </div>
          )}

          {/* Results */}
          {status === "success" && report && <ResultsSection report={report} />}

          {/* Idle / Empty State */}
          {status === "idle" && (
            <div
              className="animate-[fade-in_0.4s_ease-out]"
              data-ocid="audit.empty_state"
            >
              <Card className="card-elevated mb-8">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-display text-foreground flex items-center gap-2">
                    <BarChart2 size={18} className="text-primary" />
                    What We Analyze
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Our AI engine checks 7 critical SEO categories and surfaces
                    the issues that matter most.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FEATURE_CHECKS.map((feat, i) => (
                      <FeatureHighlight
                        key={feat.title}
                        {...feat}
                        index={i + 1}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  {
                    icon: <Zap size={18} />,
                    label: "Instant Results",
                    sub: "Under 20 seconds",
                  },
                  {
                    icon: <Shield size={18} />,
                    label: "100% Free",
                    sub: "No credit card needed",
                  },
                  {
                    icon: <TrendingUp size={18} />,
                    label: "Actionable Tips",
                    sub: "Clear next steps",
                  },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30 border border-border"
                  >
                    <span className="text-primary">{t.icon}</span>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">
                        {t.label}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
