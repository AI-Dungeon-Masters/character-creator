import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../../contexts/useAuthContext';

const AuthLayout = () => {
  const { loggedInUser } = useAuth();
  
  if (loggedInUser !== null) {
    return <Outlet />;
  }

  return <Navigate to={"/login"} replace />;
};

export default AuthLayout;
