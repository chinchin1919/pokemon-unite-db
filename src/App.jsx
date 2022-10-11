import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/login';

export const UserName = createContext();

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
