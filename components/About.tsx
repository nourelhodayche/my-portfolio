import Reveal from "./Reveal";
import Image from "next/image";

export default function About() {
  return (
    <section id="apropos" className="px-6 py-24">
      <Reveal className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">À propos de moi</h2>
        <p className="mt-2 text-[#9aa5d1]">
  Mon parcours, mes expériences et ce que je recherche aujourd&apos;hui
        </p>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-white/10">
  <Image
    src="/photogeneratedai.jpg"
    alt="Nour El Hoda Yche"
    fill
    className="object-cover"
  />
</div>

          <div className="space-y-4 text-[#c3c9e8]">
           <p>
  Actuellement en 5ème année (Cycle Ingénieur en Génie Logiciel) à
  Universiapolis, après une Licence en Systèmes Informatiques Répartis
  obtenue à la FSTG Marrakech.
</p>
<p>
  <p>
  Spécialisée dans le développement full stack, j&apos;aime concevoir des
  applications complètes — du backend sécurisé avec Spring Boot, Laravel ou
  Node.js jusqu&apos;à des interfaces modernes en React ou Next.js. Lors de
  mon stage PFA, j&apos;ai notamment contribué à Coneke, une application de
  gestion RH & Paie destinée aux entreprises, avec une interface web pour
  les administrateurs et une application mobile Flutter pour les employés.
</p>
</p>
<p>
  Je suis actuellement à la recherche d&apos;un stage PFE pour mettre en
  pratique mes compétences en environnement professionnel. Basée à Agadir,
  je suis ouverte à la mobilité.
</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}