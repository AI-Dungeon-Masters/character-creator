import React from 'react';

const Signup = () => {
  return (
    <div>
      Signup
      <form method='POST' action='/signup'>
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="create user"></input>
      </form>
    </div>);
};

export default Signup;
