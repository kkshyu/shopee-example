import React, { useEffect } from "react";
import { useState } from "react";

const defaultContextValue = {
  isAuthenticated: false,
};
const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultContextValue.isAuthenticated
  );

  useEffect(() => {
    try {
      const authState = JSON.parse(localStorage.getItem("shopee:auth.state"));
      if (authState && authState.token) {
        setIsAuthenticated(true);
      }
    } catch {}
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login: async (username, password) => {
          console.log(username, password);
          if (username === "test") {
            const token = "good_token";
            localStorage.setItem(
              "shopee:auth.state",
              JSON.stringify({ token })
            );
            setIsAuthenticated(true);
            return { token };
          }
          setIsAuthenticated(false);
          return { token: null, error: "invalid password" };
        },
        logout: async () => {
          setIsAuthenticated(false);
          localStorage.removeItem("shopee:auth.state");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
