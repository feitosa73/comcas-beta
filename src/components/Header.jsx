import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, showBackButton = true }) => {
  const navigate = useNavigate();

  return (
    <header className="mb-6">
      {showBackButton && (
        <button 
          onClick={() => navigate('/menu')} 
          className="back-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar ao Menu
        </button>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
    </header>
  );
};

export default Header;
