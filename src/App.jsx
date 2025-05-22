import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Login from './pages/Login';
import Menu from './pages/Menu';
import DISC from './pages/DISC';
import CirculosRelacionamento from './pages/CirculosRelacionamento';
import LinguagensDoAmor from './pages/LinguagensDoAmor';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Auth0Provider
      domain="dev-w73ygxm7ju124rjf.us.auth0.com"
      clientId="c6ZNd97V7W7hCWDmYKOsl8xMZPuDTZiw"
      redirectUri={window.location.origin}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/menu" 
            element={
              <ProtectedRoute>
                <Menu />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/disc" 
            element={
              <ProtectedRoute>
                <DISC />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/circulos" 
            element={
              <ProtectedRoute>
                <CirculosRelacionamento />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/linguagens" 
            element={
              <ProtectedRoute>
                <LinguagensDoAmor />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
