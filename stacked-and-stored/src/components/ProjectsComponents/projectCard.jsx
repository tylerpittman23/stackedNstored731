import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const buttonClasses = 'w-8 h-6 text-gray-400 border-1 border-gray-200 p-2 rounded-md';

export const ProjectCard = ({ extraClasses, project }) => {
    const backgroundStyle = {
        backgroundImage: `url(${project.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return(
        <>
        <div id={project.id} className={`${extraClasses.bg} h-screen flex flex-col justify-center items-center py-5 relative`}>
            <div className="bg-gray-300 h-64 w-full absolute bottom-52"></div>
            <div className={`${extraClasses.card} w-11/12 flex flex-col justify-evenly items-center relative`}>
                <div className={`${extraClasses.header} card relative shadow-md w-3/4 flex justify-center items-center`}>
                    <h1 className="text-4xl">{project.title}</h1>
                </div>
                <div className="bg-gray-400 rounded-sm shadow-xl w-full h-3/5 z-10" style={backgroundStyle}></div>
                <div className="absolute -bottom-12 w-56 h-16 flex justify-between items-center px-6">
                    <FontAwesomeIcon className={buttonClasses} icon={faChevronLeft}/>
                    <FontAwesomeIcon className={buttonClasses} icon={faChevronRight}/>
                </div>
            </div>
        </div>      
        </>
    )
};