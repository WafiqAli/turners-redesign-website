import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import PageNotImplemented from "./pages/PageNotImplemented";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
          <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
          <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
          <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
