import React, { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Race from './pages/race'
import Class from './pages/class'
import Alignment from './pages/alignment'
import FinalChar from './pages/finalChar'

//import './stylesheets/styles.css';

const App = () => {

    const [race, setRace] = useState('');
    const [charClass, setCharClass] = useState('');
    const [alignment, setAlignment] = useState('');

    const changeState = (change, newValue) => {
      change(newValue)
    }

    const dndNames = ['Regdar', 'Todrdek', 'Alhandra', 'Eberk', 'Athain', 'Arthon', 'Kazak', 'Ragnara', 'Sandharrow', 'Morthos',]



    console.log('App')

    return (
      <div className="router">
        {/* <Navbar /> */}
          <h1>App</h1>
          <main>
            <Routes>
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
          </main>
      </div>
    );
}

export default App;
