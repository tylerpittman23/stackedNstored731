import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../Navbar/logo.png';

const linkClasses = 'shadow-sm text-gray-500 rounded-sm w-24 h-10 flex items-center justify-center hover:shadow-md transition-shadow';
const activeLinkStyles = {
  border: 'solid #5c715e 2px',
  color: '#5c715e'
}
const inactiveLinkStyles = {
  border: 'solid #ddeedf 2px',
  color: '#5c715e'
}

export const HamburgerBtn = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button
      className="flex flex-col justify-center items-center fixed top-8 right-6 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`block w-10 h-0.5 bg-gray-500 transform transition duration-500 ease-in-out my-1 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      style={{backgroundColor: '#5c715e'}}
        
      ></span>
      <span
        className={`block w-8 h-0.5 bg-gray-500 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      style={{backgroundColor: '#5c715e'}}
      ></span>
      <span
        className={`block w-10 h-0.5 bg-gray-500 transform transition duration-500 ease-in-out my-1 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      style={{backgroundColor: '#5c715e'}}
      ></span>
    </button>
    {isOpen ?
      <div className="fixed shadow-2xl rounded-md -right-6 w-full h-full transition ease-in-out z-40" style={{backgroundColor: '#f2f9f1'}}>
        <div className="w-5/6 h-1/5 flex justify-center items-center translate-y-10">
          <img src={logo} alt="" />
          <Link onClick={() => setIsOpen(false)} to="/" className="absolute w-3/5 h-3/5 rounded-full"></Link>
        </div>
        <div className="flex justify-evenly items-start flex-col h-3/4 px-4">
          <Link onClick={() => setIsOpen(false)} to="/" className={linkClasses} style={location.path ? activeLinkStyles : inactiveLinkStyles}>Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about/" className={linkClasses} style={location.pathname === '/about/' ? activeLinkStyles : inactiveLinkStyles}>About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services/" className={linkClasses} style={location.pathname === '/services/' ? activeLinkStyles : inactiveLinkStyles}>Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects/" className={linkClasses} style={location.pathname === '/projects/' ? activeLinkStyles : inactiveLinkStyles}>Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact/" className={linkClasses} style={location.pathname === '/contact/' ? activeLinkStyles : inactiveLinkStyles}>Contact</Link>
        </div>
      </div> : ''}
        </>
    )
};