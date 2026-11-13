import Navbar from '@/components/Navbar';

interface GitHubProfile {
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export default async function ApiTestesPage() {
  const username = 'suedsonjunior';
  const response = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl">
            <h2 className="font-bold text-lg">Erro {response.status} ao buscar dados</h2>
            <p className="text-sm mt-1">
              Não foi possível encontrar o usuário <strong>@{username}</strong> na API do GitHub.
            </p>
          </div>
        </main>
      </div>
    );
  }

  const data: GitHubProfile = await response.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 text-slate-900">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black text-slate-900 mb-2">
          Integração com <span className="text-blue-600">API Pública</span>
        </h1>
        <p className="text-slate-600 mb-8">
          Dados consumidos em tempo real da API oficial do GitHub usando Server Components no Next.js.
        </p>

        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-200/60 flex flex-col sm:flex-row items-center gap-6">
          {data.avatar_url && (
            <img
              src={data.avatar_url}
              alt={data.name || data.login}
              className="w-24 h-24 rounded-full border-2 border-blue-600 shadow-md object-cover"
            />
          )}

          <div className="text-center sm:text-left space-y-2 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {data.name || data.login}
                </h2>
                <span className="text-xs font-medium text-slate-500">
                  @{data.login}
                </span>
              </div>

              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors"
              >
                Ver Perfil no GitHub ↗
              </a>
            </div>

            <p className="text-slate-600 text-sm pt-1">
              {data.bio || 'Desenvolvedor em formação • Sistemas para Internet (UNICAP) & Embarque Digital.'}
            </p>

            <div className="pt-3 flex flex-wrap justify-center sm:justify-start gap-3 text-sm font-semibold">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg border border-blue-100">
                📦 {data.public_repos ?? 0} Repositórios Públicos
              </span>
              <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-lg border border-indigo-100">
                👥 {data.followers ?? 0} Seguidores
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}