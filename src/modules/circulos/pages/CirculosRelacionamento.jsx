import React from 'react';

const quadrantes = [
  { label: 'Família', top: '45%', left: '92%', rotate: '-90deg' },
  { label: 'Relacionamentos de Trabalho', top: '92%', left: '58%' },
  { label: 'Relações Comunitárias', top: '45%', left: '-6%', rotate: '90deg' },
  { label: 'Amizades', top: '-6%', left: '58%' }
];

const niveis = [
  { label: 'Íntimos', radius: 132, border: 'border-yellow-300', z: 3 },
  { label: 'Intermediários', radius: 264, border: 'border-yellow-400', z: 2 },
  { label: 'Ocasionais', radius: 396, border: 'border-yellow-500', z: 1 }
];

export default function CirculosRelacionamento() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center bg-white p-4" style={{ width: '100%', height: '1123px' }}>
      <h1 className="text-2xl font-bold mb-4">Círculos de Relacionamento</h1>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-1 bg-green-600 text-white rounded"
      >
        Imprimir
      </button>
      <div className="relative w-[792px] h-[792px] rounded-full border border-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Cruz horizontal e vertical para dividir em 4 quadrantes */}
          <div className="absolute w-1 h-full bg-black left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute h-1 w-full bg-black top-1/2 transform -translate-y-1/2"></div>
        </div>

        {niveis.map((nivel) => (
          <div
            key={nivel.label}
            className={`absolute rounded-full border-4 ${nivel.border} bg-white`}
            style={{
              width: `${nivel.radius * 2}px`,
              height: `${nivel.radius * 2}px`,
              top: `${396 - nivel.radius}px`,
              left: `${396 - nivel.radius}px`,
              zIndex: nivel.z
            }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-white px-2 py-1 border border-black rounded" style={{ top: '4px' }}>
              {nivel.label}
            </div>
          </div>
        ))}

        {quadrantes.map((q) => (
          <div
            key={q.label}
            className="absolute text-xs font-semibold bg-white px-2 py-1 border border-black rounded"
            style={{
              top: q.top,
              left: q.left,
              transform: q.rotate ? `rotate(${q.rotate})` : undefined,
              zIndex: 10,
              whiteSpace: 'nowrap'
            }}
          >
            {q.label}
          </div>
        ))}
      </div>
    </div>
  );
}
