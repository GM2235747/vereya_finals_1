import React from "react";
import { ScrollArrow } from "../ui/scroll-arrow";

export function FeaturedPosts() {
  const posts = [
    {
      title: "On small experiments",
      excerpt: "How tiny experiments shape better decisions—practical steps and a short case study.",
      date: "Nov 5, 2025",
      href: "#"
    },
    {
      title: "Rethinking component layout",
      excerpt: "A brief look at spacing, rhythm, and why they matter in UI design.",
      date: "Oct 28, 2025",
      href: "#"
    },
    {
      title: "Notes on clarity",
      excerpt: "Short guidelines I use to keep writing and interfaces clearer.",
      date: "Oct 12, 2025",
      href: "#"
    }
  ];

  return (
    // the featured area should be full-width white; the top wrapper provides the blue above
    <section id="featured-section" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl m-auto">
          <h2 className="text-lg font-semibold mb-6 text-slate-900">Featured</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="rounded-md border p-4 bg-slate-50">
                <h3 className="font-medium text-base mb-1 text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <time>{p.date}</time>
                  <a href={p.href} className="text-blue-600 underline">Read</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* arrow to the next section */}
      <ScrollArrow targetId="features-section" />
    </section>
  );
}
