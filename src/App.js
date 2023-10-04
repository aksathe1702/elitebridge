import React from 'react';
import './App.css';
import Header from './components/Header.js/Header';
import Main from './components/Main';
import Carrer from './components/Carrer/Carrer'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProdServ from './components/ProdServ/ProdServ';
import Signup from './components/Signup';
import Industry from './components/industry/Industry'
import Verifaction from './components/Verifaction';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Middle/Footer';
import { useState } from 'react';
import Forgot from './components/Forgot'

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <>
   
   

    <Router> 
    <Header isUserLoggedIn={isUserLoggedIn}/>
        <Routes>
          <Route path ="/" element ={<Main/>}/>
          <Route path ="/careers" element ={<Carrer/>}/>
          <Route path ="/productandservices" element ={<ProdServ/>}/>
          <Route path ="/login" element ={<Signup setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
          <Route path ="/industry" element ={<Industry/>}/>
          <Route path ="/verifyemail" element ={<Verifaction/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path ="/contactus" element ={<Contact/>}/>
          <Route path ="/about" element ={<About/>}/>
          <Route path ="/forgot" element ={<Forgot/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
    
  );
}

export default App;
