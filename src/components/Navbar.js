import React from 'react';
import { Link } from "react-router-dom";
import NavbarItems from './NavbarItems';
import { navItems } from './navItems';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className='navbar-container'>
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return <NavbarItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
    </div>
  )
}

export default Navbar