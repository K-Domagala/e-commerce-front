import React from 'react';
import './App.css';
import { Nav } from './features/nav/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './features/login/Login';
import { Register } from './features/register/Register';
import { Profile } from './features/profile/Profile';

export default function App() {
  return (
    <Router>
    <div className='App'>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}