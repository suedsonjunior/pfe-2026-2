import Navbar from '@/components/Navbar';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Sobre Mim</h1>
        <p className="text-slate-700 leading-relaxed">
          Olá! Meu nome é Suedson Fernando, sou estudante da Univesidade da Católica de Pernambuco e aluno do Embarque Digital, faço o curso de Sistemas para Internet , focado em desenvolvimento web, criatividade e tecnologia. Gosto de criar soluções dinâmicas utilizando ferramentas modernas como Next.js, React e Tailwind CSS.
        </p>
      </main>
    </div>
  );
}