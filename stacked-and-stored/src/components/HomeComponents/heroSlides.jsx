import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { imgONE, imgTWO, imgTHREE, imgFOUR, imgFIVE, imgSIX, imgSEVEN } from "./images";

export const HeroSlides = ({ windowWidth }) => {

    const heroImages = [
        {
            id: 'imgONE',
            name: 'img name',
            src: imgONE
        },
        {
            id: 'imgTWO',
            name: 'img name',
            src: imgTWO
        },
        {
            id: 'imgTHREE',
            name: 'img name',
            src: imgTHREE
        },
        {
            id: 'imgFOUR',
            name: 'img name',
            src: imgFOUR
        },
        {
            id: 'imgFIVE',
            name: 'img name',
            src: imgFIVE
        },
        {
            id: 'imgSIX',
            name: 'img name',
            src: imgSIX
        },
        {
            id: 'imgSEVEN',
            name: 'img name',
            src: imgSEVEN
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
        transition: 'background-image 2.2s ease-in-out',
    };

    const isWideScreen = windowWidth > 800;
    const slideWidthClass = windowWidth > 1200 ? "w-1/2" : "w-8/12";

    return (
        <div className="h-screen flex flex-col justify-center items-center w-full pt-36">
            <div className={`${isWideScreen ? slideWidthClass : "w-10/12"} bg-gray-400 h-3/4 flex justify-between items-center px-2`} style={backgroundStyle}>
                <div 
                    className={`${isWideScreen ? ('-translate-x-16') : ('')} border-1 rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer`}
                    onClick={() => handleClick('left')}
                    aria-label="Previous Slide"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div 
                    className={`${isWideScreen ? ('translate-x-16') : ('')} border-1 rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer`}
                    onClick={() => handleClick('right')}
                    aria-label="Next Slide"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className="w-28 flex justify-evenly items-center mt-1">
                {heroImages.map((image, index) => (
                    <span 
                        key={index} 
                        className={`w-2 h-2 rounded-full ${index === currentImgIndex ? "bg-gray-200" : ""}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};