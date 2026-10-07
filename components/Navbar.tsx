"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#apropos", id: "apropos", label: "À propos" },
  { href: "#competences", id: "competences", label: "Compétences" },
  { href: "#projets", id: "projets", label: "Projets" },
  { href: "#parcours", id: "parcours", label: "Parcours" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0e1f]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-lg font-bold">Nour El Hoda</span>
        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                activeId === link.id ? "text-teal-400" : "text-[#9aa5d1] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/5 px-6 pb-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-3 text-sm ${activeId === link.id ? "text-teal-400" : "text-[#9aa5d1]"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}