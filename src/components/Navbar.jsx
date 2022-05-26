import React from 'react';
import NavbarItems from './NavbarItems';
import { navItems } from './navItems';
import './Navbar.css';
import SearchBar from './SearchBar';

const Navbar = () => {


  return (
    <div className='navbar-container'>
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return <NavbarItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}

        <SearchBar/>
    </div>
  )
}

export default Navbar