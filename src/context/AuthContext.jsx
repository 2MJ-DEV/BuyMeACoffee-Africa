/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const STORAGE_KEYS = useMemo(
    () => ({
      user: "buymeacoffee.africa.auth.user",
      token: "buymeacoffee.africa.auth.token",
    }),
    []
  );

  const readStoredToken = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      return window.localStorage.getItem(STORAGE_KEYS.token);
    } catch (error) {
      console.warn("Unable to read auth token from storage:", error);
      return null;
    }
  }, [STORAGE_KEYS.token]);

  const readStoredUser = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.user);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Unable to parse auth user from storage:", error);
      return null;
    }
  }, [STORAGE_KEYS.user]);

  const [user, setUser] = useState(() => readStoredUser());
  const [token, setToken] = useState(() => readStoredToken());
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(readStoredUser() || readStoredToken()));

  useEffect(() => {
    setIsAuthenticated(Boolean(user || token));
  }, [token, user]);

  const login = useCallback(
    (authPayload) => {
      const authUser = authPayload?.user ?? null;
      const authToken = authPayload?.token ?? null;

      if (typeof window !== "undefined") {
        try {
          if (authUser) {
            window.localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(authUser));
          } else {
            window.localStorage.removeItem(STORAGE_KEYS.user);
          }

          if (authToken) {
            window.localStorage.setItem(STORAGE_KEYS.token, authToken);
          } else {
            window.localStorage.removeItem(STORAGE_KEYS.token);
          }
        } catch (error) {
          console.warn("Unable to persist auth payload:", error);
        }
      }

      setUser(authUser);
      setToken(authToken);
    },
    [STORAGE_KEYS.token, STORAGE_KEYS.user]
  );

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(STORAGE_KEYS.user);
        window.localStorage.removeItem(STORAGE_KEYS.token);
      } catch (error) {
        console.warn("Unable to clear auth storage:", error);
      }
    }

    setUser(null);
    setToken(null);
  }, [STORAGE_KEYS.token, STORAGE_KEYS.user]);

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated, login, logout, token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
