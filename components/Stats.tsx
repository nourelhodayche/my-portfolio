"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setValue(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: "+", label: "[Projets réalisés]" },
  { value: 3, suffix: "", label: "[Années d'expérience]" },
  { value: 15, suffix: "+", label: "[Technologies maîtrisées]" },
  { value: 100, suffix: "%", label: "[Motivation]" },
];

export default function Stats() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-4xl font-extrabold text-teal-400">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-[#9aa5d1]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}