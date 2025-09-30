import React from 'react';

import Navbar from '../Navbar';
import Footer from '../FooterComponent';
import BuyBooks from './BuyBooks';
function FeaturePage(){
  return(
    <>
    <Navbar/>
   <BuyBooks/>
   <Footer/>
    </>
  )
}
export default FeaturePage;