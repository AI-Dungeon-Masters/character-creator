import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

//import './stylesheets/styles.css';

import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Protected from './components/auth/Protected';

class App extends Component {
  render() {
    let id = null;
    
    const token = Cookies.get('token');
    if (token) {
      const payload = jwt_decode(token);
      id = payload.id;
    };

    return (
      <div className="router">
        <main>
          <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/" element={<Protected userId={id}>
                                              <Home/>
                                            </Protected>}/>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
