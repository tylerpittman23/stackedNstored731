import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
 
export const ServiceCard = ({ type, extraClasses, serviceData }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const buttonClasses = 'w-8 h-6 text-gray-400 p-2 rounded-md cursor-pointer';

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

    const backgroundStyle = {
        backgroundImage: `url(${serviceData.imgs[currentImgIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <>
        {type === 'large' ?(
            <>
            <div className={`h-full w-full ${extraClasses.bg}`}>
                <div id={serviceData.id} className="w-full h-screen flex flex-col justify-center items-center relative">
                    <div className="w-full h-1/3 absolute" style={{backgroundColor: '#b6cdbd'}}></div>
                    <div className={`rounded-md shadow-2xl bg-gray-400 w-2/5 h-3/4 flex flex-col items-center ${extraClasses.imgStyle}`} style={backgroundStyle}>
                        <div className="z-20 w-64 flex justify-between items-center absolute bottom-10">
                            <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} icon={faChevronLeft} style={{backgroundColor: '#f2f9f1', color:'#5c715e'}}/>
                            <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} icon={faChevronRight} style={{backgroundColor: '#f2f9f1', color:'#5c715e'}}/>
                        </div>
                    </div>
                    <div className={`${extraClasses.card} shadow-md rounded-sm bg-gray-100 flex justify-center items-center w-1/3 h-36 ${extraClasses.textBox}`} style={{backgroundColor: '#f2f9f1', color: '#5c715e'}}>
                        <h1 className="text-6xl text-center">{serviceData.title}</h1>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            <div className={`h-screen w-full flex flex-col justify-center gap-10 items-center relative py-16 ${extraClasses}`}>
                <div className="shadow-md w-full h-2/5 absolute translate-y-20" style={{backgroundColor: '#b6cdbd'}}></div>
                <div className="card relative shadow-md bg-white rounded-sm h-36 w-3/4 flex justify-center items-center" style={{backgroundColor: '#f2f9f1', color:'#5c715e'}}>
                    <h1 id={serviceData.id} className="text-5xl text-center">{serviceData.title}</h1>
                </div>
                <div className="bg-gray-400 rounded-sm shadow-lg h-3/4 w-11/12 z-10 relative flex flex-col items-center" style={backgroundStyle}>
                    <div className="z-20 w-52 flex justify-between absolute bottom-10">
                        <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} icon={faChevronLeft} style={{backgroundColor: '#f2f9f1', color:'#5c715e'}}/>
                        <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} icon={faChevronRight} style={{backgroundColor: '#f2f9f1', color:'#5c715e'}}/>
                    </div>
                </div>
            </div>
            </>
        ) }
        </>
    )
};