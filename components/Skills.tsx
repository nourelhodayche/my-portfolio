"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Langages",
    items: [
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
      { name: "PHP", level: 75 },
      { name: "JavaScript / TypeScript", level: 80 },
    ],
  },
  {
    title: "Frameworks & librairies",
    items: [
      { name: "Spring Boot", level: 70 },
      { name: "Laravel", level: 80 },
      { name: "React.js / Next.js", level: 80 },
      { name: "Angular", level: 60 },
    ],
  },
  {
    title: "Outils & DevOps",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Postman / Swagger", level: 75 },
    ],
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-[#6b7399]">{level}%</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-[#232842]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-teal-400 transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="competences" className="px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Compétences techniques</h2>
        <p className="mt-2 text-[#9aa5d1]">Organisées par catégorie, pas juste une liste en vrac</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-xl border border-white/5 bg-[#141833] p-6">
              <h3 className="font-semibold text-teal-400">{cat.title}</h3>
              <div className="mt-4 space-y-4">
                {cat.items.map((item) => (
                  <SkillBar key={item.name} name={item.name} level={item.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}