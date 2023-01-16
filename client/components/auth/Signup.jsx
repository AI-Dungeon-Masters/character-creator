import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      Signup
      <form method='POST' action='/signup'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="create user"></input>
      </form>
      <Link to={'/login'}>Sign up</Link>
    </div>);
};

export default Signup;
