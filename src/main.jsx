import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserInfoProvider } from './components/userInfo.jsx';
import { LocalStorageProvider } from './components/localStorage.jsx';

ReactDOM.render(

  <LocalStorageProvider>
    <UserInfoProvider>
      <App />
    </UserInfoProvider>
  </LocalStorageProvider>,

  document.getElementById('root')
);
