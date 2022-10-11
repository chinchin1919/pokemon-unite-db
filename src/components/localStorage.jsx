import { createContext, useContext, useRef, useEffect } from 'react';

const LocalStorage = createContext();

export const useLocalStorage = () => useContext(LocalStorage);

export const LocalStorageProvider = ({ children }) => {
  const userInfoKey = '';
  const tempLocalUserInfo = localStorage.getItem(userInfoKey);
  let localUserInfo = useRef(
    tempLocalUserInfo ? tempLocalUserInfo : { displayName: '' }
  );

  useEffect(
    () => localStorage.setItem(userInfoKey, localUserInfo),
    [localUserInfo]
  );

  const getLocalStorage = (key) => localStorage.getItem(key);
  const setLocalStorage = (key, value) => localStorage.setItem(key, value);
  const value = {
    localUserInfo,
    getLocalStorage,
    setLocalStorage,
  };
  return <LocalStrage.Provider value={value}>{children}</LocalStrage.Provider>;
};
