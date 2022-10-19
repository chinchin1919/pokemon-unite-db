import { useState, createContext } from 'react';
import './App.css';
import SignIn from './components/signin';
import { useUserInfoContext } from './components/userInfo.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/404.jsx';
import ChatHome from './pages/ChatHome.jsx';
import Chat from './pages/Chat.jsx';

function App() {
  const { userInfo } = useUserInfoContext();
  console.log(`isLogin : ${JSON.stringify(userInfo.current.isLogin)}`);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              userInfo.current.isLogin ? (
                // <ChatHome />
                <Navigate replace to="/chat" />
              ) : (
                <Navigate replace to="/signin" />
              )
            }
          />
          <Route
            path="/signin"
            element={
              userInfo.current.isLogin ? (
                <Navigate replace to="/" />
              ) : (
                <SignIn />
              )
            }
          />
          <Route
            path="/chat"
            element={
              userInfo.current.isLogin ? <Chat /> : <Navigate replace to="/" />
            }
          />
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
