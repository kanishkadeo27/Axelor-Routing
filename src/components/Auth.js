import { useState, createContext, useContext } from "react";

//create auth context using createContext hook
const AuthContext = createContext(null);
//auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
//function return the value of auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
