import React from 'react';
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../FooterComponent';
import Main from '../Main';
function HomePage(){
  return(
    <>
  <Main/>
    <Navbar/>
   <Hero/>
   <Footer/>
    </>
  )
}
export default HomePage;