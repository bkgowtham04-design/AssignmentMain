import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const registeredUser = JSON.parse(localStorage.getItem("userData"));
    if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
      localStorage.setItem("user", JSON.stringify(registeredUser));
      setUser(registeredUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const register = (email, password) => {
    const credentials = { email, password };
    localStorage.setItem("userData", JSON.stringify(credentials));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
