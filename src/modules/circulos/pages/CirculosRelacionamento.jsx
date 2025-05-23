import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';

const CirculosRelacionamento = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [draggedName, setDraggedName] = useState(null);
  const [namePositions, setNamePositions] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [savedNames, setSavedNames] = useState([]);
  
  const circlesRef = useRef([]);
  
  const circles = [
    { id: 1, name: 'Íntimo', color: 'rgba(255, 99, 132, 0.2)', border: 'rgba(255, 99, 132, 1)', size: 150 },
    { id: 2, name: 'Pessoal', color: 'rgba(54, 162, 235, 0.2)', border: 'rgba(54, 162, 235, 1)', size: 250 },
    { id: 3, name: 'Social', color: 'rgba(255, 206, 86, 0.2)', border: 'rgba(255, 206, 86, 1)', size: 350 },
    { id: 4, name: 'Público', color: 'rgba(75, 192, 192, 0.2)', border: 'rgba(75, 192, 192, 1)', size: 450 }
  ];
  
  useEffect(() => {
    // Inicializar posições dos nomes já existentes
    const initialPositions = {};
    names.forEach(name => {
      if (!namePositions[name.id]) {
        initialPositions[name.id] = {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          circle: 4 // Círculo público por padrão
        };
      }
    });
    
    setNamePositions(prev => ({ ...prev, ...initialPositions }));
  }, [names]);
  
  const handleAddName = () => {
    if (newName.trim() === '') return;
    
    const nameExists = names.some(n => n.name.toLowerCase() === newName.toLowerCase());
    if (nameExists) {
      alert('Este nome já foi adicionado.');
      return;
    }
    
    const newNameObj = { id: Date.now(), name: newName.trim() };
    setNames(prev => [...prev, newNameObj]);
    
    // Adicionar à lista de nomes salvos para sugestões futuras
    if (!savedNames.includes(newName.trim())) {
      setSavedNames(prev => [...prev, newName.trim()]);
    }
    
    setNewName('');
    setSuggestions([]);
  };
  
  const handleNameChange = (e) => {
    const value = e.target.value;
    setNewName(value);
    
    if (value.trim() !== '') {
      const filtered = savedNames.filter(name => 
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };
  
  const handleSelectSuggestion = (name) => {
    setNewName(name);
    setSuggestions([]);
  };
  
  const handleDragStart = (nameId) => {
    setDraggedName(nameId);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!draggedName) return;
    
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - containerRect.left - containerRect.width / 2;
    const y = e.clientY - containerRect.top - containerRect.height / 2;
    
    // Determinar em qual círculo o nome está
    let circleId = null;
    const distance = Math.sqrt(x * x + y * y);
    
    for (let i = 0; i < circles.length; i++) {
      if (distance <= circles[i].size / 2) {
        circleId = circles[i].id;
      }
    }
    
    if (circleId) {
      setNamePositions(prev => ({
        ...prev,
        [draggedName]: { ...prev[draggedName], x, y, circle: circleId }
      }));
    }
  };
  
  const handleDragEnd = () => {
    setDraggedName(null);
  };
  
  const handleRemoveName = (id) => {
    setNames(prev => prev.filter(name => name.id !== id));
    setNamePositions(prev => {
      const newPositions = { ...prev };
      delete newPositions[id];
      return newPositions;
    });
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddName();
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Header title="Círculos de Relacionamento" />
      
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          Organize suas relações pessoais em círculos de proximidade. Adicione nomes e arraste-os para o círculo apropriado.
        </p>
        
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="name-input-container flex-grow">
            <input
              type="text"
              value={newName}
              onChange={handleNameChange}
              onKeyPress={handleKeyPress}
              placeholder="Digite um nome"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {suggestions.length > 0 && (
              <div className="name-suggestions">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index} 
                    className="suggestion-item"
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={handleAddName}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Adicionar
          </button>
        </div>
      </div>
      
      <div 
        className="relative mb-8 bg-white p-4 rounded-lg shadow-md"
        style={{ height: '600px' }}
        onDragOver={handleDragOver}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {circles.map((circle, index) => (
            <div
              key={circle.id}
              ref={el => circlesRef.current[index] = el}
              className="circle absolute"
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                backgroundColor: circle.color,
                border: `2px solid ${circle.border}`,
                zIndex: 1
              }}
            >
              <span className="absolute bottom-0 text-sm font-medium text-gray-700">
                {circle.name}
              </span>
            </div>
          ))}
          
          {names.map(name => {
            const position = namePositions[name.id] || { x: 0, y: 0, circle: 4 };
            return (
              <div
                key={name.id}
                className="name-tag"
                draggable
                onDragStart={() => handleDragStart(name.id)}
                onDragEnd={handleDragEnd}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: 10
                }}
              >
                <span>{name.name}</span>
                <button 
                  onClick={() => handleRemoveName(name.id)}
                  className="ml-2 text-red-500 text-xs"
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Legenda</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {circles.map(circle => (
            <div key={circle.id} className="flex items-center">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: circle.border }}
              ></div>
              <span>{circle.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Instruções</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Adicione nomes de pessoas do seu círculo social</li>
          <li>Arraste cada nome para o círculo que representa seu nível de proximidade</li>
          <li>Círculo Íntimo: pessoas muito próximas, como cônjuge e familiares diretos</li>
          <li>Círculo Pessoal: amigos próximos e familiares com quem mantém contato frequente</li>
          <li>Círculo Social: conhecidos, colegas de trabalho e amigos distantes</li>
          <li>Círculo Público: pessoas com quem tem contato ocasional ou profissional</li>
        </ul>
      </div>
    </div>
  );
};

export default CirculosRelacionamento;
