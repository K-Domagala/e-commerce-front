import React from 'react';
import './App.css';
import { Nav } from './features/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { Login } from './features/Login';
import { Register } from './features/Register';
import { Profile } from './features/Profile';
import { ProductList } from './features/ProductList';
import { Main } from './features/Main';
import { Product } from './features/Product';
import { Cart } from './features/Cart';
import { Orders } from './features/Orders';

const stripePromise = loadStripe('pk_test_51MWN7GGSKy61RQS6PPKr3DKaEJKEXXQu7VcUTmGrmN63jy0U7vDRPJu2ZXqAp5S3NljIolXc28XhhH2OUaGxuEv200rFvu5GLe');

export default function App() {
  return (
    <Router>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
      <div className='App'>
        {/* <header> */}
          <Nav />
        {/* </header> */}
        <div id='main'>
          <div id='main-content'>
            <Elements stripe={stripePromise}>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/products' element={<ProductList />}/>
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </Elements>
          </div>
        </div>
      </div>
      </QueryParamProvider>
    </Router>
  );
}