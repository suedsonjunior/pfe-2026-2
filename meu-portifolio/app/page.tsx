import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        {/* Banner Principal com Efeito Glassmorphism */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-500 hover:shadow-blue-500/5">
          
          {/* Foto com Animação e Borda Gradiente */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-xl flex-shrink-0 group">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
              <Image
                src="/suedsonfernando.jpeg"
                alt="Suedson Fernando"
                fill
                sizes="(max-width: 768px) 176px, 224px"
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Informações */}
          <div className="text-center md:text-left space-y-4 flex-1">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Portfólio Profissional
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Suedson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Fernando</span>
              </h1>
              <p className="text-lg md:text-xl font-semibold text-slate-600 mt-1">
                Desenvolvedor Full Stack & Estudante de Sistemas para Internet
              </p>
            </div>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Estudante na UNICAP e integrante do <span className="font-semibold text-blue-600">Embarque Digital</span> no Porto Digital. Focado em criar soluções web de alto impacto com Java, JavaScript, TypeScript e Inteligência Artificial.
            </p>

            {/* Contatos com ícones, hover, Currículo e LinkedIn */}
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

              <a href="mailto:suedsonfernando30@gmail.com" className="bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center gap-2">
                ✉️ suedsonfernando30@gmail.com
              </a>
              
              <span className="bg-white text-slate-700 px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                📍 Recife, PE
              </span>
            </div>
          </div>
        </div>

        {/* Seção de Skills com Cards Estilizados */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Stack Técnica */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/60 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full inline-block"></span>
              Stack & Tecnologias
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Java', 'Spring Boot', 'JavaScript', 'TypeScript', 
                'React', 'Next.js', 'Node.js', 'Tailwind CSS', 
                'PostgreSQL', 'Git & GitHub', 'Engenharia de Prompt'
              ].map((skill, index) => (
                <span key={index} className="bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors duration-200 cursor-default border border-slate-200/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/60 hover:border-indigo-500/30 transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-indigo-600 rounded-full inline-block"></span>
              Competências & Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Resolução de Problemas', 'Aprendizado Contínuo', 
                'Trabalho em Equipe', 'Disciplina e Foco', 
                'Comunicação Técnica', 'Adaptabilidade'
              ].map((skill, index) => (
                <span key={index} className="bg-indigo-50/50 hover:bg-indigo-600 hover:text-white text-indigo-900 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors duration-200 cursor-default border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}