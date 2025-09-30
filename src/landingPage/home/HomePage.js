import React from 'react';
import Hero from './Hero';
import Navebar from '../Navbar';
import Footer from '../Footer';
import Main from '../Main';
function HomePage(){
  return(
    <>
  <Main/>
    <Navebar/>
   <Hero/>
   <Footer/>
    </>
  )
}
export default HomePage;