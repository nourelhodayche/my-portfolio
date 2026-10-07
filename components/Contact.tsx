import Reveal from "./Reveal";

const contacts = [
  { label: "nourelhodayche@gmail.com", href: "mailto:nourelhodayche@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nour-el-hoda-yche/" },
  { label: "GitHub", href: "https://github.com/nourelhodayche/" },
  { label: "CV — télécharger", href: "/cv-nour-el-hoda-yche.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <Reveal className="mx-auto max-w-4xl rounded-2xl border border-white/5 bg-[#141833] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Discutons</h2>
        <p className="mt-3 text-[#9aa5d1]">
  Actuellement à la recherche d&apos;un stage PFE — n&apos;hésite pas à me
  contacter pour en discuter.
</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="rounded-lg border border-white/15 px-5 py-3 text-sm transition-colors hover:border-teal-400 hover:text-teal-400"
            >
              {c.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}