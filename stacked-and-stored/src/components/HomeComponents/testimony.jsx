import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavButton } from "./navButton";
import { testimonyImg1, testimonyImg2, testimonyImg3, testimonyImg4, testimonyImg5 } from "./images/testimonyImgs";

const testimonies = [
    {
        content: "Stacked and Stored really brought peace and order to my home. I am pretty organized but Joann brought my spaces to a new level of order. I never knew my closets and drawers had so much space! She even organized my garage and hung amazing shelves that would hold hundreds of pounds of items! I had her out for almost every room in my house. I love how she labels containers! Joann hauls unusable things to the dump, and she carries usable items to a charity store. I highly recommend that you have Joann out to organize a space or two. It’s contagious though. You won’t want to stop until the entire house is stacked and sorted!",
        src: testimonyImg1,
    },
    {
        content: 'I highly recommend stacked and stored. Joann came to my rescue right after Christmas when I wanted to go on a trip but as soon as I got back my kitchen would be remodeled.  I needed everything packed up and organized while I was gone. I trusted Joann to come and do this monumental task while I was gone.  I came home to find that Joann went above and beyond my expectations. My kitchen was clean and empty. Boxes were organized and labeled which was so helpful when it came time to unpack.  Plus I needed a few items during the remodel and I found those items quickly and easily because of the lists and labels of all the contents. It took her a couple of days to do what would have taken me weeks.  I would not hesitate for a second to call her to pack for me again or to tackle an organization project',
        src: testimonyImg2,
    },
    {
        content: 'I highly recommend Joann! She did a wondeful job on our attic! She helped me with sorting, carried away unwanted items to donation centers, shopped for containers and shelving, put together shelving and hung hooks for hanging wreaths. She labeled and organized everything so well. She even swept and cleaned up when finished! We plan to use her to help us with our storage garage next!',
        src: testimonyImg3,
    },
    {
        content: "We cannot recommend Stacked and Stored 731 highly enough. Joann took the time to understand our specific needs and preferences, tailoring her solutions to suit our requirements perfectly. Her ability to balance functionality with aesthetic appeal ensured that not only was our garage more organized than ever before, but it also looked better than we could have imagined. Whether you're grappling with a cluttered garage, an overflowing closet, or any other organizational challenge, Joann possesses the expertise, dedication, and integrity to deliver outstanding results. With Stacked and Stored 731, you're not just hiring a service – you're gaining a trusted partner in the quest for a more organized and peaceful living space.",
        src: testimonyImg4,
    },
    {
        content: "Thrilled with the professional organizing services I received from Joann! In every interaction, her communication was clear and responsive, making the entire process seamless. Joann's services were delivered efficiently, and the pricing was fair and transparent. I am looking forward to getting Joann to help me with my next organizing project! Highly recommend to anyone looking to declutter and beautify their space with the help of a true professional.",
        src: testimonyImg5,
    }
];

export const Testimony = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 1000;
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
    };

    // display testimony details in the container

    return (
        <div className="h-full w-full  flex justify-center items-center my-16">
            {isWideScreen ? (
                <>
                 <div className='h-screen flex items-center'>
                    {/* <div className="bg-gray-300 w-2/3 h-52" style={{backgroundColor: '#b6cdbd'}}></div> */}
                    <div className=" bg-gray-400 w-2/5 shadow-lg absolute h-3/4 right-6" style={backgroundStyle}></div>
                    {/* <div className="border-2 border-black">
                        <img src={testimonies[currentTestimony].src} alt="" className=""/>
                    </div> */}
                    <div className="shadow-md w-1/2 py-32 absolute left-8 flex flex-col justify-center items-center" style={{backgroundColor: '#f2f9f1'}}>
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="w-5/6 h-5/6 flex flex-col items-center justify-evenly">
                                {/* <h1 className="text-3xl text-gray-600">{testimonies[currentTestimony].title}</h1> */}
                                <p className="text-center text-gray-500" style={{color: '#5c715e'}}>{testimonies[currentTestimony].content}</p>
                            </div>
                            <NavButton extraClasses="absolute bottom-10 -translate-x-32 p-1" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#5c715e'}}/></NavButton>
                            <NavButton extraClasses="absolute bottom-10 translate-x-32 p-1" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} style={{color: '#5c715e'}}/></NavButton>
                        </div>
                        <div className="rounded-sm absolute -bottom-2 transition ease-in-out shadow-sm w-48 h-16 translate-y-7 flex justify-center items-center hover:shadow-xl" style={{backgroundColor: '#5c715e'}}>
                            <Link to="/about/#testimonies" className="text-center text-2xl text-white">View all</Link>
                        </div>                        
                        <div className="rounded-sm w-1/2 h-16 absolute top-0 -translate-y-6 flex justify-center items-center shadow-md" style={{backgroundColor: '#f2f9f1'}}>
                            <h1 className="text-3xl text-gray-600" style={{color: '#5c715e'}}>Testimonies</h1>
                        </div>
                    </div>
                    </div>
                </>
            ) : (
                <div className="mt-5 h-full w-full flex flex-col justify-center items-center">
                    <div className="w-1/2 h-16 bg-white flex items-center justify-center z-10 shadow-md" style={{backgroundColor: '#f2f9f1'}}>
                        <h1 className="text-3xl text-gray-600" style={{color: '#5c715e'}}>Testimonies</h1>
                    </div>
                    <div className="shadow-md bg-white w-full py-24 -translate-y-6 flex justify-center items-center relative" style={{backgroundColor: '#f2f9f1'}}>
                        <div className="w-5/6 h-5/6 flex flex-col justify-center items-center">
                            <p className="text-center text-gray-500" style={{color: '#5c715e'}}>{testimonies[currentTestimony].content}</p>
                        </div>
                        <NavButton extraClasses="-translate-x-20 absolute bottom-2" onClick={() => handleClick('left')}><FontAwesomeIcon icon={faChevronLeft} style={{color: '#5c715e'}}/></NavButton>
                        <NavButton extraClasses="translate-x-20 absolute bottom-2" onClick={() => handleClick('right')}><FontAwesomeIcon icon={faChevronRight} style={{color: '#5c715e'}}/></NavButton>
                    </div>
                    {/* <div className="rounded-sm bg-gray-400 h-2/5 w-9/12 shadow-lg" style={backgroundStyle}></div> */}
                    <img src={testimonies[currentTestimony].src} alt="" className="w-5/6 max-w-screen-sm"/>
                    <div className="bg-gray-300 rounded-sm transition ease-in-out shadow-sm w-32 h-14 translate-y-8 flex justify-center items-center hover:shadow-lg" style={{backgroundColor: '#5c715e'}}>
                        <Link to="/about/#testimonies" className="text-center text-2xl text-white">View all</Link>
                    </div>
                </div>
            )}
        </div>
    );
};