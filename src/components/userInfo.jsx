import React, { useState, useContext, createContext, useRef } from 'react';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

export const UserInfoProvider = ({ children }) => {
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
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
