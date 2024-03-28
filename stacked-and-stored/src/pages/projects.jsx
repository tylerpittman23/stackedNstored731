import { useState, useEffect } from "react";
import { ProjectCard } from "../components/ProjectsComponents/projectCard";
import { atticIMG, cabinet2IMG, cabinetIMG, closetIMG, garageIMG, pantryIMG } from '../components/ProjectsComponents/images'

const projectData = {
    header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.',
    projects: [
        {
            title: 'This Project Title',
            src: atticIMG,
        },
        {
            title: 'This Project Title',
            src: cabinet2IMG,
        },        
        {
            title: 'This Project Title',
            src: closetIMG,
        },        
        {
            title: 'This Project Title',
            src: cabinetIMG,
        },        
        {
            title: 'This Project Title',
            src: garageIMG,
        },        
        {
            title: 'This Project Title',
            src: pantryIMG,
        },
    ]
}

const largeStyles = {
    card: 'h-full',
    header: 'h-36'
};

const smallStyles = {
    card: 'h-3/4',
    header: 'h-32'
}

export const Projects = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const isLargeScreen = windowWidth > 800;
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);
    return (
        <>
        <div className="border-2 border-black h-full flex flex-col bg-gray-100 justify-center items-center w-full pt-64">
            {isLargeScreen ? 
            (
                <>
                <div className="w-1/2 h-36 mb-5 bg-white shadow-md flex justify-center items-center px-6">
                    <p className="text-center">{projectData.header}</p>
                </div>
                <div className="w-full grid grid-cols-2">
                {projectData.projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} project={project} extraClasses={largeStyles}/>
                    )
                })}
                </div>
                </>
            ) : (
                <>
                <div className="bg-white shadow-md rounded-sm w-3/4 h-36 mb-5 flex justify-center items-center px-5">
                    <p className="text-center">{projectData.header}</p>
                </div>
                <div className="w-full grid grid-cols-1">
                    {projectData.projects.map((project, index) => {
                        let bg = index % 2 === 0 ? '' : 'bg-white';
                    return (
                        <ProjectCard key={index} project={project} extraClasses={{...smallStyles, bg}}/>
                    )
                    })}
                </div>
                </>
            )} 
        </div>
        </>
    )
};