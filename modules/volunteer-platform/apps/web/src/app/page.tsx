const modules = [
  ['Volunteer Platform', 'Zadania, organizacje, wolontariusze i bezpieczne dopasowanie kompetencji.', '/tasks', 'emerald'],
  ['Koszty usług Azure', 'Zagregowane koszty per usługa z prywatnego backendu i alerty anomalii.', '/cloud-costs', 'blue'],
  ['Azure Governance', 'Landing zone, polityki, tożsamość, monitoring, sekrety i kontrola kosztów.', '/governance', 'indigo'],
  ['Prawo i normy NGO', 'RODO, wolontariat, rachunkowość, AI Act, KSC/NIS2 oraz normy ISO.', '/compliance', 'violet'],
];

export default function HomePage() {
  return (
    <div>
      <section className="rounded-2xl bg-slate-950 px-6 py-14 text-white sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Code AI Hybrid dla non-profit</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          Wolontariat, Azure, bezpieczne AI i zgodność w jednej aplikacji
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Char-code łączy procesy społeczne z kontrolą kosztów usług chmurowych,
          architekturą governance i katalogiem obowiązków organizacji non-profit.
        </p>
      </section>
      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {modules.map(([title, description, href]) => (
          <a key={title} href={href} className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <span className="mt-5 inline-block font-semibold text-blue-700">Otwórz moduł →</span>
          </a>
        ))}
      </section>
    </div>
  );
}
