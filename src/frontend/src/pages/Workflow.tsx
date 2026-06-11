import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronDown,
  FileText,
  Link,
  PenTool,
  Search,
  Settings,
  TrendingUp,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────

interface Task {
  id: string;
  icon: string;
  name: string;
  shortDesc: string;
  tooltip: string;
  detail: string;
}

interface Phase {
  id: string;
  number: number;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  borderColor: string;
  tasks: Task[];
  optional?: boolean;
}

// ─── Phase Data ──────────────────────────────────────────────────────────────

const PHASES: Phase[] = [
  {
    id: "discovery",
    number: 1,
    Icon: Search,
    title: "Discovery & AI Audit",
    subtitle: "Establish baselines and uncover hidden opportunities",
    color: "oklch(0.52 0.22 253)",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800/40",
    tasks: [
      {
        id: "crawl",
        icon: "🕷️",
        name: "Website Crawl",
        shortDesc: "Identify structure, broken links & indexation issues",
        tooltip:
          "A full site crawl maps every URL on your domain — finding orphaned pages, broken links, duplicate content, and crawl traps that prevent Google from indexing your best content.",
        detail:
          "We crawl your entire website using enterprise-grade tools to map every URL, detect broken links (404s), find redirect chains, identify duplicate content, and pinpoint pages blocked from indexation. This creates the foundation that every other optimisation step builds upon. Without this baseline, you're optimising blind.",
      },
      {
        id: "keywords",
        icon: "🔑",
        name: "Keyword Research",
        shortDesc: "Identify high-value, low-competition search terms",
        tooltip:
          "Keyword research reveals exactly what your target customers type into Google — and which terms you can realistically rank for within your budget and timeframe.",
        detail:
          "Using a combination of search volume data, competition analysis, and AI-powered intent mapping, we identify the keywords that will drive qualified traffic. We segment keywords by funnel stage (awareness, consideration, purchase) and prioritise by ROI potential — ensuring every content and optimisation decision is backed by real data.",
      },
      {
        id: "competitors",
        icon: "🏁",
        name: "Competitor Analysis",
        shortDesc: "Map competitor rankings, backlinks, and content gaps",
        tooltip:
          "Competitor analysis reveals the exact keywords, pages, and backlinks driving your competitors' traffic — so you know precisely where to attack to take market share.",
        detail:
          "We reverse-engineer the top 5 competitors in your niche, identifying every keyword they rank for that you don't, every backlink source you could replicate, and every content gap you could fill. This competitive intelligence turns months of guesswork into a clear, prioritised action plan.",
      },
      {
        id: "ai-audit",
        icon: "🤖",
        name: "AI Audit Report",
        shortDesc: "Analyse 50+ SEO signals and generate action list",
        tooltip:
          "Our AI audit cross-references 50+ SEO signals simultaneously — from title tag quality to Core Web Vitals — and outputs a prioritised list of fixes ranked by impact.",
        detail:
          "Our proprietary AI engine analyses your site across 50+ ranking factors simultaneously — technical health, content quality, backlink profile, user experience signals, and more. It then generates a prioritised roadmap where the highest-impact, lowest-effort fixes appear first, saving weeks of manual analysis time.",
      },
      {
        id: "baseline",
        icon: "📊",
        name: "Baseline Metrics",
        shortDesc: "Record current rankings, traffic, and conversions",
        tooltip:
          "Setting a clear baseline is essential — without it, you can't prove ROI. We record your starting point so every improvement is measurable and attributable.",
        detail:
          "We document your current organic rankings across all target keywords, monthly organic traffic volumes, conversion rates, and revenue attributed to organic search. This snapshot becomes your benchmark — every monthly report shows progress against this starting point, making ROI crystal clear.",
      },
    ],
  },
  {
    id: "technical",
    number: 2,
    Icon: Settings,
    title: "Technical SEO Foundation",
    subtitle: "Fix the under-the-hood issues Google cares about most",
    color: "oklch(0.65 0.16 55)",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800/40",
    tasks: [
      {
        id: "speed",
        icon: "⚡",
        name: "Site Speed Optimization",
        shortDesc: "Compress images, minify code, enable caching",
        tooltip:
          "Page speed is a direct Google ranking factor — slow sites rank lower and lose 40% of visitors before the page even loads. Speed optimisation often yields the fastest ranking gains.",
        detail:
          "We optimise your site's loading performance through image compression and next-gen format conversion (WebP/AVIF), CSS/JS minification and bundling, server-side caching configuration, CDN setup, and lazy loading implementation. Target: Core Web Vitals in the 'Good' range and a Google PageSpeed score above 90.",
      },
      {
        id: "mobile",
        icon: "📱",
        name: "Mobile Responsiveness",
        shortDesc: "Ensure flawless experience on all devices",
        tooltip:
          "Google uses mobile-first indexing — meaning it crawls and ranks your mobile site, not your desktop site. A poor mobile experience directly harms your rankings.",
        detail:
          "We audit your site on 20+ device and screen size combinations, fixing layout breakages, touch target sizes, font readability, and interactive element spacing. Google now uses mobile-first indexing for all sites, so mobile experience directly determines your desktop rankings too.",
      },
      {
        id: "sitemap",
        icon: "🗺️",
        name: "XML Sitemap & Robots.txt",
        shortDesc: "Guide search engines to your most important pages",
        tooltip:
          "A clean sitemap tells Google exactly which pages to index and in what priority order. An improperly configured robots.txt can accidentally block your entire site from Google.",
        detail:
          "We create and submit a comprehensive XML sitemap covering all canonical pages, set accurate priority and change frequency signals, and configure robots.txt to allow crawling of all valuable content while blocking low-value pages (admin areas, duplicate parameter URLs, staging environments) that dilute your crawl budget.",
      },
      {
        id: "https",
        icon: "🔒",
        name: "HTTPS & Security",
        shortDesc: "Enforce SSL and fix mixed content warnings",
        tooltip:
          "HTTPS is a confirmed Google ranking signal. More importantly, browsers show scary 'Not Secure' warnings on HTTP sites, which destroys visitor trust and increases bounce rates.",
        detail:
          "We enforce HTTPS sitewide with HSTS headers, fix all mixed content warnings where HTTP assets load on HTTPS pages, update internal links and canonical tags to HTTPS, and validate SSL certificate configuration. Security is both a ranking signal and a critical trust factor for converting visitors into customers.",
      },
      {
        id: "cwv",
        icon: "🎯",
        name: "Core Web Vitals",
        shortDesc: "Optimise LCP, FID, and CLS scores",
        tooltip:
          "Core Web Vitals are Google's official user-experience metrics that directly impact rankings. Poor scores push you down; excellent scores give you a measurable ranking advantage.",
        detail:
          "We optimise all three Core Web Vitals: LCP (Largest Contentful Paint — how fast the main content loads, target <2.5s), FID/INP (interaction responsiveness, target <200ms), and CLS (Cumulative Layout Shift — visual stability, target <0.1). These metrics are measured from real user data and directly influence search rankings.",
      },
      {
        id: "crawl-errors",
        icon: "🔧",
        name: "Crawl Error Fixes",
        shortDesc: "Resolve 404s, redirect chains, and duplicate URLs",
        tooltip:
          "Crawl errors waste your crawl budget — the number of pages Google will crawl per day. Every 404 and redirect chain means Google has less time to discover and index your valuable content.",
        detail:
          "We audit and fix all crawl errors: 404 pages get redirected to relevant alternatives, redirect chains are collapsed to single hops, soft 404s are corrected or removed, duplicate URLs from URL parameters are canonicalized, and pagination errors are resolved. Clean crawlability means Google indexes more of your site, faster.",
      },
    ],
  },
  {
    id: "onpage",
    number: 3,
    Icon: FileText,
    title: "On-Page Optimisation",
    subtitle: "Optimise every element search engines and users see",
    color: "oklch(0.55 0.15 145)",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800/40",
    tasks: [
      {
        id: "titles",
        icon: "📝",
        name: "Title Tag Optimization",
        shortDesc: "Keyword-rich, compelling titles under 60 characters",
        tooltip:
          "The title tag is the most important on-page ranking factor. It's what Google shows in search results and what users click on — poor titles are the single biggest missed opportunity most sites have.",
        detail:
          "We rewrite every page title following a proven formula: Primary Keyword + Compelling Benefit + Brand Name, under 60 characters. We A/B test title variations using click-through rate data from Google Search Console, iteratively improving CTR — because a 1% CTR improvement across 100 keywords compounds into massive traffic gains.",
      },
      {
        id: "meta",
        icon: "💬",
        name: "Meta Descriptions",
        shortDesc: "Click-worthy descriptions under 160 characters",
        tooltip:
          "Meta descriptions don't directly affect rankings, but they dramatically affect click-through rate — the percentage of searchers who click your result. Higher CTR = more traffic from the same ranking position.",
        detail:
          "We craft persuasive meta descriptions that include the target keyword naturally, a clear value proposition, and a compelling call-to-action — all within 160 characters. Each description is written to answer 'why should I click this result?' We track CTR improvements in Google Search Console and iterate on underperforming pages.",
      },
      {
        id: "headers",
        icon: "🏷️",
        name: "Header Tag Structure",
        shortDesc: "Organise H1-H6 headings with target keywords",
        tooltip:
          "Header tags signal the hierarchy and topics of your content to Google. One clear H1 with your primary keyword, followed by H2s with secondary keywords, dramatically improves content relevance signals.",
        detail:
          "We audit and restructure heading hierarchies across all pages: one keyword-rich H1 per page, H2s covering major subtopics with secondary keywords, H3s for supporting details. This hierarchical structure helps Google understand your content's depth and relevance, and makes pages more scannable for users — improving time on page.",
      },
      {
        id: "schema",
        icon: "🧩",
        name: "Schema Markup",
        shortDesc: "Add structured data for rich snippet eligibility",
        tooltip:
          "Schema markup is code that tells Google exactly what your content means — enabling rich results like star ratings, FAQs, prices, and event dates that dramatically increase click-through rates.",
        detail:
          "We implement relevant schema types: FAQ schema for Q&A content (drives featured snippets), Review/Rating schema for social proof, Product schema for e-commerce, Article schema for blog posts, LocalBusiness schema for local SEO, and BreadcrumbList for site structure. Rich snippets can increase CTR by 20-30% with no ranking change required.",
      },
      {
        id: "internal-links",
        icon: "🔗",
        name: "Internal Linking",
        shortDesc: "Build strategic link network for authority flow",
        tooltip:
          "Internal links distribute PageRank (link authority) across your site and signal to Google which pages are most important. A strategic internal linking architecture can move pages 5-10 positions overnight.",
        detail:
          "We build a strategic internal linking architecture: pillar pages link to cluster content, cluster content links back to pillars, and high-authority pages link to pages we want to rank. We identify pages with high authority but low traffic (link-rich pages) and use them to boost pages with high commercial intent. This 'authority sculpting' maximises your existing domain strength.",
      },
      {
        id: "images",
        icon: "🖼️",
        name: "Image Optimisation",
        shortDesc: "Add alt tags and compress for faster load times",
        tooltip:
          "Descriptive alt text helps Google understand image content (contributing to rankings) while also making your site accessible to screen readers — hitting both SEO and legal compliance in one step.",
        detail:
          "We add descriptive, keyword-informed alt text to every image, compress all images to WebP/AVIF format (typically 60-80% smaller than JPEG), implement lazy loading for images below the fold, add schema markup for key images, and create an image sitemap for important visuals. Image optimisation typically reduces page weight by 40-60%.",
      },
    ],
  },
  {
    id: "content",
    number: 4,
    Icon: PenTool,
    title: "Content Strategy & Creation",
    subtitle: "Build topical authority with high-value, targeted content",
    color: "oklch(0.52 0.22 295)",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800/40",
    tasks: [
      {
        id: "pillar",
        icon: "🏛️",
        name: "Pillar Page Creation",
        shortDesc: "Build 3,000+ word comprehensive topic hubs",
        tooltip:
          "Pillar pages establish topical authority — Google's way of determining if your site is a genuine expert on a subject. One comprehensive pillar page can rank for hundreds of related keywords simultaneously.",
        detail:
          "We create comprehensive pillar pages of 3,000-5,000+ words that exhaustively cover a broad topic (e.g., 'The Complete Guide to SEO'). These pages link to all cluster content on subtopics, establishing you as the go-to authority. Pillar pages typically rank for 100-300 keyword variations and become high-authority link targets for your entire cluster.",
      },
      {
        id: "blog",
        icon: "✍️",
        name: "Blog Posts",
        shortDesc: "Weekly keyword-targeted articles for long-tail traffic",
        tooltip:
          "Regular, keyword-targeted blog posts are the most consistent way to capture long-tail search traffic — the 70% of searches that are highly specific and convert at 3-5x higher rates than generic terms.",
        detail:
          "We publish weekly blog posts targeting specific long-tail keywords with 1,000-2,000 word articles optimised for a primary keyword and 3-5 related secondary keywords. Each post includes: keyword-optimised title and headings, internal links to pillar pages, a clear CTA, and structured data markup. Consistent publishing signals freshness to Google and compounds traffic month over month.",
      },
      {
        id: "faq",
        icon: "❓",
        name: "FAQ Pages",
        shortDesc: "Answer top 20 questions to earn featured snippets",
        tooltip:
          "FAQ pages targeting 'People Also Ask' queries earn featured snippet positions — the #0 result above organic listings that captures clicks even when you don't rank #1.",
        detail:
          "We research and answer the top 20-30 questions your audience asks about your industry using Google's 'People Also Ask' data, Answer The Public, and competitor analysis. Each answer is formatted for featured snippet capture: 40-50 word direct answers, supplemented by detailed explanations, with FAQ schema markup applied. Featured snippets can drive significant traffic without a #1 ranking.",
      },
      {
        id: "refresh",
        icon: "🔄",
        name: "Content Refreshes",
        shortDesc: "Update old pages with new data and keywords",
        tooltip:
          "Refreshing content that has dropped in rankings is often 10x more efficient than creating new content. Google actively rewards updated content with 'freshness' boosts, especially for time-sensitive topics.",
        detail:
          "We audit all existing content with Google Search Console data to identify pages that ranked well but have declined. For each, we update statistics and data, expand word count, add new sections targeting related queries, refresh internal links, and update the publish date. Content refreshes often yield position improvements within 2-4 weeks — much faster than new content.",
      },
      {
        id: "video",
        icon: "🎬",
        name: "Video SEO",
        shortDesc: "Optimise YouTube titles, descriptions, and transcripts",
        tooltip:
          "Video results appear in 26% of Google searches — optimised YouTube content can rank simultaneously in YouTube search AND Google search, effectively doubling your visibility for the same piece of content.",
        detail:
          "We optimise your YouTube channel and videos for both YouTube search (2nd largest search engine) and Google video results: keyword-rich titles following YouTube SEO formulas, optimised descriptions with timestamps and links, custom thumbnails designed for high CTR, full transcripts for keyword coverage, relevant tags and category selection, and end screen/card CTAs.",
      },
    ],
  },
  {
    id: "linkbuilding",
    number: 5,
    Icon: Link,
    title: "Link Building & Authority",
    subtitle: "Earn authoritative backlinks that move the needle",
    color: "oklch(0.55 0.2 25)",
    bgColor: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800/40",
    tasks: [
      {
        id: "guest",
        icon: "✉️",
        name: "Guest Posting",
        shortDesc: "Write for industry publications with backlinks",
        tooltip:
          "Guest posts on authoritative industry sites earn editorial backlinks — the highest-quality type of link. One link from a DA 70+ site can be worth more than 100 links from low-quality directories.",
        detail:
          "We identify and pitch high-authority publications in your industry (Domain Authority 40+), write expert-level articles on topics relevant to their audience, and include natural backlinks to your most valuable pages. We target sites that your competitors are also linked from, ensuring each guest post builds relevant authority. All guest posts are genuinely valuable articles — no spammy link farms.",
      },
      {
        id: "broken-link",
        icon: "🔨",
        name: "Broken Link Building",
        shortDesc: "Replace broken links with your superior content",
        tooltip:
          "Broken link building converts other sites' problems into your opportunity — webmasters are happy to replace a broken link with your working content, giving you a high-quality editorial backlink with minimal outreach friction.",
        detail:
          "Using tools like Ahrefs and Check My Links, we identify broken links on high-authority sites in your niche, then create content specifically designed to replace those broken resources. We reach out to webmasters with a simple value proposition: 'Your link to X is broken — here's our updated resource on the same topic.' Conversion rates of 10-20% make this highly efficient.",
      },
      {
        id: "pr",
        icon: "📰",
        name: "Digital PR",
        shortDesc: "Get featured in news articles and industry roundups",
        tooltip:
          "Digital PR earns links from major news sites and publications — links that are nearly impossible to acquire through traditional link building. A single Forbes or BBC link can move rankings faster than 50 directory submissions.",
        detail:
          "We create linkable assets (original research, data studies, industry surveys, infographics) and pitch them to journalists and industry publications. We also monitor HARO (Help a Reporter Out) for expert quote opportunities and create 'newsjacking' content around trending industry stories. A single successful digital PR campaign can earn 20-50+ high-authority links from major publications.",
      },
      {
        id: "directories",
        icon: "📋",
        name: "Directory Submissions",
        shortDesc: "Build citation consistency for local and niche SEO",
        tooltip:
          "Niche-relevant directory listings build citation consistency — especially important for local SEO where consistent NAP (Name, Address, Phone) data across directories directly impacts Google Maps rankings.",
        detail:
          "We submit your business to relevant industry directories, regional business listings, and niche-specific platforms. For local SEO, we ensure NAP consistency across 50+ directories including Google Business Profile, Yelp, Bing Places, Apple Maps, and industry-specific platforms. Consistent citations are one of the top local ranking factors and also provide a steady stream of referral traffic.",
      },
      {
        id: "replication",
        icon: "🎯",
        name: "Competitor Backlink Replication",
        shortDesc: "Target sites already linking to your competitors",
        tooltip:
          "If a site linked to your competitor, they're pre-qualified — they're in your industry and they link out. Getting a link from them is far easier than cold prospecting, with success rates 3-5x higher.",
        detail:
          "We export the complete backlink profiles of your top 3-5 competitors and identify the overlapping high-authority domains linking to multiple competitors (indicating strong link-building targets). We then systematically reach out with personalised pitches, often citing our client's superior content or unique data as the reason to link. Competitor replication typically yields the highest ROI of any link-building tactic.",
      },
    ],
  },
  {
    id: "amplification",
    number: 6,
    Icon: TrendingUp,
    title: "Paid & Social Amplification",
    subtitle: "Accelerate growth with targeted paid and social campaigns",
    color: "oklch(0.72 0.18 85)",
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800/40",
    optional: true,
    tasks: [
      {
        id: "ppc",
        icon: "💰",
        name: "Google Ads (PPC)",
        shortDesc: "Targeted paid search for instant visibility",
        tooltip:
          "PPC provides immediate visibility while SEO builds momentum — running both simultaneously means you capture traffic today while investing in organic traffic that will be essentially free tomorrow.",
        detail:
          "We build and manage Google Search campaigns targeting your highest-value keywords, crafting ad copy with strong quality scores to reduce cost-per-click. PPC data also informs SEO strategy — keywords with high conversion rates in PPC become the highest-priority targets for organic ranking. We use PPC budgets strategically to fill gaps while SEO builds, typically reducing paid dependency by 40-60% within 6 months.",
      },
      {
        id: "social-ads",
        icon: "📱",
        name: "Social Media Ads",
        shortDesc: "Amplify top content on Facebook and LinkedIn",
        tooltip:
          "Promoting your best content with paid social drives traffic signals that Google can measure — time on page, low bounce rates, and return visits all send positive quality signals that support organic rankings.",
        detail:
          "We identify your highest-performing organic content and amplify it with targeted paid social campaigns on Facebook, Instagram, and LinkedIn. This drives additional traffic signals (engagement, time-on-page, social shares) that support SEO rankings, builds brand awareness in your target audience, and often generates backlinks as people discover and share your content organically from social channels.",
      },
      {
        id: "retargeting",
        icon: "🎯",
        name: "Retargeting Campaigns",
        shortDesc: "Re-engage visitors who didn't convert first time",
        tooltip:
          "Most visitors don't convert on their first visit — retargeting re-engages them with relevant ads after they leave, typically converting at 3-5x the rate of cold traffic at a fraction of the cost.",
        detail:
          "We set up pixel-based retargeting across Google Display Network and Facebook/Instagram, creating audience segments based on behaviour (visited pricing page, read blog post, abandoned contact form) and serving them tailored messages that address specific objections or move them to the next funnel stage. Retargeting campaigns typically deliver 3-5x ROAS and measurably increase the overall conversion rate of your SEO traffic.",
      },
      {
        id: "influencer",
        icon: "⭐",
        name: "Influencer Outreach",
        shortDesc: "Partner with niche influencers for content promotion",
        tooltip:
          "Niche influencer partnerships earn natural backlinks and social proof from trusted voices — their audience's engagement signals tell Google your content is genuinely valuable, supporting long-term rankings.",
        detail:
          "We identify micro and mid-tier influencers in your niche (10K-500K followers) with highly engaged audiences and genuine authority. We propose value-based partnerships (product access, revenue share, exclusive content) that earn natural content mentions and backlinks. Influencer-driven content typically generates 5-15 high-authority backlinks per campaign plus ongoing referral traffic.",
      },
    ],
  },
  {
    id: "reporting",
    number: 7,
    Icon: BarChart3,
    title: "Reporting & Optimisation",
    subtitle: "Track, measure, and continuously improve performance",
    color: "oklch(0.55 0.13 195)",
    bgColor: "bg-teal-50 dark:bg-teal-950/20",
    borderColor: "border-teal-200 dark:border-teal-800/40",
    tasks: [
      {
        id: "ranking",
        icon: "📈",
        name: "Monthly Ranking Reports",
        shortDesc: "Track keyword positions across 100+ keywords",
        tooltip:
          "Monthly ranking reports translate SEO activity into business metrics — showing which keywords moved, how traffic changed, and what revenue can be attributed to organic search improvements.",
        detail:
          "We track ranking positions for 100+ target keywords weekly and deliver comprehensive monthly reports showing: keyword position changes (with trend graphs), estimated traffic impact, pages driving the most growth, and a priority list for the next month's optimisations. Reports are designed for both technical teams and business stakeholders — with executive summaries and detailed data views.",
      },
      {
        id: "analytics",
        icon: "📉",
        name: "Traffic Analytics",
        shortDesc: "Analyse organic traffic trends and conversions",
        tooltip:
          "Traffic analytics reveal the 'why' behind ranking changes — identifying which pages are growing, which are declining, what user behaviour patterns signal, and where conversion opportunities are being missed.",
        detail:
          "We provide deep-dive analysis of Google Analytics 4 and Google Search Console data: organic traffic by landing page, user journey analysis, conversion funnel drop-off points, content performance by traffic and engagement, and channel attribution modelling. This analysis drives content and CRO decisions — ensuring every optimisation effort is directed at the highest-impact opportunities.",
      },
      {
        id: "cro",
        icon: "💡",
        name: "Conversion Rate Optimisation",
        shortDesc: "Test CTAs, layouts, and forms to convert more visitors",
        tooltip:
          "CRO turns the traffic your SEO earns into revenue — most sites convert only 1-3% of visitors, meaning 97-99% of your SEO investment walks away. Even a 0.5% CRO improvement can double revenue from existing traffic.",
        detail:
          "We use heatmaps (Hotjar), A/B testing (Google Optimize), and user session recordings to identify conversion blockers on your highest-traffic organic landing pages. We test: headline and CTA copy variations, form length and field sequence, social proof placement, page layout and visual hierarchy, and trust signal presentation. CRO is the highest-ROI activity once significant organic traffic exists.",
      },
      {
        id: "algorithm",
        icon: "🔔",
        name: "Algorithm Update Response",
        shortDesc: "Monitor Google updates and adjust strategy rapidly",
        tooltip:
          "Google makes 500-700 algorithm changes per year. Monitoring updates and adjusting quickly separates sites that recover within weeks from those that lose traffic for months.",
        detail:
          "We continuously monitor Google algorithm updates, SEO industry publications, and your own ranking data to detect any impact within 48 hours of a major update. When an update causes movement (positive or negative), we analyse which pages were affected, hypothesise the reason based on the update's known focus, and implement strategic adjustments within 2 weeks — protecting your rankings and capitalising on competitors who are slower to adapt.",
      },
      {
        id: "strategy-review",
        icon: "🗓️",
        name: "Quarterly Strategy Review",
        shortDesc: "Full strategy refresh aligned with business goals",
        tooltip:
          "SEO strategy must evolve with Google's algorithm, your market's competitive landscape, and your business's changing priorities. Quarterly reviews ensure you're always working on the highest-ROI opportunities.",
        detail:
          "Every quarter we conduct a comprehensive strategy review: re-evaluating keyword priorities based on ranking progress and business impact, identifying new content opportunities from emerging search trends, auditing the link building pipeline, reviewing competitor movements, and aligning the next quarter's roadmap with business objectives. This ensures your SEO strategy stays ahead of algorithm changes and competitive shifts rather than reacting to them.",
      },
    ],
  },
];

// ─── Tooltip Component ────────────────────────────────────────────────────────

function TaskTooltip({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-72 pointer-events-none"
    >
      <div className="bg-foreground text-background text-xs leading-relaxed rounded-lg px-3 py-2.5 shadow-elevated">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-foreground" />
      </div>
    </motion.div>
  );
}

// ─── Task Card ────────────────────────────────────────────────────────────────

function TaskCard({
  task,
  index,
  onOpen,
}: {
  task: Task;
  index: number;
  onOpen: (task: Task) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(task)}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer card-elevated rounded-xl p-4 group"
      data-ocid={`workflow.task.${task.id}`}
    >
      <AnimatePresence>
        {hovered && <TaskTooltip text={task.tooltip} />}
      </AnimatePresence>
      <div className="flex items-start gap-3">
        <span
          className="text-2xl leading-none mt-0.5 flex-shrink-0"
          aria-hidden
        >
          {task.icon}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-sm text-foreground font-display leading-tight">
            {task.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
            {task.shortDesc}
          </p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <span>→</span>
      </div>
    </motion.div>
  );
}

// ─── Phase Connector ──────────────────────────────────────────────────────────

function PhaseConnector({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <motion.div
        className="w-0.5 h-8 rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${color}, transparent)`,
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <motion.div
        className="w-3 h-3 rounded-full border-2 border-border bg-background"
        style={{ borderColor: color }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      />
      <motion.div
        className="w-0.5 h-8 rounded-full"
        style={{
          background: `linear-gradient(to bottom, transparent, ${color})`,
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      />
    </div>
  );
}

// ─── Phase Card ────────────────────────────────────────────────────────────────

function PhaseCard({
  phase,
  index,
  expanded,
  onToggle,
  onTaskOpen,
}: {
  phase: Phase;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  onTaskOpen: (task: Task) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`rounded-2xl border ${phase.borderColor} ${phase.bgColor} overflow-hidden`}
      data-ocid={`workflow.phase.${phase.id}`}
    >
      {/* Phase Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-muted/20 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-expanded={expanded}
        data-ocid={`workflow.phase.${phase.id}.toggle`}
      >
        {/* Phase Number Badge */}
        <motion.div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-primary-foreground shadow-sm"
          style={{ background: phase.color }}
          animate={{
            boxShadow: expanded
              ? `0 0 0 4px ${phase.color}25`
              : "0 0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          {phase.number}
        </motion.div>

        {/* Phase Icon */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: `${phase.color}18` }}
        >
          <phase.Icon className="w-4.5 h-4.5" style={{ color: phase.color }} />
        </div>

        {/* Phase Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-bold text-base text-foreground leading-tight">
              {phase.title}
            </span>
            {phase.optional && (
              <Badge variant="secondary" className="text-xs">
                Optional
              </Badge>
            )}
            <Badge
              variant="outline"
              className="text-xs ml-auto mr-2 hidden sm:flex"
              style={{ borderColor: `${phase.color}50`, color: phase.color }}
            >
              {phase.tasks.length} tasks
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {phase.subtitle}
          </p>
        </div>

        {/* Expand/Collapse */}
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex-shrink-0 text-muted-foreground"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      {/* Phase Tasks */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: "easeInOut" },
              opacity: { duration: 0.25 },
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-5 pb-5 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {phase.tasks.map((task, i) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    index={i}
                    onOpen={onTaskOpen}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Task Detail Modal ────────────────────────────────────────────────────────

function TaskModal({
  task,
  onClose,
}: {
  task: Task | null;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!task) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [task, onClose]);

  return (
    <AnimatePresence>
      {task && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          data-ocid="workflow.task_modal"
        >
          <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 bg-card border border-border rounded-2xl shadow-elevated w-full max-w-lg"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            data-ocid="workflow.task_modal.dialog"
          >
            {/* Modal Header */}
            <div className="flex items-start gap-3 p-6 pb-4">
              <span
                className="text-3xl leading-none flex-shrink-0 mt-0.5"
                aria-hidden
              >
                {task.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                  {task.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {task.shortDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex-shrink-0 p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Close"
                data-ocid="workflow.task_modal.close_button"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Divider */}
            <div className="section-divider mx-6" />

            {/* Modal Body */}
            <div className="p-6 pt-4">
              <p className="text-sm text-foreground leading-relaxed">
                {task.detail}
              </p>
              <div className="mt-5 flex gap-3">
                <Button
                  className="btn-gradient flex-1 font-semibold"
                  onClick={onClose}
                  data-ocid="workflow.task_modal.confirm_button"
                >
                  Got it
                </Button>
                <Button
                  variant="outline"
                  onClick={onClose}
                  data-ocid="workflow.task_modal.cancel_button"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function WorkflowPage() {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(PHASES.map((p) => p.id)),
  );
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const togglePhase = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpanded(new Set(PHASES.map((p) => p.id)));
  const collapseAll = () => setExpanded(new Set());

  const expandedCount = expanded.size;
  const totalTasks = PHASES.reduce((sum, p) => sum + p.tasks.length, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-card border-b overflow-hidden py-16 md:py-24">
        {/* Background decoration */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.52 0.22 253), transparent)",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-4 px-4 py-1.5 text-sm font-medium"
              style={{
                borderColor: "oklch(0.52 0.22 253 / 0.4)",
                color: "oklch(0.52 0.22 253)",
              }}
            >
              7 Phases · {totalTasks} Tasks
            </Badge>
          </motion.div>

          {/* Staggered title words */}
          <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground tracking-tight leading-[1.1] mb-4">
            {["Our", "SEO", "Workflow"].map((word, i) => (
              <motion.span
                key={word}
                className={word === "SEO" ? "gradient-text" : ""}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                style={{
                  display: "inline-block",
                  marginRight: word !== "Workflow" ? "0.3em" : 0,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Every campaign follows this proven, step-by-step process — from
            initial discovery to continuous improvement. Click any phase to
            explore the tasks, hover a task card to preview it, or click to read
            the full details.
          </motion.p>

          {/* Progress indicator */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-1">
                {PHASES.map((p) => (
                  <motion.div
                    key={p.id}
                    className="h-1.5 w-6 rounded-full"
                    style={{
                      background: expanded.has(p.id)
                        ? p.color
                        : "oklch(0.88 0 0)",
                    }}
                    animate={{
                      background: expanded.has(p.id)
                        ? p.color
                        : "oklch(0.88 0 0)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <span>
                {expandedCount}/{PHASES.length} phases open
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-ocid="workflow.expand_all_button"
              >
                Expand all
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-ocid="workflow.collapse_all_button"
              >
                Collapse all
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Phases ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16" data-ocid="workflow.phases_section">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="space-y-0">
            {PHASES.map((phase, idx) => (
              <div key={phase.id}>
                <PhaseCard
                  phase={phase}
                  index={idx}
                  expanded={expanded.has(phase.id)}
                  onToggle={() => togglePhase(phase.id)}
                  onTaskOpen={setActiveTask}
                />
                {idx < PHASES.length - 1 && (
                  <PhaseConnector color={phase.color} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────── */}
      <section className="bg-muted/30 border-t py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Ready to start your{" "}
              <span className="gradient-text">SEO journey?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              We'll walk through every step of this workflow with you — starting
              with a free AI-powered audit of your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/audit">
                <Button
                  size="lg"
                  className="btn-gradient font-semibold px-8 shadow-sm hover:shadow-elevated transition-smooth"
                  data-ocid="workflow.cta.audit_button"
                >
                  Get Free SEO Audit
                </Button>
              </a>
              <a href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8"
                  data-ocid="workflow.cta.services_button"
                >
                  View Our Services
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Task Detail Modal ─────────────────────────────────────── */}
      <TaskModal task={activeTask} onClose={() => setActiveTask(null)} />
    </div>
  );
}
