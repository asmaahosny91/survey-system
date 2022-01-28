import React from 'react'
import ReactDOM from 'react-dom'
import {FC, Component} from 'react';
// import App from './App'
import Login from './components/login/Login';
import Admin from './components/admin/admin';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import {Globalstyles} from './global';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Survey from "./components/student/survey";
import Surveyui from "./components/student/surveyui";


ReactDOM.render(
  <React.StrictMode>
    <Globalstyles />
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Login />}/>
    <Route path="/admin" element={<Admin />} /> 
    <Route path="/survey" element={<Survey />} />
    <Route path="/surveyui" element={<Surveyui />} />
    </Routes>
   
   
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
)
