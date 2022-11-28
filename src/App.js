import React from 'react';
import './App.css';
import { Nav } from './features/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './features/Login';
import { Register } from './features/Register';
import { Profile } from './features/Profile';
import { ProductList } from './features/ProductList';
import { Categories } from './features/Categories';

export default function App() {
  return (
    <Router>
    <div className='App'>
      {/* <header> */}
        <Nav />
      {/* </header> */}
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/product_list' element={<ProductList />}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}