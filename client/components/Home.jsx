import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../context/useAuthContext';

const Home = () => {
  const { loggedInUser } = useAuth();
  return (<>
            {loggedInUser}
          </>);
};

export default Home;
