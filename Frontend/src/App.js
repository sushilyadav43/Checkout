import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import  Paypal  from './components/Paypal';
import Checkout from './components/Checkout';
import  BankTransfer  from './components/bankTransfer';
import  Credit  from './components/Credit';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Link
} from "react-router-dom";



const App = () => {
  return(
    <>
   <Checkout /> 
 {/* <Home /> */}
  
    
    <Routes>
        
        <Route exact path="/" element={<Credit /> }/>
        <Route exact path="/bankTransfer" element={<BankTransfer />} />
        <Route exact path="/paypal" element={<Paypal />} />
        
    </Routes> 
    
    
    

 
    </>
  );
}




export default App;
