import 'server-only';

export interface AzureServiceCost {
  service_name: string;
  period_start: string;
  period_end: string;
  currency: string;
  total_cost: number;
}

export interface AzureCostResult {
  configured: boolean;
  costs: AzureServiceCost[];
  error?: string;
}

export async function getAzureServiceCosts(): Promise<AzureCostResult> {
  const baseUrl = process.env.CLOUD_BILLING_API_URL?.replace(/\/$/, '');
  const apiKey = process.env.CLOUD_BILLING_API_KEY;

  if (!baseUrl || !apiKey) {
    return { configured: false, costs: [] };
  }

  try {
    const response = await fetch(`${baseUrl}/api/v1/billing/azure/service-costs`, {
      headers: { 'X-API-Key': apiKey },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return { configured: true, costs: [], error: `Backend zwrócił status ${response.status}` };
    }

    const costs = (await response.json()) as AzureServiceCost[];
    return { configured: true, costs };
  } catch {
    return { configured: true, costs: [], error: 'Prywatny backend kosztowy jest niedostępny.' };
  }
}
