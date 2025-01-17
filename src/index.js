import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Components/Contact'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

