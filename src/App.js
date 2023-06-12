import React from 'react';
import './App.css';
import Signup from './components/signupLogin/Signup';
import Login from './components/signupLogin/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Form from './components/Form/Form';
import ChatContainer from './components/YoutubeLinks/ChatContainer';
import GithubSearch from './components/Github/GithubLinks';
import ArticleSearch from './components/Research/ieee';
import LinkedInSearch from './components/JobsInternships/JobsInternships';
import Predict from './components/Predict/Predict';
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
        <Route path="/api/generateGithubLinks" element={<GithubSearch />} />
        <Route path="/api/searchJobs" element={<LinkedInSearch/>} />
        <Route path="/api/generateArticles" element={<ArticleSearch/>} />
        <Route path='/predict' element={<Predict/>} />
      </Routes>
    </Router>
  
  
  );
}


export default App;
