import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="btn">Hello daisyUI</button>
      <p>Test</p>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
