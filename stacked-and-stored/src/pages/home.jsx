import { useState, useEffect } from "react";
import { Testimony, Welcome, HeroSlides} from '../components/HomeComponents/'

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
        <div className="border-2 flex flex-col justify-center items-center">
            <HeroSlides windowWidth={windowWidth}/>
            <Welcome windowWidth={windowWidth}/>
            <Testimony windowWidth={windowWidth}/>
        </div>
        </>
    )
};