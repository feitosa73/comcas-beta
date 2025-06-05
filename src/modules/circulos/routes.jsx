import React from 'react';
import CirculosRelacionamento from './pages/CirculosRelacionamento';

export const CirculosRoutes = [
  {
    path: '/circulos',
    // Removed ProtectedRoute wrapper to allow anonymous access
    element: <CirculosRelacionamento />
  }
];
