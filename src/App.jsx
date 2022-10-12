import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
import { UserInfoProvider } from './components/userInfo.jsx';
import { LocalStorageProvider } from './components/localStorage.jsx';

function App() {
  return (
    <LocalStorageProvider>
      <UserInfoProvider>
        <div className="App">
          <SignIn />
        </div>
      </UserInfoProvider>
    </LocalStorageProvider>
  );
}

export default App;
