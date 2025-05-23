import React from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import DISC from './pages/DISC';

export const DiscRoutes = [
  {
    path: '/disc',
    element: (
      <ProtectedRoute>
        <DISC />
      </ProtectedRoute>
    )
  }
];
