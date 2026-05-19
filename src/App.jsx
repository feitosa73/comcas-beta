import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

// Importação de módulos
import { DiscRoutes } from './modules/disc';
import { LinguagensRoutes } from './modules/linguagens';
import { CirculosRoutes } from './modules/circulos';

// Componentes de layout e autenticação
import Layout from './layout/Layout';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {
  // Agregação de todas as rotas dos módulos
  const moduleRoutes = [
    ...DiscRoutes,
    ...LinguagensRoutes,
    ...CirculosRoutes
  ];

  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          {/* Rota pública de login */}
          <Route path="/" element={<Login />} />
          
          {/* Rotas protegidas dentro do layout */}
          <Route element={<Layout />}>
            {/* Rota do menu principal */}
            <Route path="/menu" element={<Menu />} />
            
            {/* Rotas dinâmicas dos módulos */}
            {moduleRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
          
          {/* Rota de fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
