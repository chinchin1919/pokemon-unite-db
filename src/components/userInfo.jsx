import React, { useContext, createContext, useRef, useEffect } from 'react';
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
  const userInfoKey = 'daisyuiChatApp';
  const tempLocalUserInfo = getLocalStorage(userInfoKey);
  let userInfo = useRef(
    tempLocalUserInfo
      ? JSON.parse(tempLocalUserInfo)
      : {
          displayName: '',
        }
  );
  console.log(`typeof userInfo: ${typeof userInfo} \n ${userInfo.current}`);

  // useEffect(() => {
  //   localStorage.setItem(userInfoKey, String(JSON.stringify(userInfo.current)));
  //   console.log('Changed');
  // }, [userInfo]);

  const value = {
    userInfo,
    // setItem, // Set to localStorage
  };
  return <UserInfo.Provider value={value}>{children}</UserInfo.Provider>;
};
