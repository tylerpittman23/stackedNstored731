import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutHero, AboutValue, TestimonyCard } from "../components/AboutComponents";

const aboutData = {
    hero: {
        header: 'Thanks for choosing Stacked and Stored 731',
        statement: 'I am dedicated to helping you live freely in a decluttered space. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    values : [
        {
            id: 1,
            title: 'Value 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute.'
        },
        {
            id: 2,
            title: 'Value 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute. '
        },
        {
            id: 3,
            title: 'Value 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute. '
        }
    ],
    testimonies: [
        {
            content: "Stacked and Stored really brought peace and order to my home. I am pretty organized but Joann brought my spaces to a new level of order. I never knew my closets and drawers had so much space! She even organized my garage and hung amazing shelves that would hold hundreds of pounds of items! I had her out for almost every room in my house. I love how she labels containers! Joann hauls unusable things to the dump, and she carries usable items to a charity store. I highly recommend that you have Joann out to organize a space or two. It’s contagious though. You won’t want to stop until the entire house is stacked and sorted!",
        },
        {
            content: 'I highly recommend stacked and stored. Joann came to my rescue right after Christmas when I wanted to go on a trip but as soon as I got back my kitchen would be remodeled.  I needed everything packed up and organized while I was gone. I trusted Joann to come and do this monumental task while I was gone.  I came home to find that Joann went above and beyond my expectations. My kitchen was clean and empty. Boxes were organized and labeled which was so helpful when it came time to unpack.  Plus I needed a few items during the remodel and I found those items quickly and easily because of the lists and labels of all the contents. It took her a couple of days to do what would have taken me weeks.  I would not hesitate for a second to call her to pack for me again or to tackle an organization project',
        },
        {
            content: 'I highly recommend Joann! She did a wondeful job on our attic! She helped me with sorting, carried away unwanted items to donation centers, shopped for containers and shelving, put together shelving and hung hooks for hanging wreaths. She labeled and organized everything so well. She even swept and cleaned up when finished! We plan to use her to help us with our storage garage next!',
        },
        {
            content: "We cannot recommend Stacked and Stored 731 highly enough. Joann took the time to understand our specific needs and preferences, tailoring her solutions to suit our requirements perfectly. Her ability to balance functionality with aesthetic appeal ensured that not only was our garage more organized than ever before, but it also looked better than we could have imagined. Whether you're grappling with a cluttered garage, an overflowing closet, or any other organizational challenge, Joann possesses the expertise, dedication, and integrity to deliver outstanding results. With Stacked and Stored 731, you're not just hiring a service – you're gaining a trusted partner in the quest for a more organized and peaceful living space.",
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet. Mi tempus imperdiet nulla malesuada pellentesque. Tincidunt eget nullam non nisi est sit amet facilisis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Suscipit adipiscing bibendum est ultricies. Aenean pharetra magna ac placerat. Mauris a diam maecenas sed enim ut sem viverra.',
        }
    ],
}

export const About = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation(); 

    useEffect(() => {
        if (location.hash) {
            const scrollId = location.hash
            const element = document.querySelector(scrollId)
            return element.scrollIntoView()
        }
        return window.scrollTo(0, 0, { behavior: 'smooth'})
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);
    return (
        <>
        <div className="h-full flex flex-col bg-gray-100 justify-center items-center w-full pt-44">
            <AboutHero windowWidth={windowWidth} data={aboutData.hero}/>
            <AboutValue windowWidth={windowWidth} data={aboutData.values}/>
            <div id="testimonies" className="bg-white h-full w-full flex flex-wrap justify-center items-center relative pt-24">
                <h1 className="card bg-white shadow-md text-center text-4xl p-4 absolute top-6">Testimonies</h1>
            {aboutData.testimonies.map((testimony, index) => {
                return (
                    <TestimonyCard key={index} testimony={testimony}/>
                )
            })}
            </div>
        </div>

        </>
    )
};