"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const projects = [
  {
    name: "WalletVision — Plateforme Fintech Bancaire",
    category: "Fullstack",
    description:
      "Application bancaire fullstack avec authentification SSR et synchronisation des comptes via l'API Plaid. Dashboard financier avec visualisations Chart.js et interface Tailwind CSS + Shadcn UI.",
    stack: ["Next.js", "TypeScript", "Appwrite", "Plaid API"],
    github: "https://github.com/nourelhodayche/banking-app",
    demo: "#",
  },
  {
    name: "TechBuddy — AI Learning Platform",
    category: "Fullstack",
    description:
      "Plateforme LMS développée lors du hackathon GenLink Hacks, dédiée à l'apprentissage numérique des seniors. Chatbot IA, quiz interactifs, suivi de progression et authentification JWT/bcrypt.",
    stack: ["React", "Node.js", "MongoDB", "Groq API"],
    github: "https://github.com/nourelhodayche/tech-buddy",
    demo: "#",
  },
  {
    name: "Clinic Management REST API",
    category: "Backend",
    description:
      "API REST sécurisée de gestion de clinique médicale avec authentification JWT, gestion des rôles (Admin, Médecin, Patient), rendez-vous et ordonnances. Documentation Swagger, migrations Flyway, conteneurisation Docker.",
    stack: ["Spring Boot", "PostgreSQL", "Docker", "Swagger"],
    github: "#",
    demo: "#",
  },
  {
    name: "UniClubs — Gestion des Clubs",
    category: "Frontend",
    description:
      "Application CRUD de gestion des clubs et adhésions avec état centralisé Redux Toolkit. Interface dynamique et responsive, architecture frontend performante.",
    stack: ["React", "Redux Toolkit"],
    github: "https://github.com/nourelhodayche/gestion-clubs",
    demo: "#",
  },
];

const filters = ["Tous", "Frontend", "Fullstack", "Backend"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous");
  const visible = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projets" className="px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Projets</h2>
        <p className="mt-2 text-[#9aa5d1]">3 à 4 projets max — qualité avant quantité</p>

        <div className="mt-6 flex gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === f ? "border-teal-400 text-teal-400" : "border-white/15 text-[#9aa5d1] hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-6">
          {visible.map((p) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#141833] transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.3)] sm:flex-row"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#1e2a4a] to-[#2a3a6b] text-sm text-[#8b93c4] sm:h-auto sm:w-1/2">
                [Screenshot / GIF du projet]
              </div>

              <div className="flex-1 p-8">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-3 text-[#c3c9e8]">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-purple-400/30 px-3 py-1 text-xs text-purple-200">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-6 text-sm">
                  <a href={p.github} className="text-teal-400 hover:underline">GitHub →</a>
                  <a href={p.demo} className="text-teal-400 hover:underline">Démo live →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}