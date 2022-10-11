import React, { useState, useContext, createContext, useRef } from 'react';
import { useLocalStorage } from './localStorage.jsx';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

export const UserInfoProvider = ({ children }) => {
  const { localUserInfo } = useLocalStorage();

  // const [userInfo, setUserInfo] = useState({
  //   displayName: '',
  // });
  // const value = {
  //   userInfo,
  //   setUserInfo,
  // };
  let userInfo = useRef({
    displayName: '',
  });

  const value = {
    userInfo,
    // setItem, // Set to localStorage
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
