const areas = [
  ['Tożsamość', 'Entra ID, MFA, Conditional Access, PIM i regularne przeglądy dostępów.'],
  ['Zasoby', 'Landing zone, oddzielne środowiska, wymagane tagi i właściciele usług.'],
  ['Dane', 'Regiony UE, szyfrowanie, Private Endpoints, retencja i klasyfikacja.'],
  ['Sekrety', 'Key Vault oraz Managed Identity zamiast kluczy w kodzie i pipeline.'],
  ['Monitoring', 'Azure Monitor, Application Insights, alerty i chroniony ślad audytowy.'],
  ['Koszty', 'Budżety, progi alertów, koszty per usługa oraz wykrywanie anomalii.'],
];

export default function GovernancePage() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">Azure Architecture</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">Governance i architektura</h1>
      <p className="mt-3 max-w-3xl text-gray-600">
        Guardrails dla bezpiecznego, kontrolowanego kosztowo wdrożenia Char-code w Azure.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {areas.map(([title, description]) => (
          <article key={title} className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
          </article>
        ))}
      </div>
      <a className="mt-8 inline-block font-semibold text-indigo-700 hover:underline" href="https://github.com/D-o-M-Pl/Char-code/blob/main/docs/architecture/azure-governance.md">
        Pełna dokumentacja architektury
      </a>
    </div>
  );
}
