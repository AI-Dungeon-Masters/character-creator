import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login
      <form method="POST" action='/login'>
          <input name="username" type="text" placeholder="username"/>
          <input name="password" type="password" placeholder="password"/>
          <input type='submit' value="login"/>
      </form>
      <Link to={'/signup'}>Sign up</Link>
    </div>);
};

export default Login;
