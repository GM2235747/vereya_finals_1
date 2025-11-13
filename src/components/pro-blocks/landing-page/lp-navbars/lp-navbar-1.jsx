import React, { useState } from "react";
import { Logo } from "../../logo";
import { Button } from "../../../ui/button";
import { Menu, X } from "lucide-react";

const MENU_ITEMS = [
  { id: "writing", label: "Writing" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "archive", label: "Archive" }
];

const NavMenuItems = ({ className, onNavigate }) => (
  <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
    {MENU_ITEMS.map(({ id, label }) => (
      <Button key={label} asChild variant="ghost" className="w-full md:w-auto">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.(id); }}>{label}</a>
      </Button>
    ))}
  </div>
);

export function LpNavbar1({ bgColor, textColor, variant = "none", onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Provide a few sensible presets. If explicit bgColor/textColor are passed, they take precedence.
  let computedBg = bgColor;
  let computedText = textColor;
  if (!computedBg && !computedText) {
    if (variant === "mono-dark") {
      computedBg = "#0b1220"; // dark monochrome
      computedText = "#ffffff";
    } else if (variant === "mono-light") {
      computedBg = "#ffffff"; // light monochrome
      computedText = "#0f172a";
    } else if (variant === "none") {
      // no color — transparent nav that lets page background show through
      computedBg = "transparent";
      computedText = undefined;
    } else {
      // fallback teal
      computedBg = "#0EA5A4";
      computedText = "#ffffff";
    }
  }

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className="sticky top-0 inset-x-0 isolate z-50 py-3.5 md:py-4"
      style={{ backgroundColor: computedBg, color: computedText }}>
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="Go to homepage" onClick={(e)=>{e.preventDefault(); onNavigate?.("home");}}>
            <Logo className="size-7" />
          </a>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems onNavigate={onNavigate} />
          <Button asChild>
            <a href="#">Subscribe</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems onNavigate={(id)=>{ onNavigate?.(id); setIsMenuOpen(false); }} />
            <Button asChild className="w-full">
              <a href="#">Subscribe</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
