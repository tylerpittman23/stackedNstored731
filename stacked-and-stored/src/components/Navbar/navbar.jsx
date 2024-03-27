import { Link } from "react-router-dom";
import logo from './logo.png';

import { HamburgerBtn } from "./hamburger";

const logoStyles = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}


export const Navbar = ({ windowWidth }) => {

    return (
        <>
        {windowWidth > 800 ? (
        <nav className="w-full flex bg-gray-200 justify-evenly items-center py-1.5 fixed top-0 z-40 pt-3.5 shadow-lg">
            <div className="w-11/12 h-48 flex justify-evenly items-center">
            <Link to="/about" className="border-2 w-20 h-10 flex items-center justify-center">About</Link>
            <Link to="services" className="border-2 w-20 h-10 flex items-center justify-center">Services</Link>
            <div className="logo-container w-1/2 h-3/4 flex items-center justify-center">
                <img src={logo} alt="" className=""/>
                <Link to="/" className="w-1/3 h-3/5 rounded-full cursor-pointer absolute"></Link>
            </div>
            <Link to="/projects" className="border-2 w-20 h-10 flex items-center justify-center">Projects</Link>
            <Link to="/contact" className="border-2 w-20 h-10 flex items-center justify-center">Contact</Link>
            </div>
        </nav>
        ) : ( <>
            <nav className="w-full bg-gray-200 flex justify-center items-center py-1.5 px-4 fixed top-0 px-4 z-40 pt-3.5 shadow-lg">
                <div className="logo-container h-48 w-5/6 flex items-center justify-center -translate-x-6">
                    <img src={logo} alt=""/>
                    <Link to="/" className="w-2/3 h-5/6 rounded-full absolute cursor-pointer z-50"></Link>
                </div>
            </nav>
            <HamburgerBtn />
            </>
        )
    }

        </>
    )
}