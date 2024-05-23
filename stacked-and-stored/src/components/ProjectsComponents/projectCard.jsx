import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const ProjectCard = ({ extraClasses, project }) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const buttonClasses = 'w-8 h-6 p-2 rounded-md cursor-pointer';

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
        <div id={project.id} className={`${extraClasses.bg} flex flex-col justify-center items-center py-20 relative`}>
            <div className="h-2/5 w-screen absolute translate-y-8" style={{backgroundColor: '#b6cdbd'}}></div>
            <div className={`${extraClasses.card} w-11/12 flex flex-col justify-evenly items-center relative`}>
                {/* <div className={`${extraClasses.header} card relative bg-white shadow-md w-3/4 flex justify-center items-center`}>
                    <h1 className="text-4xl">{project.title}</h1>
                </div> */}
                <div className="z-10 relative flex flex-col justify-center items-center">
                <img src={project.imgs[currentImgIndex]} className="rounded-sm shadow-xl w-5/6 max-w-screen-sm z-10"/>
                    <div className="z-20 w-full flex justify-evenly items-center absolute bottom-6">
                        <FontAwesomeIcon onClick={handlePrevImage} className={buttonClasses} style={{backgroundColor:'#f2f9f1', color:'#5c715e'}} icon={faChevronLeft}/>
                        <FontAwesomeIcon onClick={handleNextImage} className={buttonClasses} style={{backgroundColor:'#f2f9f1', color:'#5c715e'}} icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </div>      
        </>
    )
};