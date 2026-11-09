import Navbar from '@/components/Navbar';

export default function Profissional() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Trajetória Profissional</h1>
        <div className="border-l-4 border-blue-600 pl-4 space-y-2">
          <h2 className="text-sm font-semibold text-blue-600">Residência Tecnológica</h2>
          <p className="text-xl font-bold text-slate-900">Porto Digital / Embarque Digital</p>
          <p className="text-slate-600 text-sm">Desenvolvimento de projetos web modernos utilizando React, Next.js e Tailwind CSS.</p>
        </div>
      </main>
    </div>
  );
}