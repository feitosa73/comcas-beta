import React from 'react';

export default function CirculosRelacionamento() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center bg-white p-8 print:p-4" style={{ width: '100%', height: '1123px' }}>
      <h1 className="text-2xl font-bold mb-6 print:text-lg">Círculos de Relacionamento</h1>

      <button
        onClick={handlePrint}
        className="mb-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 print:hidden"
      >
        Imprimir
      </button>

      <p className="text-center max-w-xl mb-6 text-sm print:text-xs">
        Imprima duas vias. Cada pessoa deve preencher individualmente e depois comparar com o parceiro para identificar afinidades e discrepâncias.
      </p>

      <div className="relative w-[560px] h-[560px] print:scale-95 print:mt-4">
        {/* Círculos concêntricos */}
        <div className="absolute rounded-full border-2 border-purple-600 w-[180px] h-[180px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute rounded-full border-2 border-sky-400 w-[360px] h-[360px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute rounded-full border-2 border-black w-[560px] h-[560px] top-0 left-0" />

        {/* Divisões em quadrantes (visíveis na impressão) */}
        <div className="absolute w-[1px] h-full bg-black left-1/2 top-0 transform -translate-x-1/2 print:bg-black" />
        <div className="absolute h-[1px] w-full bg-black top-1/2 left-0 transform -translate-y-1/2 print:bg-black" />

        {/* Etiquetas dos quadrantes (reajustadas para fora dos círculos) */}
        <div className="absolute text-sm top-[5%] left-[83%] transform -translate-x-1/2 -translate-y-1/2 print:text-xs">Amizades</div>
        <div className="absolute text-sm bottom-[5%] left-[83%] transform -translate-x-1/2 translate-y-1/2 print:text-xs">Relações Comunitárias</div>
        <div className="absolute text-sm bottom-[5%] left-[17%] transform -translate-x-1/2 translate-y-1/2 print:text-xs">Relações de Trabalho</div>
        <div className="absolute text-sm top-[5%] left-[17%] transform -translate-x-1/2 -translate-y-1/2 print:text-xs">Família</div>
      </div>
    </div>
  );
}
