import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("authToken"));
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "null"); }
    catch { return null; }
  });

  const isLoggedIn = !!token;
  const isAdmin = user?.role === "admin";

  const storeToken = (t) => {
    if (t) localStorage.setItem("authToken", t);
    else localStorage.removeItem("authToken");
    setToken(t || null);
  };

  const storeUser = (u) => {
    if (u) localStorage.setItem("user", JSON.stringify(u));
    else localStorage.removeItem("user");
    setUser(u || null);
  };

  const logOutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "authToken") setToken(localStorage.getItem("authToken"));
      if (e.key === "user") {
        try { setUser(JSON.parse(localStorage.getItem("user") || "null")); }
        catch { setUser(null); }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({ isLoggedIn, isAdmin, user, storeToken, storeUser, logOutUser }),
    [isLoggedIn, isAdmin, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// hook for files doing: import { useAuth } from '...'
export const useAuth = () => useContext(AuthContext);

// keep compatibility with code that imports AuthProviderWrapper
export const AuthProviderWrapper = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

// also provide default in case something does: import AuthContext from '...'
export default AuthContext;
