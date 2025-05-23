import React from 'react';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from '../../components/ProtectedRoute';
import LinguagensDoAmor from './pages/LinguagensDoAmor';

export const LinguagensRoutes = [
  {
    path: '/linguagens',
    element: (
      <ProtectedRoute>
        <LinguagensDoAmor />
      </ProtectedRoute>
    )
  }
];
