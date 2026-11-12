import Navbar from '@/components/Navbar';

export default function Profissional() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 md:p-10 mt-8 bg-white rounded-2xl shadow-md border border-slate-200 space-y-8">
        <h1 className="text-3xl font-bold text-slate-800 border-b pb-4">Trajetória Profissional</h1>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-5 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
              Experiência Tecnológica
            </span>
            <h2 className="text-xl font-bold text-slate-900 pt-1">Residente em Desenvolvimento de Software</h2>
            <p className="text-slate-700 font-medium">Porto Digital (Embarque Digital)</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Idealização, prototipação e desenvolvimento de aplicações web e mobile utilizando React, Next.js, Tailwind CSS e integração com APIs, aplicando metodologias ágeis e apresentação de soluções em eventos de inovação.
            </p>
          </div>

          <div className="border-l-4 border-slate-400 pl-5 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
              Experiência Profissional Anterior (1 ano e 1 mês)
            </span>
            <h2 className="text-xl font-bold text-slate-900 pt-1">Atuação Corporativa & Operacional</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Experiência formal que consolidou habilidades essenciais de rotina profissional, organização, cumprimento de prazos, trabalho em equipe e comunicação eficaz.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}