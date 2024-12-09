import React, { createContext, useContext, useState } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user data
  const [error, setError] = useState(null); // State to handle errors

  // Login logic
  const login = async (credentials) => {
    return new Promise((resolve, reject) => {
      try {
        if (credentials.username && credentials.password) {
          // Mocking a successful login response
          setUser({
            username: credentials.username,
            email: credentials.email || "test@example.com",
          });
          setError(null); // Reset error on successful login
          resolve("Login successful");
        } else {
          throw new Error("Invalid login credentials");
        }
      } catch (err) {
        setError(err.message);
        reject(err);
      }
    });
  };

  // Registration logic
  const register = async (userData) => {
    return new Promise((resolve, reject) => {
      try {
        if (userData.username && userData.email) {
          setUser({
            username: userData.username,
            email: userData.email,
          });
          setError(null); // Reset error on successful registration
          resolve("Registration successful");
        } else {
          throw new Error("Invalid registration details");
        }
      } catch (err) {
        setError(err.message);
        reject(err);
      }
    });
  };

  // Logout logic
  const logout = () => {
    setUser(null);
    setError(null); // Reset error state when logged out
  };

  const updateUserProfile = (newData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newData,
    }));
  };

  return (
    <AuthContext.Provider
      value={{ updateUserProfile, user, login, register, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => useContext(AuthContext);
