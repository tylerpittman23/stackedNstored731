import { Link, useLocation } from "react-router-dom";
import logo from './logo.png';

import { HamburgerBtn } from "./hamburger";


export const Navbar = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 800;

    const location = useLocation();

    const navClasses = "w-full h-36 bg-white flex items-center py-1.5 fixed top-0 z-40 pt-3.5 shadow-lg";
    const wideScreenNavClasses = `${navClasses} justify-evenly`;
    const narrowScreenNavClasses = `${navClasses} justify-center px-4`;
    const activeLinkClass = 'border-2 border-gray-300 shadow-xl -translate-y-0.5'
    const linkClasses = 'border-1 shadow-sm text-gray-500 rounded-sm w-24 h-10 flex items-center justify-center hover:shadow-md transition-shadow';

    return (
        <>
            {isWideScreen ? (
                <nav className={wideScreenNavClasses}>
                    <div className="w-11/12 h-36 flex justify-evenly items-center">
                        <Link to="/about/" className={`${location.pathname === '/about/' ? activeLinkClass : ''} ${linkClasses}`}>About</Link>
                        <Link to="/services/" className={`${location.pathname === '/services/' ? activeLinkClass : ''} ${linkClasses}`}>Services</Link>
                        <div className="logo-container w-1/2 h-3/5 flex items-center justify-center relative">
                            <img src={logo} alt="Logo" className="w-96 h-36"/>
                            <Link to="/" className="w-1/3 h-3/5 rounded-full cursor-pointer absolute"></Link>
                        </div>
                        <Link to="/projects/" className={`${location.pathname === '/projects/' ? activeLinkClass : ''} ${linkClasses}`}>Projects</Link>
                        <Link to="/contact/" className={`${location.pathname === '/contact/' ? activeLinkClass : ''} ${linkClasses}`}>Contact</Link>
                    </div>
                </nav>
            ) : (
                <>
                    <nav className={narrowScreenNavClasses}>
                        <div className="logo-container h-36 w-96 flex items-center justify-center relative">
                            <img src={logo} alt="Logo" className="w-80"/>
                            <Link to="/" className="w-2/3 h-5/6 rounded-full absolute cursor-pointer z-50"></Link>
                        </div>
                    </nav>
                    <HamburgerBtn />
                </>
            )}
        </>
    );
};