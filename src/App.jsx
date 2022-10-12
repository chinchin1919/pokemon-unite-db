import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
import { UserInfoProvider } from './components/userInfo.jsx';
import { LocalStorageProvider } from './components/localStorage.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <LocalStorageProvider>
      <UserInfoProvider>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <SignIn />
            </Switch>
          </BrowserRouter>
        </div>
      </UserInfoProvider>
    </LocalStorageProvider>
  );
}

export default App;
