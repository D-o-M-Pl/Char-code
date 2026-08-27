const obligations = [
  ['Wolontariat i działalność pożytku', 'Zwykle wymagane', 'Porozumienia, zakres świadczeń, bezpieczeństwo i ewidencja.'],
  ['RODO', 'Wymagane przy danych osobowych', 'Podstawy prawne, minimalizacja, retencja, prawa osób i naruszenia.'],
  ['Rachunkowość i sprawozdania', 'Zależne od formy i statusu', 'Dowody księgowe, polityka rachunkowości i terminy.'],
  ['AI Act', 'Gdy organizacja używa lub dostarcza AI', 'Rejestr AI, klasyfikacja ryzyka, kompetencje i nadzór człowieka.'],
  ['KSC / NIS2', 'Po ocenie zakresu', 'NGO nie podlega automatycznie; liczy się sektor, wielkość i rodzaj usług.'],
  ['Normy ISO', 'Dobrowolne lub umowne', '27001, 27701, 42001 i 22301 wspierają system zarządzania.'],
];

export default function CompliancePage() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-violet-700">Non-profit Compliance</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">Prawo i normy</h1>
      <p className="mt-3 max-w-3xl text-gray-600">
        Katalog kontrolny dla polskich NGO. Nie jest poradą prawną; zastosowanie wymaga oceny organizacji.
      </p>
      <div className="mt-8 space-y-4">
        {obligations.map(([title, status, description]) => (
          <article key={title} className="rounded-xl border bg-white p-5 shadow-sm sm:flex sm:items-start sm:justify-between sm:gap-6">
            <div><h2 className="font-semibold text-gray-900">{title}</h2><p className="mt-1 text-gray-600">{description}</p></div>
            <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 sm:mt-0">{status}</span>
          </article>
        ))}
      </div>
      <a className="mt-8 inline-block font-semibold text-violet-700 hover:underline" href="https://github.com/D-o-M-Pl/Char-code/blob/main/docs/compliance/nonprofit-pl.md">
        Pełny katalog i źródła urzędowe
      </a>
    </div>
  );
}
