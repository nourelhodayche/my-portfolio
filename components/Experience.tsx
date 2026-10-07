import Reveal from "./Reveal";

const entries = [
    {
    date: "Juil. — Août 2026",
    title: "Stagiaire Développeuse Full Stack — OPTIZAWORKS",
    description:"Stage PFA (2 mois) sur Coneke, une application de gestion RH & Paie (Next.js, Laravel, PostgreSQL, Flutter). Conception et développement de trois modules complets ainsi que correction de bugs critiques sur les exports PDF et l'authentification."
  },
  {
    date: "Avr. — Mai 2025",
    title: "Stagiaire Développeuse Full Stack — ONESTCOM",
    description:"Développement d'une application web de gestion des services (Laravel, MySQL, TailwindCSS) dans le cadre du PFE : module newsletter avec notifications automatiques, modélisation UML, déploiement via cPanel/FTP.",
  },
  {
    date: "2025 — en cours",
    title: "Cycle Ingénieur, Génie Logiciel — Universiapolis",
    description: "5ème année, spécialisation développement full stack.",
  },
  {
    date: "2024 — 2025",
    title: "Licence SIR — FSTG Marrakech",
    description: "Systèmes Informatiques Répartis",
  },
  {
    date: "2021 — 2024",
    title: "DEUST MIPC — FSTG Marrakech",
    description: "Mathématiques, Informatique, Physique, Chimie.",
  },
];

export default function Experience() {
  return (
    <section id="parcours" className="px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Expérience & Formation</h2>
        <p className="mt-2 text-[#9aa5d1]">
          Stages, alternances, formation — du plus récent au plus ancien
        </p>

        <div className="mt-10">
          {entries.map((e, i) => (
            <div
              key={e.title}
              className={`grid grid-cols-[120px_1fr] gap-8 py-6 ${
                i !== entries.length - 1 ? "border-b border-white/5" : ""
              }`}
            >
              <span className="text-sm text-teal-400">{e.date}</span>
              <div>
                <h3 className="font-bold">{e.title}</h3>
                <p className="mt-1 text-[#9aa5d1]">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}