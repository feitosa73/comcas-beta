import React from 'react';
import LinguagensDoAmor from './pages/LinguagensDoAmor';

export const LinguagensRoutes = [
  {
    path: '/linguagens',
    // Removed ProtectedRoute wrapper to allow anonymous access
    element: <LinguagensDoAmor />
  }
];
