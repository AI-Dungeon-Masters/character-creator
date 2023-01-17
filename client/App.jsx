import React, { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

//import './stylesheets/styles.css';

import { AuthProvider } from './context/useAuthContext';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Protected from './components/auth/Protected';
import Home from './pages/Home';
import Race from './pages/race'
import Class from './pages/class'
import Alignment from './pages/alignment'
import FinalChar from './pages/finalChar'

const App = () => {
  const [race, setRace] = useState('');
    const [charClass, setCharClass] = useState('');
    const [alignment, setAlignment] = useState('');

    const changeState = (change, newValue) => {
      change(newValue)
    }

    const dndNames = ['Regdar', 'Todrdek', 'Alhandra', 'Eberk', 'Athain', 'Arthon', 'Kazak', 'Ragnara', 'Sandharrow', 'Morthos',]



    console.log('App')
    let id = null;

    const token = Cookies.get('token');
    if (token) {
      const payload = jwt_decode(token);
      id = payload.id;

    return (
      <div className="router">
        <main>
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
                <Route 
                path='/'
                element={<Home></Home> }/>
              <Route
                path='/race'
                element={<Race race={race} setRace={setRace} changeState={changeState}></Race>}/>
              <Route
                path='/class'
                element={<Class></Class>}/>
              <Route
                path='/alignment'
                element={<Alignment></Alignment>}/>
              <Route
                path='/finalChar'
                element={<FinalChar></FinalChar>}/>
            </Routes>
          </AuthProvider>
        </main>
      </div>
    );
    }
  }

export default App;
