import React from 'react';
import NavbarItems from './NavbarItems';
import { navItems } from './navItems';
import searchIcon from '../image-assets/Navigation Bar/Search.png';
import translateIcon from '../image-assets/Navigation Bar/Translation.png';
import './Navbar.css';

const Navbar = () => {

  const handleSearch = () => {
    console.log("search button click");
  
  }

  return (
    <div className='navbar-container'>
        {navItems.map((menu, index) => {
          const depthLevel = 0;
          return <NavbarItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}

        <div className='searchbar'>
          <form action='/' method='get'>
              <input 
                type='text' 
                id='searchbar-input'
                name='s'
                onSubmit={handleSearch}
              />
              <button type='submit'><img src={searchIcon} alt='search' /></button>
              <img src={translateIcon} alt='translate' />
          </form>
        </div>
    </div>
  )
}

export default Navbar