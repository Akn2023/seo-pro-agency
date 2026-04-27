import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  ChevronRight,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  MessageSquare,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { value: "10,000+", label: "Clients Worldwide", icon: Users },
  { value: "15+", label: "Years of Experience", icon: Clock },
  { value: "400%", label: "Avg Traffic Growth", icon: TrendingUp },
  { value: "4.9/5", label: "Client Rating", icon: Star },
  { value: "50+", label: "Expert Team Members", icon: MessageSquare },
  { value: "500+", label: "Successful Campaigns", icon: Award },
];

const VALUES = [
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Every strategy we implement is tied to measurable outcomes. We track, analyze, and optimize relentlessly until we exceed your goals.",
  },
  {
    icon: Shield,
    title: "White-Hat Only",
    desc: "We exclusively use Google-approved, ethical SEO techniques. No shortcuts that risk your rankings — just sustainable growth you can count on.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-First",
    desc: "From AI-powered keyword research to predictive ranking models, we stay ahead of algorithm changes so your rankings stay ahead of competitors.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    desc: "Your success is our success. We function as an extension of your team, not just a vendor — responsive, transparent, and always in your corner.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    desc: "Having served clients across 40+ countries and industries, we understand the nuances of international SEO and local market dynamics.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    desc: "We move fast without cutting corners. Our proven process delivers your first results within 30 days, not months of waiting.",
  },
];

const TEAM = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    expertise: "15+ yrs in SEO Strategy",
    initial: "A",
  },
  {
    name: "Priya Sharma",
    role: "Head of Technical SEO",
    expertise: "Core Web Vitals Expert",
    initial: "P",
  },
  {
    name: "James Liu",
    role: "Content & Link Director",
    expertise: "Authority Building Specialist",
    initial: "J",
  },
  {
    name: "Sofia Reyes",
    role: "AI & Data Science Lead",
    expertise: "Machine Learning in SEO",
    initial: "S",
  },
];

const MILESTONES = [
  {
    year: "2009",
    event: "Founded in New York with a 3-person team focused on organic growth",
  },
  {
    year: "2013",
    event:
      "Reached 500 clients, expanded to technical SEO and content strategy",
  },
  {
    year: "2017",
    event:
      "Launched proprietary AI-driven keyword research and rank prediction platform",
  },
  {
    year: "2020",
    event:
      "Achieved Google Partner status and expanded to 50+ team members globally",
  },
  {
    year: "2023",
    event:
      "Surpassed 10,000 clients across 40+ countries, launched AI SEO service suite",
  },
  {
    year: "2025",
    event:
      "Pioneering next-gen SEO with large language models and predictive analytics",
  },
];

export default function About() {
  return (
    <div data-ocid="about.page">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-accent/80 text-primary-foreground py-20 md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, white 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-accent/20 blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-5 bg-white/20 text-primary-foreground border-white/30 text-sm px-4 py-1.5">
              🌍 15+ Years of Digital Excellence
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-5">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                SEO Pro Agency
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/85 max-w-2xl mx-auto font-body leading-relaxed">
              We're not just an SEO agency — we're your strategic growth
              partner. Since 2009, we've helped thousands of businesses dominate
              search and scale their digital presence.
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

      {/* Story / Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/30 bg-primary/5 px-4 py-1.5"
              >
                Our Story
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Built on a Mission to{" "}
                <span className="gradient-text">Level the Playing Field</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SEO Pro Agency was founded in 2009 with a simple but powerful
                belief: every business, regardless of size, deserves access to
                world-class SEO expertise. We watched small businesses lose
                customers to larger competitors who could afford expensive
                agencies — and decided to change that.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Today, we combine the expertise of 50+ seasoned SEO
                professionals with proprietary AI technology to deliver results
                that were once only possible for Fortune 500 companies — at
                pricing accessible to growing businesses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is clear: help 100,000 businesses achieve
                sustainable organic growth by 2030 through data-driven, ethical
                SEO strategies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map(({ value, label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  data-ocid={`about.stat.${index + 1}`}
                >
                  <Card className="card-elevated rounded-xl text-center group hover:border-primary/30 transition-smooth">
                    <CardContent className="p-5 flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="font-display text-2xl font-bold gradient-text">
                        {value}
                      </div>
                      <p className="text-muted-foreground text-xs font-medium text-center">
                        {label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              className="mb-4 text-accent border-accent/30 bg-accent/5 px-4 py-1.5"
            >
              What We Stand For
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core{" "}
              <span className="gradient-text">Values & Principles</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These aren't just words on a wall. They're the standards that
              guide every strategy, every campaign, and every conversation we
              have with our clients.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            data-ocid="about.values_list"
          >
            {VALUES.map(({ icon: Icon, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                data-ocid={`about.value.${index + 1}`}
              >
                <Card className="card-elevated group h-full rounded-xl hover:border-primary/30 transition-smooth">
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
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
              Our Journey
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              15 Years of{" "}
              <span className="gradient-text">Growth & Innovation</span>
            </h2>
          </motion.div>

          <div
            className="max-w-3xl mx-auto space-y-0"
            data-ocid="about.timeline"
          >
            {MILESTONES.map(({ year, event }, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-6 pb-8 last:pb-0"
                data-ocid={`about.milestone.${index + 1}`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-xs flex-shrink-0 shadow-md">
                    {year.slice(2)}
                  </div>
                  {index < MILESTONES.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-accent/20 mt-2 min-h-[2rem]" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="font-display font-bold text-primary text-lg mb-1">
                    {year}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              className="mb-4 text-accent border-accent/30 bg-accent/5 px-4 py-1.5"
            >
              The Team
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Our leadership team brings together decades of expertise across
              SEO, technology, content, and data science.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            data-ocid="about.team_list"
          >
            {TEAM.map(({ name, role, expertise, initial }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-ocid={`about.team_member.${index + 1}`}
              >
                <Card className="card-elevated group h-full rounded-xl text-center hover:border-primary/30 transition-smooth">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full btn-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-2xl shadow-md group-hover:shadow-lg transition-smooth">
                      {initial}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-base">
                        {name}
                      </h3>
                      <p className="text-primary text-sm font-medium">{role}</p>
                    </div>
                    <p className="text-muted-foreground text-xs">{expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Grow with <span className="gradient-text">SEO Pro?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join 10,000+ businesses who trust us to grow their organic
              presence. Start with a free audit — no commitment, no credit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" data-ocid="about.cta.contact_button">
                <Button
                  size="lg"
                  className="btn-gradient font-semibold px-8 py-6 text-lg shadow-md hover:shadow-lg"
                >
                  Contact Our Team
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/audit" data-ocid="about.cta.audit_button">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg"
                >
                  Start Free Audit
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
