import React, { useState } from 'react';
import Header from '../../../components/Header';
import reflexoes from '../../../../public/reflexoes.json';

const LinguagensDoAmor = () => {
  const [page, setPage] = useState(0);
  const [role, setRole] = useState("");
  const [answers1, setAnswers1] = useState([]);
  const [answers2, setAnswers2] = useState([]);

  const questions = [
    ["Quando penso em um momento especial, lembro de:", "Receber um elogio sincero.", "Alguém fazendo algo por mim com carinho."],
    ["Sinto-me mais valorizado(a) quando:", "Passo um tempo de qualidade com quem amo.", "Ganho um presente inesperado."],
    ["Em um dia difícil, o que mais me ajuda é:", "Um abraço apertado e acolhedor.", "Ouvir palavras de encorajamento e apoio."],
    ["Me sinto mais conectado(a) quando:", "Alguém para tudo para estar comigo.", "Me surpreendem com algo que pensaram em mim."],
    ["Quando estou apaixonado(a), eu prefiro:", "Tocar e ser tocado(a), com gestos de carinho.", "Receber ajuda prática com algo que preciso resolver."],
    ["Em um relacionamento, valorizo mais:", "Ter tempo exclusivo e conversas profundas.", "Ouvir frases que expressem amor e admiração."],
    ["Em um aniversário, o que mais me emociona é:", "Um presente bem pensado.", "Alguém me ajudando com algo que estou sobrecarregado(a)."],
    ["Em momentos simples, gosto quando:", "Caminhamos de mãos dadas ou ficamos próximos fisicamente.", "A pessoa diz que está orgulhosa de mim."],
    ["Uma lembrança marcante para mim seria:", "Receber ajuda sem ter que pedir.", "Ter alguém tirando um tempo só para mim."],
    ["Quando alguém demonstra amor, fico mais tocado(a) por:", "Algo que ela disse.", "Algo que ela fez por mim."],
    ["Me sinto cuidado(a) quando:", "Alguém prepara algo para mim.", "Alguém diz que me ama."],
    ["Sinto-me amado(a) quando:", "Recebo um presente significativo.", "Tenho um tempo de conversa verdadeira."],
    ["Prefiro que:", "Me abracem forte.", "Digam que estão comigo sempre."],
    ["Um gesto de amor é:", "Passar tempo junto sem distrações.", "Fazer algo que me ajuda sem que eu peça."],
    ["Sinto mais conexão quando:", "Andamos de mãos dadas.", "Ouvimos um ao outro profundamente."],
    ["Em tempos difíceis, gosto de:", "Receber presentes que mostram carinho.", "Escutar palavras de consolo."],
    ["O que mais me surpreende:", "Alguém aparecer para me ajudar de repente.", "Alguém lembrar de algo importante para mim."],
    ["O que me deixa mais feliz:", "Conversar sobre a vida com calma.", "Receber um carinho físico inesperado."],
    ["Quando preciso me sentir amado(a):", "Gosto de ouvir palavras de carinho.", "Gosto que façam algo por mim."],
    ["Minha melhor lembrança amorosa envolve:", "Um presente simbólico.", "Um momento só nosso."]
  ];

  const resultLabels = ["Palavras de Afirmação", "Tempo de Qualidade", "Atos de Serviço", "Presentes", "Toque Físico"];

  const handleAnswer = (questionIndex, answerIndex, setAnswers, answers) => {
    const updated = [...answers];
    updated[questionIndex] = answerIndex;
    setAnswers(updated);
  };

  const calculateResults = (answers) => {
    const scores = [0, 0, 0, 0, 0];
    const map = [
      0, 1, 4, 1, 2, 1, 3, 4, 3, 0,
      3, 1, 4, 2, 4, 3, 2, 0, 2, 1
    ];
    answers.forEach((answer, i) => {
      if (answer === 0 || answer === 1) scores[map[i]] += answer === 0 ? 1 : 0;
      if (answer === 0 || answer === 1) scores[(map[i] + 1) % 5] += answer === 1 ? 1 : 0;
    });
    return scores;
  };

  const getTopLanguage = (scores) => {
    const max = Math.max(...scores);
    const index = scores.indexOf(max);
    return resultLabels[index];
  };

  const generateReflection = (lang1, lang2) => {
    const chave = `${lang1}|${lang2}`;
    const chaveInversa = `${lang2}|${lang1}`;
    const dados = reflexoes[chave] || reflexoes[chaveInversa];

    if (dados) {
      return (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Reflexão</h4>
          <p className="mb-2">{dados.reflexao}</p>
          <p><strong>Dica prática:</strong> {dados.orientacao}</p>
        </div>
      );
    } else {
      return (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Reflexão</h4>
          <p className="mb-2">Essas linguagens podem ser diferentes, e isso não é um problema — é uma oportunidade.</p>
          <p><strong>Dica prática:</strong> Aprender a linguagem do outro é um gesto de amor. Experimentem se comunicar no idioma afetivo do parceiro.</p>
        </div>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {page >= 1 && (
        <Header title="As 5 Linguagens do Amor" />
      )}
      
      <div className="card">
        {page === 0 && (
          <div>
            <h1 className="text-2xl font-bold mb-4">As 5 Linguagens do Amor</h1>
            <p className="mb-6 text-gray-700">
              Descubra como você e seu cônjuge preferem dar e receber amor. Este teste ajudará a identificar 
              sua linguagem predominante com base em situações cotidianas.
            </p>
            <p className="mb-6 text-gray-700">
              As 5 Linguagens do Amor são:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li><strong>Palavras de Afirmação:</strong> Expressar amor através de palavras de encorajamento, elogios e apreciação.</li>
              <li><strong>Tempo de Qualidade:</strong> Dedicar atenção total e momentos exclusivos à pessoa amada.</li>
              <li><strong>Atos de Serviço:</strong> Demonstrar amor através de ações e ajuda prática.</li>
              <li><strong>Presentes:</strong> Oferecer itens tangíveis que simbolizam amor e consideração.</li>
              <li><strong>Toque Físico:</strong> Expressar afeto através do contato físico como abraços, beijos e carinhos.</li>
            </ul>
            <button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md w-full md:w-auto"
              onClick={() => setPage(1)}
            >
              Começar o Teste
            </button>
          </div>
        )}

        {page === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Quem está respondendo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button 
                className={`p-4 border rounded-md text-center transition-all ${
                  role === "esposo" ? "bg-purple-100 border-purple-500" : "hover:bg-gray-50"
                }`}
                onClick={() => setRole("esposo")}
              >
                Esposo
              </button>
              <button 
                className={`p-4 border rounded-md text-center transition-all ${
                  role === "esposa" ? "bg-purple-100 border-purple-500" : "hover:bg-gray-50"
                }`}
                onClick={() => setRole("esposa")}
              >
                Esposa
              </button>
            </div>
            <button 
              className={`mt-4 px-6 py-3 rounded-md ${
                !role ? "bg-purple-300 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
              disabled={!role} 
              onClick={() => setPage(2)}
            >
              Próximo
            </button>
          </div>
        )}

        {page === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Respostas de {role}</h2>
            <div className="space-y-8">
              {questions.map((q, i) => (
                <div key={i} className="p-4 border rounded-md">
                  <p className="mb-4 font-medium">{i + 1}. {q[0]}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[1, 2].map(opt => (
                      <button
                        key={opt}
                        className={`p-3 border rounded-md text-left transition-all ${
                          answers1[i] === opt - 1 ? "bg-purple-100 border-purple-500" : "hover:bg-gray-50"
                        }`}
                        onClick={() => handleAnswer(i, opt - 1, setAnswers1, answers1)}
                      >
                        {q[opt]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button 
              className={`mt-8 px-6 py-3 rounded-md ${
                answers1.length < questions.length ? "bg-purple-300 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
              disabled={answers1.length < questions.length} 
              onClick={() => setPage(3)}
            >
              Próximo cônjuge
            </button>
          </div>
        )}

        {page === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Respostas do outro cônjuge</h2>
            <div className="space-y-8">
              {questions.map((q, i) => (
                <div key={i} className="p-4 border rounded-md">
                  <p className="mb-4 font-medium">{i + 1}. {q[0]}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[1, 2].map(opt => (
                      <button
                        key={opt}
                        className={`p-3 border rounded-md text-left transition-all ${
                          answers2[i] === opt - 1 ? "bg-purple-100 border-purple-500" : "hover:bg-gray-50"
                        }`}
                        onClick={() => handleAnswer(i, opt - 1, setAnswers2, answers2)}
                      >
                        {q[opt]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button 
              className={`mt-8 px-6 py-3 rounded-md ${
                answers2.length < questions.length ? "bg-purple-300 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
              disabled={answers2.length < questions.length} 
              onClick={() => setPage(4)}
            >
              Ver diagnóstico
            </button>
          </div>
        )}

        {page === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Diagnóstico</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">{role}</h3>
                <div className="space-y-3">
                  {calculateResults(answers1).map((v, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{resultLabels[i]}</span>
                        <span>{v} pontos</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-purple-600 h-3 rounded-full" 
                          style={{ width: `${(v / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded-md">
                  <p className="font-medium">Linguagem Principal:</p>
                  <p className="text-lg">{getTopLanguage(calculateResults(answers1))}</p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Outro cônjuge</h3>
                <div className="space-y-3">
                  {calculateResults(answers2).map((v, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span>{resultLabels[i]}</span>
                        <span>{v} pontos</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-green-600 h-3 rounded-full" 
                          style={{ width: `${(v / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded-md">
                  <p className="font-medium">Linguagem Principal:</p>
                  <p className="text-lg">{getTopLanguage(calculateResults(answers2))}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white border rounded-lg mb-8">
              {generateReflection(
                getTopLanguage(calculateResults(answers1)),
                getTopLanguage(calculateResults(answers2))
              )}
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Como Aplicar Este Conhecimento</h3>
              <p className="mb-4">
                Conhecer as linguagens do amor de vocês é o primeiro passo. Agora é importante:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Praticar diariamente pequenos gestos na linguagem principal do seu cônjuge</li>
                <li>Comunicar suas próprias necessidades de forma clara e amorosa</li>
                <li>Lembrar que as linguagens podem mudar com o tempo e as circunstâncias</li>
                <li>Revisitar este teste periodicamente para acompanhar possíveis mudanças</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
                onClick={() => window.print()}
              >
                Imprimir resultados
              </button>
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setPage(0);
                  setRole("");
                  setAnswers1([]);
                  setAnswers2([]);
                }}
              >
                Refazer o teste
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinguagensDoAmor;
