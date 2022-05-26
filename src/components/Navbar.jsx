import React from 'react';
import NavbarItems from './NavbarItems';
import { navItems } from './navItems';
import searchIcon from '../image-assets/Navigation Bar/Search.png';
import translateIcon from '../image-assets/Navigation Bar/Translation.png';
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