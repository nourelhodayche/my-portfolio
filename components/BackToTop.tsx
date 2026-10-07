"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Retour en haut"
      className="fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#141833] text-white shadow-lg transition-colors hover:border-teal-400 hover:text-teal-400"
    >
      ↑
    </button>
  );
}