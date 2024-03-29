import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from "./navButton";
import { testIMG1, testIMG2, testIMG3, testIMG4, testIMG5 } from "./images";

const testimonies = [
    {
        content: "Stacked and Stored really brought peace and order to my home. I am pretty organized but Joann brought my spaces to a new level of order. I never knew my closets and drawers had so much space! She even organized my garage and hung amazing shelves that would hold hundreds of pounds of items! I had her out for almost every room in my house. I love how she labels containers! Joann hauls unusable things to the dump, and she carries usable items to a charity store. I highly recommend that you have Joann out to organize a space or two. It’s contagious though. You won’t want to stop until the entire house is stacked and sorted!",
        src: testIMG1,
    },
    {
        content: 'I highly recommend stacked and stored. Joann came to my rescue right after Christmas when I wanted to go on a trip but as soon as I got back my kitchen would be remodeled.  I needed everything packed up and organized while I was gone. I trusted Joann to come and do this monumental task while I was gone.  I came home to find that Joann went above and beyond my expectations. My kitchen was clean and empty. Boxes were organized and labeled which was so helpful when it came time to unpack.  Plus I needed a few items during the remodel and I found those items quickly and easily because of the lists and labels of all the contents. It took her a couple of days to do what would have taken me weeks.  I would not hesitate for a second to call her to pack for me again or to tackle an organization project',
        src: testIMG2,
    },
    {
        content: 'I highly recommend Joann! She did a wondeful job on our attic! She helped me with sorting, carried away unwanted items to donation centers, shopped for containers and shelving, put together shelving and hung hooks for hanging wreaths. She labeled and organized everything so well. She even swept and cleaned up when finished! We plan to use her to help us with our storage garage next!',
        src: testIMG3,
    },
    {
        content: "We cannot recommend Stacked and Stored 731 highly enough. Joann took the time to understand our specific needs and preferences, tailoring her solutions to suit our requirements perfectly. Her ability to balance functionality with aesthetic appeal ensured that not only was our garage more organized than ever before, but it also looked better than we could have imagined. Whether you're grappling with a cluttered garage, an overflowing closet, or any other organizational challenge, Joann possesses the expertise, dedication, and integrity to deliver outstanding results. With Stacked and Stored 731, you're not just hiring a service – you're gaining a trusted partner in the quest for a more organized and peaceful living space.",
        src: testIMG4,
    },
    {
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
        <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
            {isWideScreen ? (
                <>
                    <div className="bg-gray-100 w-2/3 h-52"></div>
                    <div className=" bg-gray-400 w-2/5 shadow-lg absolute h-3/5 right-6" style={backgroundStyle}></div>
                    <div className="card2 bg-white shadow-md w-1/2 h-96 absolute left-8 flex flex-col justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-5/6 h-5/6 flex flex-col items-center justify-evenly">
                                {/* <h1 className="text-3xl text-gray-600">{testimonies[currentTestimony].title}</h1> */}
                                <p className="text-center text-sm text-gray-500">{testimonies[currentTestimony].content}</p>
                            </div>
                            <NavButton extraClasses="absolute bottom-10 -translate-x-32 p-1" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#777'}}/></NavButton>
                            <NavButton extraClasses="absolute bottom-10 translate-x-32 p-1" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} style={{color: '#777'}}/></NavButton>
                        </div>
                        <div className="bg-gray-300 rounded-sm transition ease-in-out shadow-sm w-48 h-16 translate-y-7 flex justify-center items-center hover:shadow-lg hover:bg-gray-400">
                            <Link to="/about/#testimonies" className="text-center text-2xl text-white">View all</Link>
                        </div>                        
                        <div className="rounded-sm bg-white w-1/2 h-16 absolute top-0 -translate-y-6 flex justify-center items-center shadow-md">
                            <h1 className="text-3xl text-gray-600">Testimonies</h1>
                        </div>
                    </div>
                </>
            ) : (
                <div className="mt-5 h-full w-full flex flex-col justify-center items-center">
                    <div className="w-1/2 h-16 bg-white flex items-center justify-center z-10 shadow-md">
                        <h1 className="text-3xl text-gray-600">Testimonies</h1>
                    </div>
                    <div className="card2 shadow-md bg-white w-10/12 h-3/5 -translate-y-6 flex justify-center items-center relative">
                        <div className="w-5/6 h-5/6 flex flex-col justify-center items-center">
                            {/* <h1 className="text-center text-gray-500">{testimonies[currentTestimony].title}</h1> */}
                            <p className="text-center text-gray-500" style={{fontSize: '13.5px'}}>{testimonies[currentTestimony].content}</p>
                        </div>
                        <NavButton extraClasses="-translate-x-20 absolute bottom-2" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#777'}}/></NavButton>
                        <NavButton extraClasses="translate-x-20 absolute bottom-2" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} style={{color: '#777'}}/></NavButton>
                    </div>
                    <div className="rounded-sm bg-gray-400 h-2/5 w-9/12 shadow-lg" style={backgroundStyle}></div>
                    <div className="bg-gray-300 rounded-sm transition ease-in-out shadow-sm w-32 h-14 translate-y-8 flex justify-center items-center hover:shadow-lg hover:bg-gray-400">
                        <Link to="" className="text-center text-2xl text-white">View all</Link>
                    </div>
                </div>
            )}
        </div>
    );
};