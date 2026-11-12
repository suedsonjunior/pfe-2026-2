import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Bloco Principal / Cabeçalho */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 mb-10">
          
          {/* Foto de Perfil */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl flex-shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
              <Image
                src="/suedsonfernando.jpeg"
                alt="Suedson Fernando"
                fill
                sizes="(max-width: 768px) 160px, 192px"
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Dados Pessoais e Botões */}
          <div className="text-center md:text-left space-y-3 flex-1">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Suedson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fernando</span>
            </h1>
            <p className="text-lg font-semibold text-blue-600">
              Estudante de Sistemas para Internet | Residente em Desenvolvimento de Software
            </p>
            <p className="text-slate-600 text-sm">
              Recife, PE • suedsonfernando30@gmail.com • (81) 98566-6163
            </p>

            {/* Ações (Currículo e LinkedIn) */}
            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium items-center">
              <a 
                href="/curriculo-suedson.pdf" 
                download="Curriculo-Suedson-Fernando.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 font-semibold"
              >
                📄 Baixar Currículo
              </a>

              <a 
                href="https://www.linkedin.com/in/suedson-fernando-9a784137a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 font-semibold"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Detalhes e Trajetória */}
        <div className="space-y-8">
          <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
              Objetivo & Perfil Profissional
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Estudante de Sistemas para Internet na <span className="font-semibold text-slate-900">UNICAP</span> e participante de iniciativas de tecnologia em Recife, como o <span className="font-semibold text-blue-600">Embarque Digital</span> no Porto Digital. Focado no desenvolvimento de soluções completas utilizando Java, JavaScript, TypeScript, além do uso estratégico de Inteligência Artificial para automação e produtividade técnica.
            </p>
          </section>

          <section className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/60">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-indigo-600 rounded-full inline-block"></span>
              Formação Acadêmica
            </h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-800 text-lg">Universidade Católica de Pernambuco (UNICAP)</h3>
              <p className="text-sm text-slate-600 font-medium">Superior Tecnológico em Sistemas para Internet</p>
              <p className="text-xs text-slate-500">Previsão de conclusão: 12/2027</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}