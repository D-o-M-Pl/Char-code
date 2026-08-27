# Azure Architecture Governance dla Char-code

Stan odniesienia: 27 sierpnia 2026 r.

## Architektura docelowa

1. **Microsoft Entra ID** — jedno źródło tożsamości, MFA, Conditional Access,
   PIM i role o najmniejszych uprawnieniach.
2. **Azure landing zone** — oddzielne subskrypcje lub grupy zasobów dla
   środowisk produkcyjnych i nieprodukcyjnych.
3. **Azure Front Door + WAF** — publiczny punkt wejścia, TLS i ochrona aplikacji.
4. **Azure Container Apps lub App Service** — portal Char-code, API wolontariatu
   i prywatny backend kosztowy jako rozdzielone workloady.
5. **Azure Database for PostgreSQL Flexible Server** — dane biznesowe z
   oddzielnymi schematami i docelową izolacją tenantów.
6. **Azure Blob Storage** — dowody, raporty i załączniki z wersjonowaniem,
   retencją i blokadą usuwania tam, gdzie jest wymagana.
7. **Azure Key Vault + Managed Identity** — sekrety nie mogą znajdować się w
   repozytorium, obrazie ani zwykłej zmiennej pipeline.
8. **Private Endpoints i VNet integration** — bazy, magazyny i Key Vault bez
   publicznej ekspozycji.
9. **Azure Monitor, Application Insights i Log Analytics** — centralne logi,
   alerty, ślad audytowy i kontrola retencji.
10. **Defender for Cloud** — ocena konfiguracji i zaleceń bezpieczeństwa.
11. **Cost Management + Budgets** — budżet per projekt, tagowanie, alerty i
    integracja z modułem anomalii.

## Model governance

### Hierarchia

- tenant Entra ID;
- platform landing zone;
- workload landing zone `char-code`;
- środowiska `dev`, `test`, `prod`;
- osobne zakresy polityk, budżetów i uprawnień.

### Obowiązkowe tagi

- `organization_id`;
- `environment`;
- `service_owner`;
- `data_classification`;
- `cost_center`;
- `criticality`;
- `retention_class`.

### Guardrails Azure Policy

- dozwolone regiony UE;
- wymagane tagi i szyfrowanie;
- zakaz publicznego dostępu do baz, Blob Storage i Key Vault;
- wymagane diagnostic settings;
- ograniczenie typów i rozmiarów zasobów;
- wymagane TLS i Managed Identity;
- audyt kopii zapasowych, retencji i ochrony przed usunięciem.

Najpierw stosuj tryb `Audit`, następnie `Deny` po sprawdzeniu wpływu.
Wyjątki muszą mieć właściciela, uzasadnienie i datę wygaśnięcia.

## Kontrola kosztów Azure

- budżety miesięczne per organizacja i środowisko;
- alerty przy 50%, 75%, 90% i 100% budżetu;
- agregacja kosztów per usługa i waluta;
- wykrywanie nowych usług i skoków kosztów;
- rekomendacje wyłączania nieużywanych zasobów;
- zatwierdzanie wyjątków kosztowych przez właściciela usługi.

## Źródła urzędowe

- Microsoft Cloud Adoption Framework:
  https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/
- Azure landing zones:
  https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/
- Governance design area:
  https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/governance
- Landing zone design principles:
  https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-principles
- Azure Policy built-in initiatives:
  https://learn.microsoft.com/en-us/azure/governance/policy/samples/built-in-initiatives
