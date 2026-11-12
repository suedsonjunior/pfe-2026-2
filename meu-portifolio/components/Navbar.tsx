'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Acadêmica', path: '/academica' },
    { name: 'Profissional', path: '/profissional' },
    { name: 'Projetos', path: '/projetos' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo / Nome */}
        <Link 
          href="/" 
          className="text-xl font-black tracking-tight text-white hover:text-blue-400 transition-colors"
        >
          Suedson<span className="text-blue-500">.dev</span>
        </Link>

        {/* Botões de Navegação */}
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-blue-500/30 ring-2 ring-blue-400/50 scale-105'
                    : 'bg-slate-800 text-slate-200 border border-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
}