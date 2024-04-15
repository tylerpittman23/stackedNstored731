import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ProjectCard = ({ extraClasses, project }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const buttonClasses = 'w-8 h-6 text-gray-400 bg-white border-1 border-gray-200 p-2 rounded-md';

    const handleNextImage = () => {
        if (currentImgIndex < project.imgs.length - 1) {
            setCurrentImgIndex(currentImgIndex + 1);
        } else {
            setCurrentImgIndex(0);
        }
    };

    const handlePrevImage = () => {
        if (currentImgIndex > 0) {
            setCurrentImgIndex(currentImgIndex - 1);
        } else {
            setCurrentImgIndex(project.imgs.length - 1);
        }
    };

    const backgroundStyle = {
        backgroundImage: `url(${project.imgs[currentImgIndex]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return(
        <>
        <div id={project.id} className={`${extraClasses.bg} h-screen flex flex-col justify-center items-center py-5 relative`}>
            <div className="bg-gray-300 h-64 w-screen absolute bottom-1/4"></div>
            <div className={`${extraClasses.card} w-11/12 flex flex-col justify-evenly items-center relative`}>
                <div className={`${extraClasses.header} card relative bg-white shadow-md w-3/4 flex justify-center items-center`}>
                    <h1 className="text-4xl">{project.title}</h1>
                </div>
                <div className="bg-gray-400 rounded-sm shadow-xl w-full h-3/5 z-10 relative" style={backgroundStyle}>
                    <div className="z-20 w-full flex justify-evenly items-center absolute bottom-10">
                        <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} icon={faChevronLeft}/>
                        <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </div>      
        </>
    )
};