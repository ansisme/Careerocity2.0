import './App.css';
import Signup from './components/signupLogin/Signup';
import Login from './components/signupLogin/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
// import AboutUs from './components/AboutUs/AboutUs';
import AboutUs from './components/AboutUs/AboutUs';
import Form from './components/Form/Form';
function App() {
  return (
   <Router>
      <Routes>
        <Route  path="/signup" element = {<Signup/>}/>
        <Route  path="/login" element = {<Login/>}/>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/aboutus" element = {<AboutUs/>}/>
        <Route path="/form" element = {<Form/>}/>
      </Routes>
    </Router>
  
  
  );
}


export default App;
