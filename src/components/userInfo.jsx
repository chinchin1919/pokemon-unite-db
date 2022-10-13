import React, { useContext, createContext, useRef, useEffect } from 'react';
import { useLocalStorage } from './localStorage.jsx';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

export const UserInfoProvider = ({ children }) => {
  const isFirstRender = useRef(false);

  useEffect(() => (isFirstRender.current = true));

  const { getLocalStorage } = useLocalStorage();
  const userInfoKey = 'daisyuiChatApp';
  const tempLocalUserInfo = getLocalStorage(userInfoKey);
  console.log(tempLocalUserInfo);
  let userInfo = useRef(
    tempLocalUserInfo
      ? JSON.parse(tempLocalUserInfo)
      : {
          isLogin: false,
          displayName: '',
          userID: 'olb8jo4zvkkp3ai1yymfd7mgf95f8joe',
        }
  );
  console.log(
    `typeof userInfo: ${typeof userInfo} \n ${JSON.stringify(userInfo.current)}`
  );

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      localStorage.setItem(
        userInfoKey,
        String(JSON.stringify(userInfo.current))
      );
      console.log('Changed');
    }
  }, [userInfo]);

  const value = {
    userInfo,
    // setItem, // Set to localStorage
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
