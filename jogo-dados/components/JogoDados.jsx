// components/JogoDados.jsx
'use client';

import { useState } from 'react';
import Dado from './Dado';

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState(1); // 1 = Jogador 1, 2 = Jogador 2
  
  const [dadosJ1, setDadosJ1] = useState([null, null]);
  const [dadosJ2, setDadosJ2] = useState([null, null]);
  
  const [vitoriasJ1, setVitoriasJ1] = useState(0);
  const [vitoriasJ2, setVitoriasJ2] = useState(0);
  
  const [mensagemRodada, setMensagemRodada] = useState('');
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const sortearDado = () => Math.floor(Math.random() * 6) + 1;

  const jogarJ1 = () => {
    const d1 = sortearDado();
    const d2 = sortearDado();
    setDadosJ1([d1, d2]);
    setTurno(2); // Passa a vez para o Jogador 2
  };

  const jogarJ2 = () => {
    const d1 = sortearDado();
    const d2 = sortearDado();
    setDadosJ2([d1, d2]);

    // Soma dos dados
    const somaJ1 = dadosJ1[0] + dadosJ1[1];
    const somaJ2 = d1 + d2;

    let resRodada = '';
    let v1 = vitoriasJ1;
    let v2 = vitoriasJ2;

    if (somaJ1 > somaJ2) {
      resRodada = 'Jogador 1 venceu';
      v1 += 1;
      setVitoriasJ1(v1);
    } else if (somaJ2 > somaJ1) {
      resRodada = 'Jogador 2 venceu';
      v2 += 1;
      setVitoriasJ2(v2);
    } else {
      resRodada = 'Empate';
    }

    setMensagemRodada(resRodada);

    // Controle de rodadas (máximo 5)
    if (rodada < 5) {
      setRodada(prev => prev + 1);
      setTurno(1);
    } else {
      setFimDeJogo(true);
    }
  };

  const reiniciarJogo = () => {
    setRodada(1);
    setTurno(1);
    setDadosJ1([null, null]);
    setDadosJ2([null, null]);
    setVitoriasJ1(0);
    setVitoriasJ2(0);
    setMensagemRodada('');
    setFimDeJogo(false);
  };

  const getResultadoFinal = () => {
    if (vitoriasJ1 > vitoriasJ2) return 'Jogador 1 venceu o jogo';
    if (vitoriasJ2 > vitoriasJ1) return 'Jogador 2 venceu o jogo';
    return 'Empate geral';
  };

  return (
    <div className="w-full max-w-xl bg-white border-2 border-black rounded-xl p-6 shadow-xl flex flex-col items-center text-black">
      <h1 className="text-3xl font-bold mb-2">Jogo de Dados</h1>
      <h2 className="text-xl font-semibold mb-6">Rodada {rodada}/5</h2>

      {/* Jogadores */}
      <div className="grid grid-cols-2 gap-8 w-full border-b-2 border-gray-200 pb-6 mb-6">
        
        {/* Jogador 1 */}
        <div className="flex flex-col items-center gap-4 border-r-2 border-gray-200 pr-4">
          <h3 className="text-lg font-bold">Jogador 1</h3>
          <div className="flex gap-2">
            <Dado valor={dadosJ1[0]} />
            <Dado valor={dadosJ1[1]} />
          </div>
          <button
            onClick={jogarJ1}
            disabled={turno !== 1 || fimDeJogo}
            className="mt-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Jogar
          </button>
        </div>

        {/* Jogador 2 */}
        <div className="flex flex-col items-center gap-4 pl-4">
          <h3 className="text-lg font-bold">Jogador 2</h3>
          <div className="flex gap-2">
            <Dado valor={dadosJ2[0]} />
            <Dado valor={dadosJ2[1]} />
          </div>
          <button
            onClick={jogarJ2}
            disabled={turno !== 2 || fimDeJogo}
            className="mt-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition"
          >
            Jogar
          </button>
        </div>
      </div>

      {/* Caixa de Mensagem */}
      <div className="w-full text-center min-h-[60px] flex items-center justify-center border-2 border-black rounded-lg p-3 bg-gray-50 mb-6">
        <span className="text-xl font-bold">
          {fimDeJogo ? getResultadoFinal() : (mensagemRodada || 'Aguardando jogada...')}
        </span>
      </div>

      {/* Botão Jogar Novamente (só no final) */}
      {fimDeJogo && (
        <button
          onClick={reiniciarJogo}
          className="px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition"
        >
          Jogar novamente
        </button>
      )}
    </div>
  );
}