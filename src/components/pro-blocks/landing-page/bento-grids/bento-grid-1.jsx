"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid1() {
  return (
    <section className="bg-muted section-padding-y">
      <div
        className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div
          className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <Tagline>Selected notes & experiments</Tagline>
          {/* Main Heading */}
          <h2 className="heading-lg">Small experiments and short notes</h2>
          {/* Description */}
          <p className="text-muted-foreground">
            Short essays, case notes, and tiny code experiments—collected as
            snapshots of ideas that felt worth keeping. Tidy, useful, and
            quietly practical.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Tall Feature Card - Left */}
          <Card className="rounded-xl lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Design experiments</CardTitle>
              <CardDescription>
                Visual explorations and small prototypes that test an idea or
                layout. Notes on what worked and what didn’t.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <img
                src="/emblem.png"
                alt="Design experiments"
                className="h-full w-full object-cover" />
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Short case study</CardTitle>
              <CardDescription>
                A concise write-up that traces a small decision or experiment
                and what was learned in the process.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <img
                src="/emblem.png"
                alt="Case study"
                className="h-full w-full object-cover md:aspect-4/3" />
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Right */}
          <Card className="rounded-xl lg:col-start-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Reusable components</CardTitle>
              <CardDescription>
                Small UI patterns and snippets I reach for—practical, copyable,
                and easily lifted into projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <img
                src="/emblem.png"
                alt="Components"
                className="h-full w-full object-cover md:aspect-4/3" />
            </CardContent>
          </Card>
          {/* Tall Feature Card - Right */}
          <Card className="rounded-xl lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Notes on clarity</CardTitle>
              <CardDescription>
                Brief guidelines and observations I use to keep writing and
                interfaces clearer.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <img
                src="/emblem.png"
                alt="Notes on clarity"
                className="h-full w-full object-cover" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
