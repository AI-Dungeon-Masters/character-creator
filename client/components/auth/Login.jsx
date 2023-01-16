import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/useAuthContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loggedInUser, setLoggedInUser } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch('/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const id = await data.json();
      setLoggedInUser(id);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
      <form onSubmit={onSubmit}>
          <input name="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="username"/>
          <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
          <input type='submit' value="login"/>
          <br/>
          <Link to={'/signup'}>Sign up</Link>
      </form>);
};

export default Login;
