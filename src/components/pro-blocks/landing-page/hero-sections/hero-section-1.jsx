import React from "react";
import { Button } from "../../../ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "../tagline";
import { AspectRatio } from "../../../ui/aspect-ratio";
import { ScrollArrow } from "../../../ui/scroll-arrow";

export function HeroSection1() {
  return (
    <section
      className="min-h-[70vh] flex flex-col justify-center"
      aria-labelledby="hero-heading">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16 px-6 py-24">
        {/* Left Column */}
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          {/* Section Title */}
          <div className="section-title-gap-xl flex flex-col">
            {/* Tagline */}
            <Tagline>Reflections & experiments</Tagline>
            {/* Main Heading */}
            <h1 id="hero-heading" className="heading-xl text-foreground">
              Thoughtful notes & small experiments
            </h1>
            {/* Description */}
            <p className="text-muted-foreground text-base lg:text-lg">
              Short, focused pieces on design, code, and the small experiments that led to them.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Read latest</Button>
            <Button variant="outline">
              Browse topics
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
              <img
                src="/emblem.png"
                alt="Emblem placeholder"
                className="h-full w-full rounded-xl object-cover"
              />
          </AspectRatio>
        </div>
      </div>

      {/* Scroll arrow centered at the bottom of the hero */}
      <ScrollArrow targetId="featured-section" />
    </section>
  );
}
