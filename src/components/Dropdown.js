import React from 'react'
import { Link } from 'react-router-dom';
import NavbarItems from './NavbarItems';
import './Navbar.css';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <div className={`dropdown-container ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
          <NavbarItems items={submenu} key={index} depthLevel={depthLevel}/>
        ))}
    </div>
  )
}

export default Dropdown