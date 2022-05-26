import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';
import './Navbar.css';

const NavbarItems = ({ items, depthLevel }) => {
    
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <div className='navbar-item'>
            {items.submenu ? (
                <>
                <button 
                    className='navbar-link' 
                    type='button' 
                    aria-haspopup='menu'
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                >
                {items.title}{" "}
                {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow' />}
                </button>
                <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                </>
                
            ) : (
                <Link to='/PageNotImplemented' className='navbar-link'>{items.title}</Link>
            )}
        </div>
  )
}

export default NavbarItems


/*{  <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Buy a car</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Sell your car</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Finance</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Insurance</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Help</Link>
        </div>
        <div className='navbar-item'>
            <Link to='/' className='navbar-link'>Subscription</Link>
        </div> }*/