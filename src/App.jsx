import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/login';
import { UserInfoProvider } from './components/userInfo';

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
