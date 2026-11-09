import Navbar from '@/components/Navbar';

export default function Academica() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">Formação Acadêmica</h1>
        <div className="border-l-4 border-blue-600 pl-4 space-y-2">
          <h2 className="text-sm font-semibold text-blue-600">2026 - Presente</h2>
          <p className="text-xl font-bold text-slate-900">Sistemas para Internet</p>
          <p className="text-slate-600 font-medium">Universidade Católica de Pernambuco (UNICAP)</p>
          <p className="text-slate-600 text-sm">Participação no programa Embarque Digital e residência tecnológica no Porto Digital.</p>
        </div>
      </main>
    </div>
  );
}