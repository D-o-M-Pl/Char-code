import { getAzureServiceCosts } from '../../lib/cloud-billing';

export const dynamic = 'force-dynamic';

export default async function CloudCostsPage() {
  const result = await getAzureServiceCosts();
  const totals = result.costs.reduce<Record<string, number>>((acc, item) => {
    acc[item.currency] = (acc[item.currency] ?? 0) + item.total_cost;
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Azure Cost Governance</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Koszty usług Azure</h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          Dane są pobierane po stronie serwera z prywatnego modułu Cloud Billing.
          Klucz API nigdy nie trafia do przeglądarki.
        </p>
      </div>

      {!result.configured && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 text-amber-900">
          Ustaw CLOUD_BILLING_API_URL i CLOUD_BILLING_API_KEY w środowisku serwera.
        </div>
      )}

      {result.error && (
        <div className="rounded-xl border border-red-300 bg-red-50 p-5 text-red-900">{result.error}</div>
      )}

      {Object.keys(totals).length > 0 && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(totals).map(([currency, amount]) => (
            <div key={currency} className="rounded-xl border bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Łączny koszt okresu</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {new Intl.NumberFormat('pl-PL', { style: 'currency', currency }).format(amount)}
              </p>
            </div>
          ))}
        </div>
      )}

      {result.configured && !result.error && result.costs.length === 0 && (
        <div className="rounded-xl border bg-white p-6 text-gray-600">Brak zaimportowanych kosztów Azure.</div>
      )}

      {result.costs.length > 0 && (
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-600">
              <tr><th className="px-5 py-3">Usługa</th><th className="px-5 py-3">Okres</th><th className="px-5 py-3 text-right">Koszt</th></tr>
            </thead>
            <tbody className="divide-y">
              {result.costs.map((item) => (
                <tr key={`${item.service_name}-${item.currency}`}>
                  <td className="px-5 py-4 font-medium text-gray-900">{item.service_name}</td>
                  <td className="px-5 py-4 text-gray-600">{item.period_start} — {item.period_end}</td>
                  <td className="px-5 py-4 text-right font-semibold">
                    {new Intl.NumberFormat('pl-PL', { style: 'currency', currency: item.currency }).format(item.total_cost)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
