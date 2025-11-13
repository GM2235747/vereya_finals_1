import React from "react";
import { Logo } from "../../logo";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-5xl m-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo width={40} height={40} />
            <div>
              <div className="font-medium text-foreground">Guilliano D. Magbitang BSIT</div>
              <div className="text-sm text-muted-foreground">Short notes & experiments</div>
            </div>
          </div>

          <nav className="flex gap-4 text-sm">
            <a href="#writing" className="text-muted-foreground">Writing</a>
            <a href="#projects" className="text-muted-foreground">Projects</a>
            <a href="#about" className="text-muted-foreground">About</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
