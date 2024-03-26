import { useState, useEffect } from "react";
import { AboutHero, AboutValue } from "../components/AboutComponents";

export const About = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);
    return (
        <>
        <div className="border-2 border-black h-full flex flex-col justify-center items-center w-full pt-52">
            <AboutHero windowWidth={windowWidth}/>
            <AboutValue windowWidth={windowWidth}/>
        </div>

        </>
    )
};