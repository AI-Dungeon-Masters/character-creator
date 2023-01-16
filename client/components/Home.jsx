import React from 'react';

import { useAuth } from '../context/useAuthContext';

const Home = () => {
  const { loggedInUser } = useAuth();
  console.log('home + ' + loggedInUser);
  return (<div>
    AHHHH
  </div>);
};

export default Home;
