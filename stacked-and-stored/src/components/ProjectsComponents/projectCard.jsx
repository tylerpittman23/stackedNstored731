export const ProjectCard = ({ extraClasses, project }) => {
    const backgroundStyle = {
        backgroundImage: `url(${project.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return(
        <>
        <div className={`${extraClasses.bg} h-screen flex flex-col justify-center items-center py-5 relative`}>
            <div className="bg-gray-300 h-64 w-full absolute bottom-48"></div>
            <div className={`${extraClasses.card} w-11/12 flex flex-col justify-evenly items-center`}>
                <div className={`${extraClasses.header} card relative shadow-md w-3/4 flex justify-center items-center`}>
                    <h1 className="text-4xl">{project.title}</h1>
                </div>
                <div className="bg-gray-400 rounded-sm shadow-lg w-full h-3/5 z-10" style={backgroundStyle}></div>
            </div>
        </div>      
        </>
    )
};