import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarMuni } from './components/NavbarMuni/NavbarMuni';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMuni/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;