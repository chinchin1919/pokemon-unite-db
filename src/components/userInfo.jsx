import React, { useContext, createContext, useRef, useEffect } from 'react';
import { useLocalStorage } from './localStorage.jsx';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

const makeStrID = (digits = 8) => {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let g = '';
  for (let i = 0; i < digits; i++) {
    g += c[Math.floor(Math.random() * c)];
  }
  return g;
};

export const UserInfoProvider = ({ children }) => {
  const isFirstRender = useRef(false);

  useEffect(() => (isFirstRender.current = true));

  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const userInfoKey = 'daisyuiChatApp';
  const tempLocalUserInfo = getLocalStorage(userInfoKey);
  console.log(tempLocalUserInfo);
  let userInfo = useRef(
    tempLocalUserInfo
      ? JSON.parse(tempLocalUserInfo)
      : {
          isLogin: false,
          displayName: '',
          userID: makeStrID(20),
        }
  );
  console.log(
    `typeof userInfo: ${typeof userInfo} \n ${JSON.stringify(userInfo.current)}`
  );
  const setUserInfo = (value) => setLocalStorage(userInfoKey, value);

  useEffect(() => {
    console.log(`isFirstRender: ${isFirstRender.current}`);
    if (isFirstRender.current) {
      console.log('First Render');
      isFirstRender.current = false;
    } else {
      console.log('LocalStorage Setted');
      setLocalStorage(userInfoKey, userInfo.current);
      console.log('Changed');
    }
  }, [userInfo]);

  const value = {
    userInfo,
    setUserInfo,
    // setItem, // Set to localStorage
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
