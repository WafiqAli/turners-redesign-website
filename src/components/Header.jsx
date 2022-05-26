import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import companyLogo from '../image-assets/Navigation Bar/turners-logo.png';

const Header = () => {
  return (
    <div>
    <div className='top-right'>

            <TopNavbar />     

        </div>

    <div className='header-container'>
        
        <div className='header-section logo'>
            <Link to='/'><img src={companyLogo} alt='logo' /></Link>
        </div>
        
        <div className='header-section navbar'>

            <Navbar />

        </div>
    </div>
    </div>
  )
}

export default Header