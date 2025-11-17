import { Menu, Wallet2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "Особенности" },
    { href: "#how", label: "Как это работает" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center text-white">
              <Wallet2 className="h-5 w-5" />
            </div>
            <span className="font-semibold text-blue-900">BluePay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-blue-900/80">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="px-4 py-2 text-blue-700 hover:text-blue-900">Демо</a>
            <a
              href="#start"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow hover:shadow-md transition-shadow"
            >
              Подключить
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-blue-900">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-2 py-2 rounded hover:bg-blue-50 text-blue-900/90">
                {l.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <a href="#demo" className="px-4 py-2 text-blue-700 hover:text-blue-900">Демо</a>
              <a
                href="#start"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow"
              >
                Подключить
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
