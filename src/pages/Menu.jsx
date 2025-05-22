import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../components/Header';
import MenuCard from '../components/MenuCard';

const Menu = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <Header title="Comunicação no Casamento" showBackButton={false} />
        <div className="flex items-center">
          <div className="mr-4 text-right">
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
          <button 
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
          >
            Sair
          </button>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-8">
        Bem-vindo ao sistema de apoio para casais da nossa comunidade. 
        Aqui você encontrará ferramentas para fortalecer a comunicação no seu casamento.
      </p>

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
