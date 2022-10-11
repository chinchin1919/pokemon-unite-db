import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/login';

function App() {
  // const userName = React.createContext();
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
