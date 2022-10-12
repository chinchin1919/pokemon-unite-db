import { createContext, useContext, useRef, useEffect } from 'react';

const LocalStorage = createContext();

export const useLocalStorage = () => useContext(LocalStorage);

export const LocalStorageProvider = ({ children }) => {
  const getLocalStorage = (key) => localStorage.getItem(key);
  const setLocalStorage = (key, value) => localStorage.setItem(key, value);
  const value = {
    getLocalStorage,
    setLocalStorage,
  };
  return (
    <LocalStorage.Provider value={value}>{children}</LocalStorage.Provider>
  );
};
