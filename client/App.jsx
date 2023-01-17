import React, { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

//import './stylesheets/styles.css';

import { AuthProvider } from './context/useAuthContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Protected from './components/auth/Protected';
import Home from './pages/Home';



import FinalChar from './pages/finalChar';
import Authapp from './components/Authapp.jsx';
const App = () => {
  
    const changeState = (change, newValue) => {
      change(newValue)
    }

   

  
    
    let id = null;

    const token = Cookies.get('token');
    if (token) {
      const payload = jwt_decode(token);
      id = payload.id;
    };

    return (
      <div className="router">
        <main>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route exact path="/" element={
                  <Protected userId={id}>
                    <Authapp/>
                  </Protected>}/>
                </Routes>
          </AuthProvider>
        </main>

      </div>
    );
}

export default App;
