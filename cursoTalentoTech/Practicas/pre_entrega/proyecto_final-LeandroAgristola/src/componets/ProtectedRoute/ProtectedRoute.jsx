import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { usuario } = useAuth();
  const location = useLocation();

  if (!usuario) {
    // Redirige al login, guardando la ubicación actual para volver después del login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;