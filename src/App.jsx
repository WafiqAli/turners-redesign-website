import React from "react";
import './App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotImplemented from './pages/PageNotImplemented';
import SearchResults from './pages/SearchResults';

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
          <Route path='/SearchResults' element={<SearchResults />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
