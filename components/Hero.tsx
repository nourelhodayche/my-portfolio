"use client";

import { useEffect, useState } from "react";

const titles = [
  "Étudiante Ingénieure — Développement Full Stack",
  "Développeuse Full Stack",
  "Angular · React · Next.js · Spring Boot · Laravel",
];

function useTypewriter(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setIsDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(titles);

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-600/30 to-pink-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">Nour El Hoda Yche</h1>
        <p className="mt-4 min-h-[2rem] text-xl text-[#9aa5d1]">
          {typed}
          <span className="animate-pulse">|</span>
        </p>

        <p className="mt-6 max-w-xl text-[#9aa5d1]">
  Je conçois et développe des applications web complètes, du backend sécurisé
  à l&apos;interface utilisateur — avec une attention particulière portée à la
  qualité du code et à l&apos;expérience utilisateur.
</p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projets"
            className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 bg-[#11152b] px-6 py-3 font-semibold text-white transition-colors hover:border-white/30"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}