import React from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import CirculosRelacionamento from './pages/CirculosRelacionamento';

export const CirculosRoutes = [
  {
    path: '/circulos',
    element: (
      <ProtectedRoute>
        <CirculosRelacionamento />
      </ProtectedRoute>
    )
  }
];
