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
    <nav className="z-10 fixed w-screen h-1/12 nav">
      <div className="flex p-2 justify-between items-center">
        <ul className="text-left w-auto">
          <li><div className="toggle-switch">
            <label className="switch-label">
              <input type="checkbox" className="checkbox" onClick={()=>toggleThemefunc()}/>
              <span className="slider"></span>
            </label>
          </div></li>
        </ul>
        <ul className="w-4/6 flex justify-evenly items-center md:w-2/6">
          <li><a className="w-1/4" href="#home"><h1 className="heading1">Home</h1></a></li>
          <li><a className="w-1/4" href="#about"><h1 className="heading1">About</h1></a></li>
          <li><a className="w-1/4" href="#projects"><h1 className="heading1">Projects</h1></a></li>
          <li><a className="w-1/4" href="#contact"><h1 className="heading1">Contact</h1></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
