import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/useAuthContext';

const Login = ({ setLoggedIn, setAuthModal}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setLoggedInUser } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch('/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const id = await data.json();
      setLoggedIn(id)
      setLoggedInUser(id);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (<div>
            <form onSubmit={onSubmit}>
                <input name="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
                <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
                <input type='submit' value="login"/>
            </form>
            <button onClick={()=>setAuthModal('signup')}>Sign up</button>
          </div>);
};

export default Login;
