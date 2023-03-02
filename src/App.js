import './App.css';
import Signup from './components/signupLogin/Signup';
import Login from './components/signupLogin/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage/Homepage';
function App() {
  return (
   <Router>
      <Routes>
        <Route  path="/signup" element = {<Signup/>}/>
        <Route  path="/login" element = {<Login/>}/>
        <Route path="/" element = {<Homepage/>}/>
      </Routes>
    </Router>
  
  
  );
}


export default App;
