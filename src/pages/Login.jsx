import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/menu" replace />;
  }

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
              Faça login para acessar os módulos:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-blue-700">
              <li>Perfil DISC</li>
              <li>Círculos de Relacionamento</li>
              <li>5 Linguagens do Amor</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => loginWithRedirect()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-all"
        >
          Entrar com Auth0
        </button>
      </div>
    </div>
  );
};

export default Login;
