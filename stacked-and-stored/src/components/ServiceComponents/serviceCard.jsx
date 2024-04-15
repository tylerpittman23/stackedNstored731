import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
export const ServiceCard = ({ type, extraClasses, serviceData }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const buttonClasses = 'w-8 h-6 text-gray-400 bg-white border-1 border-gray-200 p-2 rounded-md';

    const handleNextImage = () => {
        if (currentImgIndex < serviceData.imgs.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        } else {
            setCurrentImgIndex(0);
        }
    };

    const handlePrevImage = () => {
        if (currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1);
        } else {
            setCurrentImgIndex(serviceData.imgs.length - 1);
        }
    };

    return (
        <>
        {type === 'large' ?(
            <>
            <div className={`h-full w-full ${extraClasses.bg}`}>
                <div id={serviceData.id} className="w-full h-screen flex flex-col justify-center items-center relative">
                    <div className="bg-gray-200 w-full h-56 absolute"></div>
                    <div className={`rounded-md shadow-2xl bg-gray-400 w-1/2 h-1/2 flex flex-col items-center ${extraClasses.imgStyle}`} style={{ backgroundImage: `url(${serviceData.imgs[currentImgIndex]})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className="z-20 w-64 flex justify-between items-center absolute bottom-10">
                            <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} icon={faChevronLeft}/>
                            <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} icon={faChevronRight}/>
                        </div>
                    </div>
                    <div className={`${extraClasses.card} bg-white shadow-md rounded-sm bg-gray-100 flex justify-center items-center w-1/3 h-36 ${extraClasses.textBox}`}>
                        <h1 className="text-6xl text-center text-gray-500">{serviceData.title}</h1>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            <div className={`h-screen w-full flex flex-col justify-evenly items-center relative ${extraClasses}`}>
                <div className="bg-gray-300 shadow-md w-full h-64 absolute translate-y-36"></div>
                <div className="card relative shadow-md bg-white rounded-sm h-36 w-3/4 flex justify-center items-center">
                    <h1 id={serviceData.id} className="text-5xl text-center text-gray-500">{serviceData.title}</h1>
                </div>
                <div className="border-2 bg-gray-400 rounded-sm shadow-lg h-1/2 w-11/12 z-10 relative flex flex-col items-center" style={{ backgroundImage: `url(${serviceData.imgs[currentImgIndex]})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div className="z-20 w-52 flex justify-between absolute bottom-10">
                        <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} icon={faChevronLeft}/>
                        <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
            </>
        ) }
        </>
    )
};