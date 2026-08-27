# Prawo i normy dla organizacji non-profit w Polsce

Stan odniesienia: 27 sierpnia 2026 r.

> To narzędzie organizacyjne, nie porada prawna. Przed oznaczeniem wymagania jako
> spełnione lub nieobowiązujące należy potwierdzić zakres z prawnikiem,
> księgowym albo właściwym organem.

## Przepisy zwykle obowiązkowe

| Obszar | Kiedy ma zastosowanie | Wymagane działania w aplikacji |
|---|---|---|
| Działalność pożytku publicznego i wolontariat | Organizacja prowadzi działalność pożytku publicznego lub korzysta z wolontariuszy | porozumienia, zakres świadczeń, ewidencja, bezpieczeństwo, uprawnienia i dokumentacja |
| RODO | Przetwarzane są dane wolontariuszy, darczyńców, pracowników lub beneficjentów | rejestr czynności, podstawy prawne, minimalizacja, retencja, prawa osób, umowy powierzenia, obsługa naruszeń |
| Prawo o stowarzyszeniach albo ustawa o fundacjach | Zależnie od formy prawnej | statut, organy, uchwały, reprezentacja, nadzór i aktualność danych |
| Rachunkowość | Organizacja prowadzi księgi lub kwalifikuje się do uproszczonej ewidencji | polityka rachunkowości, dowody księgowe, zamknięcie okresu, sprawozdania i retencja |
| Zbiórki publiczne | Prowadzona jest zbiórka w rozumieniu ustawy | zgłoszenie, cel, rozliczenie i publikacja wymaganych informacji |
| AI Act | Organizacja dostarcza lub stosuje system AI w UE | inwentaryzacja AI, rola dostawcy/podmiotu stosującego, klasyfikacja ryzyka, kompetencje AI, nadzór człowieka, przejrzystość |
| Ustawa o KSC / NIS2 | Tylko jeżeli organizacja spełnia kryteria podmiotu kluczowego lub ważnego albo działa w objętym sektorze | kwalifikacja zakresu, wpis, SZBI, zarządzanie ryzykiem, incydenty, ciągłość i audyty |

Typowa mała NGO nie podlega NIS2 automatycznie tylko dlatego, że jest NGO.
Zakres trzeba ustalić według sektora, wielkości, rodzaju usług i szczególnych
przepisów. Nowelizacja polskiej ustawy o KSC weszła w życie 3 kwietnia 2026 r.

## Szczególne ryzyka Char-code

- dane beneficjentów mogą ujawniać zdrowie, sytuację społeczną, poglądy lub inne
  szczególne kategorie danych;
- dopasowanie wolontariuszy przez AI nie może samodzielnie podejmować decyzji
  wywołujących istotne skutki bez oceny prawnej i nadzoru człowieka;
- dane osobowe nie powinny być wysyłane do modelu AI bez podstawy prawnej,
  minimalizacji, umowy i oceny dostawcy;
- moduł kosztowy nie może ujawniać kluczy chmurowych, identyfikatorów zasobów
  ani danych innego klienta;
- zgody na wizerunek i dane dzieci wymagają osobnej, ostrożnej ścieżki.

## Normy dobrowolne i dobre praktyki

| Norma | Rola |
|---|---|
| ISO/IEC 27001:2022 | system zarządzania bezpieczeństwem informacji |
| ISO/IEC 27002:2022 | katalog praktyk i kontroli bezpieczeństwa |
| ISO/IEC 27701:2025 | system zarządzania informacją o prywatności |
| ISO/IEC 42001:2023 | system zarządzania sztuczną inteligencją |
| ISO 22301:2019 | ciągłość działania |
| Azure Well-Architected Framework | bezpieczeństwo, niezawodność, koszty, operacje i wydajność |
| Azure Cloud Adoption Framework | landing zones, governance, bezpieczeństwo i zarządzanie |

Certyfikacja ISO nie jest automatycznie obowiązkowa. Może jednak wynikać z
umowy, konkursu grantowego, wymagań partnera albo przyjętego poziomu ryzyka.

## Źródła urzędowe

### Polska

- ustawa o działalności pożytku publicznego i o wolontariacie:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20250001338
- zmiana z 19 czerwca 2026 r.:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260001040
- Prawo o stowarzyszeniach:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19890200104
- ustawa o fundacjach:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19840210097
- zmiana fundacji i stowarzyszeń z 2026 r.:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260000316
- ustawa o rachunkowości — tekst jednolity 2026:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260000522
- ustawa o zasadach prowadzenia zbiórek publicznych:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu20140000498
- ustawa o KSC — tekst jednolity 2026:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260000815
- nowelizacja KSC wdrażająca NIS2:
  https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260000252
- wyjaśnienia Ministerstwa Cyfryzacji dotyczące KSC:
  https://www.gov.pl/web/cyfryzacja/nowelizacja-ustawy-o-krajowym-systemie-cyberbezpieczenstwa-ksc---obowiazki-podmiotow-kluczowych-i-waznych
- materiały UODO dla NGO:
  https://uodo.gov.pl/pl/138/3694
- lista pytań UODO przed wdrożeniem AI:
  https://uodo.gov.pl/pl/138/4533

### Unia Europejska

- RODO — rozporządzenie (UE) 2016/679:
  https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- AI Act — rozporządzenie (UE) 2024/1689:
  https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- NIS2 — dyrektywa (UE) 2022/2555:
  https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng

### ISO

- ISO/IEC 27001:2022: https://www.iso.org/standard/27001
- ISO/IEC 27002:2022: https://www.iso.org/standard/75652.html
- ISO/IEC 27701:2025: https://www.iso.org/standard/27701
- ISO/IEC 42001:2023: https://www.iso.org/standard/42001
- ISO 22301:2019: https://www.iso.org/standard/75106.html
