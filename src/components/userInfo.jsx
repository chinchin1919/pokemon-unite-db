import React, { useState, useContext, createContext } from 'react';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

export const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
  });
  const value = {
    userInfo,
    setUserInfo,
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
