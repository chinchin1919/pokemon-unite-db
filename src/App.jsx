import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
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
