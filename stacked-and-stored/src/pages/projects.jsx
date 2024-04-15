import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProjectCard } from "../components/ProjectsComponents/projectCard";
import { project1Imgs } from "../components/ProjectsComponents/images/project1Imgs";
import { project2Imgs } from "../components/ProjectsComponents/images/project2Imgs";
import { project3Imgs } from "../components/ProjectsComponents/images/project3Imgs";
import { project4Imgs } from "../components/ProjectsComponents/images/project4imgs";
import { project5Imgs } from "../components/ProjectsComponents/images/project5Imgs";
import { project6Imgs } from "../components/ProjectsComponents/images/project6Imgs";

const projectData = {
    header: "Browse the gallery to see the transformative work I have achieved through Stacked & Stored 731. Each project showcases my commitment to creating spaces that are not only organized but also infused with personalized touches that reflect my clients' unique lifestyles. From streamlined home offices to serene living areas, my portfolio highlights the effectiveness and beauty of my organizing solutions. Let these successes inspire your own journey to a more organized space.",
    projects: [
        {
            id: 'project1',
            title: 'Project 1',
            imgs: [...project1Imgs],
        },
        {
            id: 'project2',
            title: 'Project 2',
            imgs: [...project2Imgs],
        },        
        {
            id: 'project3',
            title: 'Project 3',
            imgs: [...project3Imgs],
        },        
        {
            id: 'project4',
            title: 'Project 4',
            imgs: [...project4Imgs],
        },        
        {
            id: 'project5',
            title: 'Project 5',
            imgs: [...project5Imgs],
        },        
        {
            id: 'project6',
            title: 'Project 6',
            imgs: [...project6Imgs],
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
    const isLargeScreen = windowWidth > 900;
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
                <div className="w-3/5 mb-5 bg-white shadow-md flex justify-center items-center px-6 py-10">
                    <p className="text-center text-lg">{projectData.header}</p>
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
                <div className="bg-white shadow-md rounded-sm w-5/6 mb-5 flex justify-center items-center py-10 px-5">
                    <p className="text-center text-lg">{projectData.header}</p>
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