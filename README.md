# Char-code — Code AI Hybrid dla organizacji non-profit

Jedna aplikacja łącząca:

- platformę wolontariatu;
- chroniony podgląd anomalii rozliczeń chmurowych;
- zagregowane koszty usług Microsoft Azure;
- Azure Architecture Governance;
- katalog obowiązków prawnych i norm dla polskich organizacji non-profit.

## Źródła projektu

- [volunteer-platform](https://github.com/D-o-M-Pl/volunteer-platform) — moduł wolontariatu;
- [cloud-billing-anomaly](https://github.com/D-o-M-Pl/cloud-billing-anomaly) — prywatny backend kosztów;
- [Desing-Azure-AI-Architecy-governed-agent](https://github.com/D-o-M-Pl/Desing-Azure-AI-Architecy-governed-agent) — źródło założeń governance;
- [Char-code](https://github.com/D-o-M-Pl/Char-code) — wspólna aplikacja i panel.

Prywatny kod backendu kosztowego nie jest kopiowany do publicznego repozytorium.
Char-code łączy się z nim wyłącznie po chronionym API. Klucz API pozostaje zmienną
serwerową i nigdy nie jest wysyłany do przeglądarki.

## Konfiguracja panelu kosztów

W środowisku serwera Next.js ustaw:

- `CLOUD_BILLING_API_URL` — adres prywatnego backendu;
- `CLOUD_BILLING_API_KEY` — długi klucz wymagany przez backend;
- `NEXT_PUBLIC_API_URL` — adres API modułu wolontariatu.

## Dokumentacja

- [Azure Architecture Governance](docs/architecture/azure-governance.md)
- [Prawo i normy dla non-profit](docs/compliance/nonprofit-pl.md)
- [Mapa kontroli](docs/compliance/control-catalog.yaml)

Treści prawne są katalogiem kontrolnym, nie poradą prawną. Zakres zastosowania
zależy od formy organizacji, działalności, finansowania, sektorów i użycia AI.

Copyright © 2026 D-o-M-Pl. Wszelkie prawa zastrzeżone.
