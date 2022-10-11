import React, { useState, useContext, createContext } from 'react';

const UserInfo = createContext();

export const useUserInfoContext = () => useContext(UserInfo);

const UserInfoProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: '',
  });
  const value = {
    userInfo,
    setUserInfo,
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};

export default { UserInfoProvider };
