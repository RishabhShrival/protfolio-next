'use client'
import React  from "react";
import "./navBar.css";
import "../globals.css";
import "./miniElements/toggleswitch.css"

import { useState } from "react";
const NavBar = () => {
  const [theme,toggleTheme] = useState(true);
  const toggleThemefunc=()=>{
    {theme ? (toggleTheme(false)) : (toggleTheme(true))}
    document.documentElement.setAttribute('data-theme', theme);
    console.log(theme);
  }
  return (
    <nav>
      <ul className="nav-left">
        <li><div className="toggle-switch">
          <label className="switch-label">
            <input type="checkbox" className="checkbox" onClick={()=>toggleThemefunc()}/>
            <span className="slider"></span>
          </label>
        </div></li>
      </ul>
      <ul className="nav-right">
        <li><a className="nav-headings" href="#home"><h1 className="heading1">Home</h1></a></li>
        <li><a className="nav-headings" href="#about"><h1 className="heading1">About</h1></a></li>
        <li><a className="nav-headings" href="#projects"><h1 className="heading1">Projects</h1></a></li>
        <li><a className="nav-headings" href="#contact"><h1 className="heading1">Contact</h1></a></li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
