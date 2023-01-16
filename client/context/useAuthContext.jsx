import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext({ loggedInUser: null, logout: null });

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const logout = () => {
    console.log('logging out!!!');
  };

  useEffect(() => {
    console.log(Cookies.get('publicKey'));
    console.log(Cookies.get('token'));
    //console.log(Cookies.get(publicKey));
    //fetch();
  });

  return (
    <AuthContext.Provider value={{ loggedInUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
