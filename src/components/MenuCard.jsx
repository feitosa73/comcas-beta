import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuCard = ({ title, description, icon, path, color = 'blue' }) => {
  const navigate = useNavigate();
  
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
    green: 'bg-green-50 border-green-200 hover:bg-green-100',
    purple: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
    orange: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
  };
  
  const buttonColors = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-600 hover:bg-orange-700'
  };

  return (
    <div className={`card menu-card border ${colorClasses[color]} p-6`}>
      <div>
        <div className="menu-card-icon text-gray-700">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <button 
        onClick={() => navigate(path)} 
        className={`${buttonColors[color]} text-white py-2 px-4 rounded-md w-full`}
      >
        Acessar
      </button>
    </div>
  );
};

export default MenuCard;
