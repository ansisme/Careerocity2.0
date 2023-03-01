import './App.css';
import Signup from './components/signupLogin/Signup';
import Login from './components/signupLogin/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
   <Router>
      <Routes>
        <Route  path="/signup" element = {<Signup/>}/>
        <Route  path="/login" element = {<Login/>}/>
      </Routes>
    </Router>
  
  
  );
}


export default App;
