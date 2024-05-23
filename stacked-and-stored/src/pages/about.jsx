import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AboutHero, AboutValue, TestimonyCard } from "../components/AboutComponents";

const aboutData = {
    hero: {
        header: 'Thanks for choosing Stacked & Stored 731',
        statement: 'Welcome to Stacked & Stored 731, your destination for professional organizing solutions. My mission is to transform cluttered spaces into serene, functional environments tailored to your style and needs. Thank you for exploring my services; I look forward to collaborating with you to create an organized space that enhances your daily life.',
        intro: "With over a decade in teaching, I honed exceptional organizational skills and attention to detail. A few years ago, I redirected my passion for helping others into launching Stacked & Stored 731. My educational experience influences my approach, understanding that an orderly space promotes clarity and functionality. I'm dedicated to transforming chaotic environments into beautifully organized spaces that reflect each client's unique needs and style.",
    },
    values : [
        {
            id: 1,
            title: 'Efficiency & Functionality',
            content: 'I prioritize efficiency in my organizing approach, aiming to enhance both aesthetics and functionality. I design systems that streamline routines and maximize space, ensuring my clients experience less stress and more productivity in their daily lives.'
        },
        {
            id: 2,
            title: 'Personalized Solutions',
            content: 'Recognizing that each client has unique needs, I offer tailored organizing solutions that reflect individual preferences and lifestyles. My commitment to customization guarantees that each project is as distinct and satisfying as the client themselves.'
        },
        {
            id: 3,
            title: 'Empathy & Support',
            content: 'With a background in education, I bring empathy and support to my organizing projects. I understand the emotional challenges involved in decluttering and reorganizing, offering guidance and encouragement to make the process less overwhelming and more empowering for my clients.'
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
            content: "Thrilled with the professional organizing services I received from Joann! In every interaction, her communication was clear and responsive, making the entire process seamless. Joann's services were delivered efficiently, and the pricing was fair and transparent. I am looking forward to getting Joann to help me with my next organizing project! Highly recommend to anyone looking to declutter and beautify their space with the help of a true professional.",
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
        <div className="h-full flex flex-col justify-center items-center w-full pt-44" style={{backgroundColor: '#ddeedf'}}>
            <AboutHero windowWidth={windowWidth} data={aboutData.hero}/>
            <AboutValue windowWidth={windowWidth} data={aboutData.values}/>
            <div id="testimonies" className="bg-white h-full w-full flex flex-wrap justify-center items-center relative pt-52" style={{backgroundColor: '#ddeedf'}}>
                <h1 className="bg-white shadow-lg text-center text-4xl px-5 py-10 mx-5 absolute top-6 font-bold" style={{color:'#5c715e', backgroundColor: '#f2f9f1'}}>Here's what my clients have to say</h1>
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