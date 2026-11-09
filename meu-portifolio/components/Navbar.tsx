import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">Meu Portfólio</h1>
        <div className="flex gap-4">
          <Link href="/sobre" className="hover:text-blue-400">Sobre</Link>
          <Link href="/academica" className="hover:text-blue-400">Acadêmica</Link>
          <Link href="/profissional" className="hover:text-blue-400">Profissional</Link>
          <Link href="/projetos" className="hover:text-blue-400">Projetos</Link>
        </div>
      </div>
    </nav>
  );
}