import Navbar from '@/components/Navbar';

export default function Academica() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 md:p-10 mt-8 bg-white rounded-2xl shadow-md border border-slate-200 space-y-8">
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Formação Acadêmica</h1>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-5 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
              Em andamento
            </span>
            <h2 className="text-xl font-bold text-slate-900 pt-1">Tecnólogo em Sistemas para Internet</h2>
            <p className="text-slate-700 font-medium">Universidade Católica de Pernambuco (UNICAP)</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Foco em desenvolvimento web full stack, arquitetura de software, banco de dados relacionais, engenharia de requisitos e metodologias ágeis.
            </p>
          </div>

          <div className="border-l-4 border-slate-400 pl-5 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
              Programa de Formação
            </span>
            <h2 className="text-xl font-bold text-slate-900 pt-1">Embarque Digital — Residência Tecnológica</h2>
            <p className="text-slate-700 font-medium">Porto Digital / Prefeitura do Recife</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Imersão prática em desenvolvimento de software, prototipação de produtos digitais, pitches e trabalho colaborativo voltado para o mercado de tecnologia.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}