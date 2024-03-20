import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext({ user: null, setUser: () => {} });

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}; 