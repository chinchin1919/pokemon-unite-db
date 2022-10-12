import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
import { UserInfoProvider } from './components/userInfo.jsx';
import { LocalStorageProvider } from './components/localStorage.jsx';

function App() {
  return (
    <UserInfoProvider>
      <div className="App">
        <SignIn />
      </div>
    </UserInfoProvider>
  );
}

export default App;
