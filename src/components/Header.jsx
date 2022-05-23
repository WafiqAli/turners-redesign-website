import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PageNotImplemented from "../pages/PageNotImplemented";
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import companyLogo from '../image-assets/Navigation Bar/turners-logo.png';

const Header = () => {
  return (
    <div>
    <div className='top-right'>
            <Router>
                <TopNavbar />
                <Routes>
                    <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
                    <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
                    <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
                </Routes>
            </Router>
        </div>
    
    <div className='header-container'>
        
        <div className='header-section logo'>
            <img src={companyLogo} alt='logo' />
        </div>
        
        <div className='header-section navbar'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
                    <Route path='/PageNotImplemented' element={<PageNotImplemented />}/>
                </Routes>
            </Router>
        </div>
    </div>
    </div>
  )
}

export default Header