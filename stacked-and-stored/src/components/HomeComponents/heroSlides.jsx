import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { heroImgONE, heroImgTWO, heroImgTHREE, heroImgFOUR, heroImgFIVE, heroImgSIX, heroImgSEVEN } from "./images/heroImgs";

export const HeroSlides = ({ windowWidth }) => {

    const heroImages = [
        {
            id: 'imgONE',
            name: 'img name',
            src: heroImgONE
        },
        {
            id: 'imgTWO',
            name: 'img name',
            src: heroImgTWO
        },
        {
            id: 'imgTHREE',
            name: 'img name',
            src: heroImgTHREE
        },
        {
            id: 'imgFOUR',
            name: 'img name',
            src: heroImgFOUR
        },
        {
            id: 'imgFIVE',
            name: 'img name',
            src: heroImgFIVE
        },
        {
            id: 'imgSIX',
            name: 'img name',
            src: heroImgSIX
        },
        {
            id: 'imgSEVEN',
            name: 'img name',
            src: heroImgSEVEN
        }
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    useEffect(() => {
        heroImages.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }, [heroImages])

    const handleClick = (direction) => {
        setCurrentImgIndex(prevIndex => {
            if (direction === 'left') {
                return prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1;
            } else { 
                return (prevIndex + 1) % heroImages.length;
            }
        });
    };

    const backgroundStyle = {
        backgroundImage: `url(${heroImages[currentImgIndex].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center w-full pt-36">
            <div className={`bg-gray-400 rounded-sm w-full max-w-screen-lg h-5/6 flex justify-center items-center px-2 relative shadow-2xl`} style={backgroundStyle}>
                <div className="rounded-md absolute bottom-6 p-3 w-64 flex flex-col items-center justify-center transition ease-in-out shadow-sm hover:shadow-xl" style={{backgroundColor: '#5c715e'}}>
                    <Link to="/contact/" className="text-lg text-center text-white">Contact me for an estimate</Link>
                </div>
                <div 
                    className={`left-6 absolute rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer`}
                    style={{backgroundColor: '#f2f9f1'}}
                    onClick={() => handleClick('left')}
                    aria-label="Previous Slide"
                >
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: '#5c715e'}}/>
                </div>
                <div 
                    className={`right-6 absolute rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer`}
                    style={{backgroundColor: '#f2f9f1'}}
                    onClick={() => handleClick('right')}
                    aria-label="Next Slide"
                >
                    <FontAwesomeIcon icon={faChevronRight} style={{color: '#5c715e'}}/>
                </div>
            </div>
            <div className="w-48 flex justify-evenly items-center mt-5">
                {heroImages.map((image, index) => (
                    <span 
                        key={index} 
                        className={`border-1 border-gray-300 w-2.5 h-2.5 rounded-full ${index === currentImgIndex ? "bg-gray-300" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};