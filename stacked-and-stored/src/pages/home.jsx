import { useState, useEffect } from "react";
import { HeroSlides } from "../components/HeroSlides/heroSlides";
import { Welcome } from "../components/Welcome/welcome";
import { Testimony } from "../components/Testimony/testimony";

export const Home = () => {

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
        {windowWidth > 800 ? 
            (
                <>
                <div className="border-2 mt-48 flex flex-col justify-center items-center">
                    <HeroSlides windowWidth={windowWidth}/>
                    <Welcome windowWidth={windowWidth}/>
                    <Testimony windowWidth={windowWidth}/>
                </div>
                </>
            ) : (
                <>
                <div className="border-2 mt-48 flex items-center justify-center flex-col">
                    <HeroSlides windowWidth={windowWidth}/>
                    <Welcome windowWidth={windowWidth}/>
                    <Testimony windowWidth={windowWidth}/>
                </div>
                </>
            )}

        </>
    )
};