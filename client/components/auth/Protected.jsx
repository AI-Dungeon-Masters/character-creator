import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ userId, children }) => {

  if (!userId) {
    return <Navigate to="/login" replace />
  }
  return children;
}
export default Protected;