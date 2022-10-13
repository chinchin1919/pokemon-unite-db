import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserInfoProvider } from './components/userInfo.jsx';
import { LocalStorageProvider } from './components/localStorage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <LocalStorageProvider>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </LocalStorageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
