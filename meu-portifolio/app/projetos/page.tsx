import Navbar from '@/components/Navbar';

export default function ProjetosPage() {
  const projetos = [
    {
      categoria: 'PLATAFORMA WEB COMUNITÁRIA',
      titulo: 'ISAC Conecta',
      descricao:
        'Plataforma desenvolvida para organizar o comércio local de bairro e conectar empreendedores e iniciativas comunitárias em um diretório estruturado.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    },
    {
      categoria: 'HEALTHTECH - PITCH CODAY & BEYOND',
      titulo: 'Solaris',
      descricao:
        'Conceito e protótipo de aplicação mobile white-label voltada para clínicas de dermatologia e acompanhamento de saúde cutânea.',
      tags: ['Figma', 'Prototipação', 'Product Design'],
    },
    {
      categoria: 'ANÁLISE DE DADOS & WEB',
      titulo: 'AcessoEdu Nordeste',
      descricao:
        'Plataforma de visualização e análise de indicadores de infraestrutura escolar no Nordeste brasileiro consumindo dados públicos.',
      tags: ['JavaScript', 'APIs Públicas', 'HTML/CSS'],
    },
    {
      categoria: 'DESENVOLVIMENTO BACKEND • DESAFIO ROCKETSEAT',
      titulo: 'API CRUD de Tarefas',
      descricao:
        'API RESTful em Node.js para gerenciamento completo de tarefas (criação, listagem com filtros, atualização, remoção e conclusão), com rotina de importação em massa via arquivo CSV.',
      tags: ['Node.js', 'API REST', 'csv-parse', 'JavaScript'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-sm border border-slate-200/80 hover:border-blue-500/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  {projeto.categoria}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {projeto.titulo}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {projeto.descricao}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}