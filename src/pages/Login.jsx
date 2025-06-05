import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // Initialize useNavigate

  if (isAuthenticated) {
    // If already authenticated, redirect to menu
    return <Navigate to="/menu" replace />;
  }

  // Handler for anonymous access
  const handleAnonymousAccess = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Comunicação no Casamento</h1>
          <p className="text-gray-600">
            Um sistema de apoio para fortalecer relacionamentos na nossa comunidade
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-4">
            Este sistema oferece ferramentas para melhorar a comunicação e o entendimento entre casais,
            com base nos conceitos apresentados nos encontros da nossa comunidade.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-sm text-blue-700">
              Acesse os módulos:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-blue-700">
              <li>Perfil DISC</li>
              <li>Círculos de Relacionamento</li>
              <li>5 Linguagens do Amor</li>
            </ul>
          </div>
        </div>

        {/* Auth0 Login Button */}
        <button
          onClick={() => loginWithRedirect()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-all mb-4" // Added margin bottom
        >
          Entrar com Auth0 (Recomendado)
        </button>

        {/* Anonymous Access Button */}
        <button
          onClick={handleAnonymousAccess}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-md font-medium transition-all"
        >
          Acessar como Visitante
        </button>

      </div>
    </div>
  );
};

export default Login;
