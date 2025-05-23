import React, { useState } from 'react';
import Header from '../../../components/Header';

const DISC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 1,
      text: "Em um ambiente social, eu geralmente:",
      options: [
        { id: 'D1', text: "Tomo a iniciativa e lidero conversas" },
        { id: 'I1', text: "Sou animado e gosto de interagir com todos" },
        { id: 'S1', text: "Prefiro ouvir e apoiar os outros" },
        { id: 'C1', text: "Observo e analiso antes de me envolver" }
      ]
    },
    {
      id: 2,
      text: "Quando enfrento um desafio, eu normalmente:",
      options: [
        { id: 'D2', text: "Encaro diretamente e busco soluções rápidas" },
        { id: 'I2', text: "Procuro envolver outras pessoas e tornar divertido" },
        { id: 'S2', text: "Considero como isso afetará a todos envolvidos" },
        { id: 'C2', text: "Analiso cuidadosamente todas as opções" }
      ]
    },
    {
      id: 3,
      text: "No trabalho em equipe, eu costumo:",
      options: [
        { id: 'D3', text: "Assumir o controle e definir direções" },
        { id: 'I3', text: "Motivar os outros e gerar entusiasmo" },
        { id: 'S3', text: "Apoiar e manter a harmonia do grupo" },
        { id: 'C3', text: "Garantir que tudo seja feito corretamente" }
      ]
    },
    {
      id: 4,
      text: "Quando preciso tomar uma decisão importante:",
      options: [
        { id: 'D4', text: "Decido rapidamente com base nos resultados esperados" },
        { id: 'I4', text: "Considero o que seria mais empolgante e inovador" },
        { id: 'S4', text: "Penso em como isso afetará as pessoas ao meu redor" },
        { id: 'C4', text: "Avalio cuidadosamente todos os prós e contras" }
      ]
    },
    {
      id: 5,
      text: "Em situações de conflito, eu tendo a:",
      options: [
        { id: 'D5', text: "Enfrentar o problema diretamente e ser assertivo" },
        { id: 'I5', text: "Usar humor e carisma para aliviar a tensão" },
        { id: 'S5', text: "Buscar compromisso e restaurar a harmonia" },
        { id: 'C5', text: "Analisar a situação logicamente e manter a calma" }
      ]
    },
    {
      id: 6,
      text: "Meu ambiente de trabalho ideal é:",
      options: [
        { id: 'D6', text: "Dinâmico, com desafios e oportunidades de liderança" },
        { id: 'I6', text: "Criativo, social e com bastante interação" },
        { id: 'S6', text: "Colaborativo, estável e com bom trabalho em equipe" },
        { id: 'C6', text: "Organizado, estruturado e com regras claras" }
      ]
    },
    {
      id: 7,
      text: "Quando recebo feedback, prefiro que seja:",
      options: [
        { id: 'D7', text: "Direto e focado em resultados" },
        { id: 'I7', text: "Positivo e entusiasmado" },
        { id: 'S7', text: "Gentil e considerado" },
        { id: 'C7', text: "Detalhado e específico" }
      ]
    },
    {
      id: 8,
      text: "Minha maior força é:",
      options: [
        { id: 'D8', text: "Determinação e capacidade de alcançar resultados" },
        { id: 'I8', text: "Entusiasmo e habilidade de inspirar outros" },
        { id: 'S8', text: "Paciência e capacidade de criar harmonia" },
        { id: 'C8', text: "Precisão e atenção aos detalhes" }
      ]
    },
    {
      id: 9,
      text: "Sob pressão, eu tendo a:",
      options: [
        { id: 'D9', text: "Tornar-me mais direto e impaciente" },
        { id: 'I9', text: "Falar mais e buscar apoio social" },
        { id: 'S9', text: "Ficar quieto e evitar confrontos" },
        { id: 'C9', text: "Retirar-me para analisar a situação" }
      ]
    },
    {
      id: 10,
      text: "No meu casamento, meu cônjuge provavelmente diria que eu:",
      options: [
        { id: 'D10', text: "Sou decidido e às vezes dominante" },
        { id: 'I10', text: "Sou sociável e expressivo" },
        { id: 'S10', text: "Sou leal e compreensivo" },
        { id: 'C10', text: "Sou meticuloso e cuidadoso" }
      ]
    }
  ];

  const handleAnswer = (questionId, optionId) => {
    setAnswers({
      ...answers,
      [questionId]: optionId
    });
  };

  const calculateResults = () => {
    const scores = {
      D: 0,
      I: 0,
      S: 0,
      C: 0
    };

    Object.values(answers).forEach(answer => {
      const type = answer.charAt(0);
      scores[type] += 1;
    });

    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    
    const percentages = {
      D: Math.round((scores.D / total) * 100),
      I: Math.round((scores.I / total) * 100),
      S: Math.round((scores.S / total) * 100),
      C: Math.round((scores.C / total) * 100)
    };

    const primaryType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    const descriptions = {
      D: {
        title: "Dominante",
        description: "Você é direto, decisivo e orientado a resultados. Gosta de desafios, ação e controle. No casamento, você pode ser o líder natural, tomando iniciativas e buscando soluções práticas para os problemas.",
        strengths: ["Confiante", "Focado em resultados", "Direto", "Decisivo"],
        challenges: ["Pode parecer impaciente", "Às vezes muito direto", "Pode dominar conversas"],
        communication: "Seja claro e direto. Foque em resultados e soluções, não em problemas. Respeite o tempo que seu cônjuge precisa para processar informações."
      },
      I: {
        title: "Influente",
        description: "Você é entusiasmado, otimista e sociável. Valoriza relacionamentos e expressão emocional. No casamento, você traz energia positiva, criatividade e habilidades sociais que enriquecem a relação.",
        strengths: ["Entusiasmado", "Expressivo", "Otimista", "Sociável"],
        challenges: ["Pode falar mais que ouvir", "Às vezes desorganizado", "Pode evitar conflitos"],
        communication: "Use sua expressividade para compartilhar sentimentos, mas lembre-se de ouvir atentamente. Equilibre diversão com momentos de seriedade quando necessário."
      },
      S: {
        title: "Estável",
        description: "Você é paciente, leal e confiável. Valoriza harmonia e estabilidade. No casamento, você oferece apoio emocional constante e cria um ambiente seguro e previsível.",
        strengths: ["Paciente", "Leal", "Bom ouvinte", "Confiável"],
        challenges: ["Pode resistir a mudanças", "Às vezes muito passivo", "Pode guardar ressentimentos"],
        communication: "Expresse suas necessidades claramente, mesmo quando desconfortável. Não guarde sentimentos para evitar conflitos. Valorize a estabilidade, mas esteja aberto a mudanças."
      },
      C: {
        title: "Consciencioso",
        description: "Você é analítico, detalhista e organizado. Valoriza qualidade, precisão e ordem. No casamento, você traz planejamento cuidadoso e atenção aos detalhes que ajudam a manter a relação estruturada.",
        strengths: ["Analítico", "Organizado", "Detalhista", "Cuidadoso"],
        challenges: ["Pode ser perfeccionista", "Às vezes muito crítico", "Pode parecer distante"],
        communication: "Equilibre análise com empatia. Nem tudo precisa ser perfeito. Demonstre afeto mesmo quando focado em tarefas ou detalhes."
      }
    };

    return {
      scores,
      percentages,
      primaryType,
      description: descriptions[primaryType]
    };
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const results = calculateResults();
      setResults(results);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers({});
    setResults(null);
  };

  const currentQuestion = questions[currentStep - 1];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header title="Perfil DISC" />
      
      {!results ? (
        <div className="card">
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4">
              O perfil DISC ajuda a identificar seu estilo comportamental e como ele influencia sua comunicação no casamento.
              Responda às perguntas abaixo escolhendo a opção que melhor descreve você na maioria das situações.
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(currentStep / questions.length) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
              Pergunta {currentStep} de {questions.length}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{currentQuestion.text}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <div 
                  key={option.id}
                  className={`p-3 border rounded-md cursor-pointer transition-all ${
                    answers[currentQuestion.id] === option.id 
                      ? 'bg-blue-50 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md ${
                currentStep === 1 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Anterior
            </button>
            
            <button 
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className={`px-4 py-2 rounded-md ${
                !answers[currentQuestion.id] 
                  ? 'bg-blue-300 text-white cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === questions.length ? 'Ver Resultados' : 'Próxima'}
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Seu Perfil DISC</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Resultado Principal: {results.description.title}</h3>
            <p className="text-gray-700 mb-4">{results.description.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Seus Pontos Fortes:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {results.description.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Seus Desafios:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {results.description.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Dicas de Comunicação no Casamento:</h4>
              <p className="text-gray-700">{results.description.communication}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Distribuição do seu Perfil</h3>
            
            <div className="space-y-4">
              {Object.keys(results.percentages).map(type => {
                const titles = {
                  D: "Dominante",
                  I: "Influente",
                  S: "Estável",
                  C: "Consciencioso"
                };
                
                return (
                  <div key={type}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{type} - {titles[type]}</span>
                      <span>{results.percentages[type]}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full ${
                          type === 'D' ? 'bg-red-500' :
                          type === 'I' ? 'bg-yellow-500' :
                          type === 'S' ? 'bg-green-500' :
                          'bg-blue-500'
                        }`}
                        style={{ width: `${results.percentages[type]}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Como Usar Este Resultado</h3>
            <p className="text-gray-700 mb-4">
              Conhecer seu perfil DISC pode ajudar você a entender melhor seus padrões naturais de comportamento e comunicação.
              No contexto do casamento, este conhecimento permite:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>Reconhecer suas tendências naturais e como elas afetam seu relacionamento</li>
              <li>Adaptar sua comunicação para ser mais eficaz com seu cônjuge</li>
              <li>Antecipar possíveis áreas de conflito baseadas em diferenças de estilo</li>
              <li>Valorizar as diferenças como complementares, não como obstáculos</li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={handleRestart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Refazer o Teste
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DISC;
