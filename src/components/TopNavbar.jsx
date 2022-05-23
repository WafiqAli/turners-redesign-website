import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const TopNavbar = () => {
  return (
    <div className='topnavbar-container'>
      <div className='topnavbar-item'>
        <Link to='/' className='topnavbar-link'>Sign in</Link>      
      </div>
      <div className='topnavbar-item' style={{ marginRight: '4rem'}} >
        <Link to='/' className='topnavbar-link'>Register</Link>  
      </div>
      <div className='topnavbar-item'>
        <a href='tel:0800000000' className='topnavbar-link'>Call us on 0800 000 000</a>
      </div>
      
    </div>
  )
}

export default TopNavbar