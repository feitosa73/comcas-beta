import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Comunicação no Casamento</h1>
        <p className="text-lg text-gray-700 mt-4">
          Bem-vindo ao sistema de apoio para casais da nossa comunidade. 
          Aqui você encontrará ferramentas para fortalecer a comunicação no seu casamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MenuCard 
          title="DISC" 
          description="Descubra seu perfil comportamental e como ele influencia sua comunicação no casamento."
          icon={<span>🧠</span>}
          path="/disc"
          color="blue"
        />
        <MenuCard 
          title="Círculos de Relacionamento" 
          description="Visualize e organize suas relações pessoais em círculos de proximidade e intimidade."
          icon={<span>⭕</span>}
          path="/circulos"
          color="green"
        />
        <MenuCard 
          title="5 Linguagens do Amor" 
          description="Identifique como você e seu cônjuge preferem dar e receber amor."
          icon={<span>❤️</span>}
          path="/linguagens"
          color="purple"
        />
      </div>
    </div>
  );
};

export default Menu;
