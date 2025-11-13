import React from "react";
import { Button } from "../../ui/button";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl m-auto text-center">
          <h2 className="heading-md text-foreground mb-4">Join the experiments</h2>
          <p className="text-muted-foreground mb-6">Subscribe for occasional notes and experiments. No spam.</p>
          <div className="flex items-center justify-center gap-4">
            <Button>Subscribe</Button>
            <Button variant="ghost">Browse archives</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
