import React from "react";

export function FeaturesSection() {
  const features = [
    {
      title: "Thoughtful notes",
      desc: "Short, focused pieces on design and engineering practices you can use.",
    },
    {
      title: "Small experiments",
      desc: "Practical experiments and learnings, recorded so you can replicate them.",
    },
    {
      title: "Clear signals",
      desc: "Actionable takeaways—no fluff—so ideas become usable quickly.",
    },
  ];

  return (
    <section id="features-section" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl m-auto">
          <h2 className="text-lg font-semibold mb-6 text-foreground">What you'll find</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-md border p-6 bg-card">
                <h3 className="font-medium text-base mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
