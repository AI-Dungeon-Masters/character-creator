import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/useAuthContext';
import App from './App';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Protected from './components/auth/Protected';

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route index element={
          <Protected>
            <App />
          </Protected>}/>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
