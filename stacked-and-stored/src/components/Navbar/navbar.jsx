import { Link } from "react-router-dom";

import { HamburgerBtn } from "./hamburger";


export const Navbar = ({ windowWidth }) => {

    return (
        <>
        {windowWidth > 800 ? (
        <nav className="w-full border-2 border-black flex bg-white justify-evenly items-center py-1.5 fixed top-0 z-40">
            <div className="border-2 w-11/12 flex justify-evenly items-center">
            <Link to="/about" className="border-2 w-20 h-10 flex items-center justify-center">About</Link>
            <Link to="services" className="border-2 w-20 h-10 flex items-center justify-center">Services</Link>
            <div className="logo-container border-2 w-96 h-40 flex items-center justify-center">
                <Link to="/" className="">LOGO</Link>
            </div>
            <Link to="/projects" className="border-2 w-20 h-10 flex items-center justify-center">Projects</Link>
            <Link to="/contact" className="border-2 w-20 h-10 flex items-center justify-center">Contact</Link>
            </div>
        </nav>
        ) : ( <>
            <nav className="w-full border-2 border-black bg-white flex justify-center items-center py-1.5 px-4 fixed top-0 px-4 z-40">
                <div className="logo-container border-2 w-80 h-40 flex items-center justify-center">
                    <Link to="/" className="">LOGO</Link>
                </div>
            </nav>
            <HamburgerBtn />
            </>
        )
    }

        </>
    )
}