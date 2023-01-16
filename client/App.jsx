import React, { useEffect, useState } from 'react';

//import './stylesheets/styles.css';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [authModal, setAuthModal] = useState('login')
  
  if (!loggedIn && authModal === 'login') {
    return <Login setLoggedIn={setLoggedIn} setAuthModal={setAuthModal}/>;
  } else if (!loggedIn && authModal === 'signup') {
    return <Signup setLoggedIn={setLoggedIn} setAuthModal={setAuthModal}/>
  } else {
    return (
      <Home/>
    );
  }
}

/*
const App = () => {
  return (<Home/>)
}*/
export default App;
