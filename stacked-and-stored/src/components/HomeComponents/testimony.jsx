import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from "./navButton";
import { testIMG1, testIMG2, testIMG3, testIMG4, testIMG5 } from "./images";

const testimonies = [
    {
        name: 'Tyler Pittman',
        title: 'Life-Changing!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        src: testIMG1,
    },
    {
        name: 'Jordan Pittman',
        title: 'New go to!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Ante metus dictum at tempor commodo ullamcorper a. Morbi quis commodo odio aenean sed. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Lobortis mattis aliquam faucibus purus in.',
        src: testIMG2,
    },
    {
        name: 'Michael Lee',
        title: 'Best Wife EVER!!',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant. Id velit ut tortor pretium viverra. Turpis egestas sed tempus urna et. Mi tempus imperdiet nulla malesuada. Volutpat consequat mauris nunc congue nisi vitae. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien.',
        src: testIMG3,
    },
    {
        name: 'The Literal President',
        title: 'Built the whitehouse',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Quis imperdiet massa tincidunt nunc. Velit laoreet id donec ultrices tincidunt arcu. Libero enim sed faucibus turpis in eu mi bibendum neque. Arcu non odio euismod lacinia at. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. In hac habitasse platea dictumst quisque sagittis.',
        src: testIMG4,
    },
    {
        name: 'Jason Day',
        title: 'Garage makeover',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet. Mi tempus imperdiet nulla malesuada pellentesque. Tincidunt eget nullam non nisi est sit amet facilisis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Suscipit adipiscing bibendum est ultricies. Aenean pharetra magna ac placerat. Mauris a diam maecenas sed enim ut sem viverra.',
        src: testIMG5,
    }
];

export const Testimony = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 800;
    // Placeholder for setting the current testimony. useState hook usage will be determined by your logic addition.
    const [currentTestimony, setCurrentTestimony] = useState(0);

    useEffect(() => {
        testimonies.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }, [testimonies])

    const handleClick = (direction) => {
        setCurrentTestimony(prevIndex => {
            if (direction === 'left') {
                return prevIndex === 0 ? testimonies.length - 1 : prevIndex - 1;
            } else { 
                return (prevIndex + 1) % testimonies.length;
            }
        });
    };

    const backgroundStyle = {
        backgroundImage: `url(${testimonies[currentTestimony].src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 2.2s ease-in-out',
    };

    // display testimony details in the container

    return (
        <div className="h-screen w-full flex justify-center items-center mb-5">
            {isWideScreen ? (
                <>
                    <div className="bg-gray-200 w-full h-56"></div>
                    <div className=" bg-gray-400 w-2/5 absolute h-3/5 right-6" style={backgroundStyle}></div>
                    <div className="border-2 border-green-400 bg-white w-1/2 h-96 absolute left-8 flex flex-col justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-5/6 h-5/6 flex flex-col items-center justify-evenly">
                                <h1 className="text-3xl">{testimonies[currentTestimony].title}</h1>
                                <p className="text-center text-sm">{testimonies[currentTestimony].content}</p>
                                <h2> -{testimonies[currentTestimony].name}</h2>
                            </div>
                            <NavButton extraClasses="absolute bottom-10 left-20 p-1" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} /></NavButton>
                            <NavButton extraClasses="absolute bottom-10 right-20 p-1" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} /></NavButton>
                        </div>
                        <NavButton extraClasses="w-36 h-12 absolute -bottom-8 bg-white border-2">View all</NavButton>
                        <div className="border-2 border-red-400 bg-white w-8/12 h-16 absolute top-0 -translate-y-6 flex justify-center items-center">
                            <h1>Testimonies</h1>
                        </div>
                    </div>
                </>
            ) : (
                <div className=" mt-5 h-full w-full flex flex-col justify-center items-center">
                    <div className="border-2 border-red-400 w-3/4 h-16 bg-white flex items-center justify-center z-10">
                        <h1>Testimonies</h1>
                    </div>
                    <div className="border-2 border-green-400 w-10/12 h-3/5 -translate-y-6 flex justify-center items-center relative">
                        <div className="w-5/6 h-5/6 flex flex-col justify-evenly items-center">
                            <h1>{testimonies[currentTestimony].title}</h1>
                            <p className="text-center text-sm">{testimonies[currentTestimony].content}</p>
                            <h2 className="text-sm"> -{testimonies[currentTestimony].name}</h2>
                        </div>
                        <NavButton extraClasses="-translate-x-20 absolute bottom-2" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} /></NavButton>
                        <NavButton extraClasses="translate-x-20 absolute bottom-2" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} /></NavButton>
                    </div>
                    <div className="border-2 bg-gray-400 h-2/5 w-9/12" style={backgroundStyle}></div>
                    <NavButton extraClasses="w-24 h-10 mt-3.5 border-2">View all</NavButton>
                </div>
            )}
        </div>
    );
};