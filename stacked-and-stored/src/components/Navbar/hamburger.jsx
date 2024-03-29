import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../Navbar/logo.png';

const linkClasses = 'border-1 shadow-sm bg-gray-100 text-gray-500 rounded-sm w-24 h-10 flex items-center justify-center hover:shadow-md transition-shadow';
const activeLinkClass = 'border-2 border-gray-300 bg-white shadow-xl';

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
        
      ></span>
      <span
        className={`block w-8 h-0.5 bg-gray-500 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block w-10 h-0.5 bg-gray-500 transform transition duration-500 ease-in-out my-1 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
    {isOpen ?
      <div className="fixed border-2 shadow-2xl rounded-md bg-gray-200 -right-6 w-full h-full transition ease-in-out z-40" >
        <div className="w-5/6 h-1/5 flex justify-center items-center translate-y-10">
          <img src={logo} alt="" />
          <Link onClick={() => setIsOpen(false)} to="/" className="absolute w-3/5 h-3/5 rounded-full"></Link>
        </div>
        <div className="flex justify-evenly items-start flex-col h-3/4 px-4">
          <Link onClick={() => setIsOpen(false)} to="/about/" className={`${location.pathname === '/about/' ? activeLinkClass : ''} ${linkClasses}`}>About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services/" className={`${location.pathname === '/services/' ? activeLinkClass : ''} ${linkClasses}`}>Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects/" className={`${location.pathname === '/projects/' ? activeLinkClass : ''} ${linkClasses}`}>Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact/" className={`${location.pathname === '/contact/' ? activeLinkClass : ''} ${linkClasses}`}>Contact</Link>
        </div>
      </div> : ''}
        </>
    )
};