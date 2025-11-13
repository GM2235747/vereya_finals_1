import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function ScrollArrow({ targetId = "featured-section" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = () => document.getElementById(targetId);

    // Trigger when the arrow is approaching the viewport (40% before bottom)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = target();
            if (t) {
              // smooth scroll once when arrow becomes near viewport
              t.scrollIntoView({ behavior: "smooth" });
              observer.disconnect();
            }
          }
        });
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetId]);

  const handleClick = () => {
    const t = document.getElementById(targetId);
    if (t) t.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // place the arrow lower in the hero with bigger spacing so it visually separates more
    <div className="flex justify-center mt-20 mb-20" ref={ref}>
      <button
        onClick={handleClick}
        aria-label="Scroll to content"
        className="rounded-full bg-foreground text-white p-4 shadow-md hover:translate-y-0.5 transition-transform">
        <ArrowDown className="size-6" />
      </button>
    </div>
  );
}

export default ScrollArrow;
