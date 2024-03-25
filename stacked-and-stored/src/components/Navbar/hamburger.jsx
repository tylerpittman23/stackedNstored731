import { useState } from "react";
import { Link } from "react-router-dom";

export const HamburgerBtn = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button
      className="flex flex-col justify-center items-center fixed top-16 right-6 z-50"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Line 1 */}
      <span
        className={`block w-10 h-0.5 bg-black transform transition duration-500 ease-in-out my-1 ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
        
      ></span>

      {/* Line 2, hidden when open */}
      <span
        className={`block w-8 h-0.5 bg-black transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>

      {/* Line 3 */}
      <span
        className={`block w-10 h-0.5 bg-black transform transition duration-500 ease-in-out my-1 ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></span>
    </button>
    {isOpen ?
      <div className="fixed border-2 border-black rounded-md bg-white top-10 right-0 w-64 h-96 transition ease-in-out z-40" >
        <div className="border-2 border-black">
          <Link onClick={() => setIsOpen(false)} to="/" className="border-2 w-44 h-24 flex items-center justify-center">LOGO</Link>
        </div>
        <div className="flex justify-evenly items-start flex-col h-64 px-4">
          <Link onClick={() => setIsOpen(false)} to="/about" className="border-2 w-24 flex items-center justify-center">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/services" className="border-2 w-20 flex items-center justify-center">Services</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects" className="border-2 w-20 flex items-center justify-center">Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="border-2 w-20 flex items-center justify-center">Contact</Link>
        </div>
      </div> : ''}
        </>
    )
};