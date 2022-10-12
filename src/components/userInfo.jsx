import React, { useState, useContext, createContext, useRef } from 'react';
import { useLocalStorage } from './localStorage.jsx';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

export const UserInfoProvider = ({ children }) => {
  const { getLocalStorage } = useLocalStorage();

  // const [userInfo, setUserInfo] = useState({
  //   displayName: '',
  // });
  // const value = {
  //   userInfo,
  //   setUserInfo,
  // };
  const userInfoKey = '';
  const tempLocalUserInfo = getLocalStorage(userInfoKey);
  let userInfo = useRef(
    tempLocalUserInfo ? tempLocalUserInfo : { displayName: '' }
  );

  useEffect(() => localStorage.setItem(userInfoKey, localUserInfo), [userInfo]);

  const value = {
    userInfo,
    // setItem, // Set to localStorage
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
