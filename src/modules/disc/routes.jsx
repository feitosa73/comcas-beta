import React from 'react';
import DISC from './pages/DISC';

export const DiscRoutes = [
  {
    path: '/disc',
    // Removed ProtectedRoute wrapper to allow anonymous access
    element: <DISC />
  }
];
