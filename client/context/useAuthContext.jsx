import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext({ loggedInUser: null, logout: null });

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const logout = () => {
    console.log('logging out!!!');
  };

  useEffect(() => {
    /*let id = null;

    const token = Cookies.get('token');
    if (token) {
      const payload = jwt_decode(token);
      id = payload.id;
    };*/
    const token = Cookies.get('token');
    if (token) {
      const payload = jwt_decode(token);
      setLoggedInUser(payload.id);
    };
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
