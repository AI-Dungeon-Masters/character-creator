import React from 'react';

import { useAuth } from '../context/useAuthContext';

const Home = () => {
  const { loggedInUser } = useAuth();
  return (<div>
    { loggedInUser }
  </div>);
};

export default Home;
