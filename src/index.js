import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landingPage/home/HomePage';
import AboutPage from './landingPage/about/AboutPage';
// import Signup from './landingPage/signout/Hero';
import SignupPage from './landingPage/signout/SignupPage';
import FeaturePage from './landingPage/features/FeaturePage';

import RentBookPage from './landingPage/features/RentBookPage';
// import Navebar from './landingPage/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    {/* <Navebar/> */}
    <Routes>
        <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/buybook" element={<FeaturePage />} />
      <Route path="/rent" element={<RentBookPage />} />
    </Routes>
    </BrowserRouter>
   /* <HomePage/>
   <AboutPage/>
   <SignupPage/>
   <FeaturePage/>
   <RentBookPage/> */
  
);


