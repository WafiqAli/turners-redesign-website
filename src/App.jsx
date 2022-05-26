import React from "react";
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotImplemented from './pages/PageNotImplemented';

import Footer from "./components/Footer";
import Header from './components/Header';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path='/PageNotImplemented' element={<PageNotImplemented/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
