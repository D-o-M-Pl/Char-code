import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Char-code | NGO, Azure i AI Governance',
  description: 'Wolontariat, koszty Azure, bezpieczne AI i zgodność non-profit w jednej aplikacji.',
};

const links = [
  ['/', 'Start'],
  ['/tasks', 'Zadania'],
  ['/volunteers', 'Wolontariusze'],
  ['/organizations', 'Organizacje'],
  ['/cloud-costs', 'Koszty Azure'],
  ['/governance', 'Governance'],
  ['/compliance', 'Prawo i normy'],
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-slate-50">
        <nav className="border-b bg-white shadow-sm">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3">
            <a href="/" className="mr-2 text-lg font-bold text-slate-900">Char-code</a>
            {links.slice(1).map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-slate-600 transition-colors hover:text-blue-700">{label}</a>
            ))}
          </div>
        </nav>
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
