import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectCard } from "../components/ProjectsComponents/projectCard";
import { atticIMG, cabinet2IMG, cabinetIMG, closetIMG, garageIMG, pantryIMG } from '../components/ProjectsComponents/images'

const projectData = {
    header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.',
    projects: [
        {
            id: 'project1',
            title: 'Project 1',
            src: atticIMG,
        },
        {
            id: 'project2',
            title: 'Project 2',
            src: cabinet2IMG,
        },        
        {
            id: 'project3',
            title: 'Project 3',
            src: closetIMG,
        },        
        {
            id: 'project4',
            title: 'Project 4',
            src: cabinetIMG,
        },        
        {
            id: 'project5',
            title: 'Project 5',
            src: garageIMG,
        },        
        {
            id: 'project6',
            title: 'Project 6',
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
    const location = useLocation();
    useEffect(() => {
        const scrollId = location.hash;
        if(scrollId) {
            const element = document.querySelector(scrollId);
            return element.scrollIntoView()
        }
        return window.scrollTo(0, 0, { behavior: 'smooth' })
    }, [location])
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);
    return (
        <>
        <div className="h-full flex flex-col bg-gray-100 justify-center items-center w-full pt-52">
            {isLargeScreen ? 
            (
                <>
                <div className="w-1/2 h-36 mb-5 bg-white shadow-md flex justify-center items-center px-6">
                    <p className="text-center">{projectData.header}</p>
                </div>
                <div className="w-full grid grid-cols-2">
                {projectData.projects.map((project, index) => {
                    return (
                        <ProjectCard id={project.id} key={index} project={project} extraClasses={largeStyles}/>
                    )
                })}
                </div>
                </>
            ) : (
                <>
                <div className="bg-white shadow-md rounded-sm w-5/6 h-44 mb-5 flex justify-center items-center p-5">
                    <p className="text-center">{projectData.header}</p>
                </div>
                <div className="w-full grid grid-cols-1">
                    {projectData.projects.map((project, index) => {
                        let bg = index % 2 === 0 ? '' : 'bg-white';
                    return (
                        <ProjectCard id={project.id} key={index} project={project} extraClasses={{...smallStyles, bg}}/>
                    )
                    })}
                </div>
                </>
            )} 
        </div>
        </>
    )
};