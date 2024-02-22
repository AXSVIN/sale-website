import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Home from './Home';
import Product from './Product';
import Footer from './assert/Footer';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Navbar />
   <Home/>
   <Product/>
   <Contact/>
   <Footer/>
  </React.StrictMode>
);
