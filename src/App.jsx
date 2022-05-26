import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      
      <Header />
      <HomeContent />

      <Footer/>
    </div>
  );
}

export default App;
