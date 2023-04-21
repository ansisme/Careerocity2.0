import React from 'react';
import './App.css';
import Signup from './components/signupLogin/Signup';
import Login from './components/signupLogin/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
// import AboutUs from './components/AboutUs/AboutUs';
import AboutUs from './components/AboutUs/AboutUs';
import Form from './components/Form/Form';
// import YoutubeLinks from './components/YoutubeLinks/YoutubeLinks';
import ChatContainer from './components/YoutubeLinks/ChatContainer';
function App() {
  return (
   <Router>
      <Routes>
        <Route  path="/signup" element = {<Signup/>}/>
        <Route  path="/login" element = {<Login/>}/>
        <Route path="/" element = {<Homepage/>}/>
        <Route path="/about" element = {<AboutUs/>}/>
        <Route path="/form" element = {<Form/>}/>
        <Route path="/api/generateLinks" element = {<ChatContainer/>}/>
        <Route path="/youtubeLinks" component={ChatContainer} />
      </Routes>
    </Router>
  
  
  );
}


export default App;
