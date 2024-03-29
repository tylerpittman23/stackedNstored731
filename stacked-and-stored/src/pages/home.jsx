import { useState, useEffect } from "react";
import { Testimony, Welcome, HeroSlides} from '../components/HomeComponents/';


export const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

    useEffect(() => {
        window.scrollTo(0, 0, { behaivor: 'smooth' });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);

    return (
        <> 
        <div className="flex flex-col justify-center items-center">
            <HeroSlides windowWidth={windowWidth} />
            <Welcome windowWidth={windowWidth}/>
            <Testimony windowWidth={windowWidth}/>
        </div>
        </>
    )
};