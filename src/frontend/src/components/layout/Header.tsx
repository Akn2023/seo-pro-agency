import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Services", href: "/services", isRoute: true },
  { label: "Tools", href: "/tools", isRoute: true },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Pricing", href: "/#pricing", isRoute: false },
  { label: "About", href: "/about", isRoute: true },
  { label: "Contact", href: "/#contact", isRoute: false },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-card border-b transition-smooth ${
        scrolled ? "shadow-subtle" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="header.link"
          >
            <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center shadow-sm group-hover:shadow-md transition-smooth">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              SEO<span className="gradient-text">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href as "/"}
                  data-ocid={`header.nav.${link.label.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/50"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={`header.nav.${link.label.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/50"
                >
                  {link.label}
                </button>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/audit">
              <Button
                className="btn-gradient font-semibold shadow-sm hover:shadow-elevated transition-smooth"
                data-ocid="header.cta_button"
              >
                Get Free Audit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                data-ocid="header.mobile_menu_button"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-card"
              data-ocid="header.mobile_menu"
            >
              <div className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href as "/"}
                      onClick={() => setMobileOpen(false)}
                      data-ocid={`header.mobile_nav.${link.label.toLowerCase()}`}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200 block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      key={link.label}
                      onClick={() => handleNavClick(link.href)}
                      data-ocid={`header.mobile_nav.${link.label.toLowerCase()}`}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-md transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  ),
                )}
                <div className="pt-4 border-t border-border mt-2">
                  <Link to="/audit" onClick={() => setMobileOpen(false)}>
                    <Button
                      className="btn-gradient w-full font-semibold"
                      data-ocid="header.mobile_cta_button"
                    >
                      Get Free Audit
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
