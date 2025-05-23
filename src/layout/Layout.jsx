import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Layout = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && (
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">Comunicação no Casamento</h1>
            <div className="flex items-center">
              <div className="mr-4 text-right hidden md:block">
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
        </header>
      )}
      
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-gray-100 border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Comunicação no Casamento - Sistema de Apoio</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
