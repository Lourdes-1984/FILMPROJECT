import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveLoginState = (state) => localStorage.setItem("AUTH_KEY", state);

  const getLoginState = () => localStorage.getItem("AUTH_KEY");

  const removeLoginState = () => localStorage.removeItem("AUTH_KEY");

  useEffect(() => {
    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;
        setIsLoggedIn(loginState);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoggedIn(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoggedIn(true);
    saveLoginState(true);
  };
  const logout = async () => {
    setIsLoggedIn(false);
    removeLoginState();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
