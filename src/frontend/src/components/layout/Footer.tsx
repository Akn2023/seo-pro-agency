import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Zap } from "lucide-react";

const FOOTER_LINKS = {
  Services: [
    { label: "SEO Audit", href: "/audit", isRoute: true },
    { label: "All Services", href: "/services", isRoute: true },
    { label: "On-Page SEO", href: "/services", isRoute: true },
    { label: "Technical SEO", href: "/services", isRoute: true },
    { label: "Web Design", href: "/services#web-design", isRoute: false },
  ],
  Company: [
    { label: "About Us", href: "/about", isRoute: true },
    { label: "Case Studies", href: "#", isRoute: false },
    { label: "Blog", href: "#", isRoute: false },
    { label: "Careers", href: "#", isRoute: false },
  ],
  Resources: [
    { label: "Free Audit Tool", href: "/audit", isRoute: true },
    { label: "SEO Tools", href: "/tools", isRoute: true },
    { label: "Pricing", href: "/#pricing", isRoute: false },
    { label: "Contact", href: "/#contact", isRoute: false },
  ],
};

const SOCIALS = [
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 w-fit"
              data-ocid="footer.logo_link"
            >
              <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shadow-sm">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground tracking-tight">
                SEO<span className="gradient-text">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI-powered SEO and digital marketing platform. Get actionable
              insights, deep technical audits, and grow your organic traffic.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
                  data-ocid={`footer.social_${label.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground font-display">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={
                          link.href as
                            | "/"
                            | "/audit"
                            | "/services"
                            | "/tools"
                            | "/about"
                        }
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s/g, "_")}`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s/g, "_")}`}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Privacy Policy
            </span>
            <span className="text-xs text-muted-foreground">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
