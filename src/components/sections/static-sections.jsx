import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="heading-md text-foreground mb-6">{title}</h2>
      {children}
    </div>
  </section>
);

export const WritingSection = () => {
  const posts = [
    {
      title: "On small experiments",
      date: "Nov 5, 2025",
      excerpt: "How tiny experiments shape better decisions—practical steps and a short case study.",
      href: "#",
    },
    {
      title: "Rethinking component layout",
      date: "Oct 28, 2025",
      excerpt: "A brief look at spacing, rhythm, and why they matter in UI design.",
      href: "#",
    },
    {
      title: "Notes on clarity",
      date: "Oct 12, 2025",
      excerpt: "Short guidelines I use to keep writing and interfaces clearer.",
      href: "#",
    },
  ];

  return (
    <Section id="writing" title="Writing">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
              <CardDescription>{p.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild size="sm">
                <a href={p.href}>Read</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Typography scale helper",
      status: "In progress",
      desc: "A tiny tool to preview modular scales and rhythm with Tailwind presets.",
    },
    {
      title: "Bento layout presets",
      status: "Shipped",
      desc: "Composable card layouts with sane defaults for images and copy.",
    },
    {
      title: "Scroll interactions",
      status: "Exploring",
      desc: "Subtle motion hooks for anchors, arrows, and section reveals.",
    },
  ];

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((pr) => (
          <Card key={pr.title}>
            <CardHeader className="flex-row items-start justify-between gap-4">
              <CardTitle className="text-base">{pr.title}</CardTitle>
              <span className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                {pr.status}
              </span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{pr.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export const AboutSection = () => (
  <Section id="about" title="About">
    <div className="max-w-3xl">
      <Card className="flex-row items-center gap-6">
        <img src="/emblem.png" alt="Emblem" className="h-16 w-16 rounded-lg object-contain ml-6" />
        <div className="pr-6">
          <div className="font-semibold text-foreground">Guilliano D. Magbitang — BSIT</div>
          <div className="text-sm text-muted-foreground mt-1">
            This site is a notebook for ideas that improve with use—short notes,
            small experiments, and patterns I reach for when building.
          </div>
        </div>
      </Card>
    </div>
  </Section>
);

export const ArchiveSection = () => {
  const archive = {
    2025: [
      { title: "On small experiments", href: "#" },
      { title: "Rethinking component layout", href: "#" },
    ],
    2024: [
      { title: "Notes on clarity", href: "#" },
      { title: "Tiny CSS utilities I keep", href: "#" },
    ],
  };

  return (
    <Section id="archive" title="Archive">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(archive).map(([year, items]) => (
          <Card key={year}>
            <CardHeader>
              <CardTitle className="text-base">{year}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {items.map((it) => (
                  <li key={it.title} className="text-sm">
                    <a href={it.href} className="text-foreground hover:underline">
                      {it.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
