import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

//import './stylesheets/styles.css';

import { AuthProvider } from './contexts/useAuthContext';
import AuthLayout from './components/auth/AuthLayout';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

class App extends Component {
  render() {
    return (
      <div className="router">
        <main>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
              <Route element={<AuthLayout /> } >
                <Route exact path="/" element={<Home/>} />
              </Route>
            </Routes>
          </AuthProvider>
        </main>
      </div>
    );
  }
}

export default App;
