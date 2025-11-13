"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Separator } from "@/components/ui/separator";

const MAIN_NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#writing", label: "Writing" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#archive", label: "Archive" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookies Settings" },
];

export function Footer1() {
  return (
    <footer
      className="bg-background section-padding-y text-sm"
      role="contentinfo"
      aria-label="Site footer">
      <div
        className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-12 text-center">
          {/* Logo Section */}
          <a href="/" aria-label="Go to homepage">
            <Logo className="size-7" />
          </a>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-4 md:flex-row md:gap-8"
            aria-label="Footer navigation">
            {MAIN_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div
          className="flex w-full flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-6">
          {/* Copyright Text */}
                  <p className="text-muted-foreground text-center lg:text-left">
                    <span>Copyright © {new Date().getFullYear()} Guilliano D. Magbitang.</span>
                  </p>

          {/* Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-4 md:flex-row md:gap-8"
            aria-label="Legal links">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
