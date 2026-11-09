import Navbar from '@/components/Navbar';

export default function Projetos() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Meus Projetos</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg shadow-sm space-y-2 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">ISAC Conecta</h2>
            <p className="text-slate-600 text-sm">Plataforma web comunitária prototipada para organizar comércio local e apoiar ONGs.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm space-y-2 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Solaris</h2>
            <p className="text-slate-600 text-sm">Aplicação web/mobile voltada para clínicas de dermatologia e monitoramento de saúde cutânea.</p>
          </div>
        </div>
      </main>
    </div>
  );
}