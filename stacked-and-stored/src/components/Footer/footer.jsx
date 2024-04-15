import { PostDisplay } from "./PostDisplay";
import { FooterLink } from "./FooterLink";
import { reelONE } from "./images";

const footerData = {
    posts: [
        {
            href: 'https://www.instagram.com/reel/Cwtk-xirZwq/',
            title: 'Garage Makeover!',
            img: reelONE,
            description: 'Watch me turn this garage into a functional space',
        },
        {
            href: 'https://www.instagram.com/reel/Cwtk-xirZwq/',
            title: 'Garage Makeover!',
            img: reelONE,
            description: 'Watch me turn this garage into a functional space',
        },
        {
            href: 'https://www.instagram.com/reel/Cwtk-xirZwq/',
            title: 'Garage Makeover!',
            img: reelONE,
            description: 'Watch me turn this garage into a functional space',
        },
        {
            href: 'https://www.instagram.com/reel/Cwtk-xirZwq/',
            title: 'Garage Makeover!',
            img: reelONE,
            description: 'Watch me turn this garage into a functional space',
        }
    ],
    links: {
        services: {
            title: 'Services',
            linksArr: [
                {
                    id: 1,
                    content: 'Closets',
                    to: '/services/#closets',
                },                
                {
                    id: 2,
                    content: 'Attics',
                    to: '/services/#attics',
                },                
                {
                    id: 3,
                    content: 'Garages',
                    to: '/services/#garages',
                },                
                {
                    id: 4,
                    content: 'Pantries',
                    to: '/services/#pantries',
                },                
                {
                    id: 5,
                    content: 'Cabinets',
                    to: '/services/#cabinets',
                },
            ]
        },
        projects: {
            title: 'Projects',
            linksArr: [
                {
                    id: 1,
                    content: 'Project 1',
                    to: '/projects/#project1',
                },
                {
                    id: 2,
                    content: 'Project 2',
                    to: '/projects/#project2',
                },
                {
                    id: 3,
                    content: 'Project 3',
                    to: '/projects/#project3',
                },
                {
                    id: 4,
                    content: 'Project 4',
                    to: '/projects/#project4',
                },
                {
                    id: 5,
                    content: 'Project 5',
                    to: '/projects/#project5',
                },
                {
                    id: 6,
                    content: 'Project 6',
                    to: '/projects/#project6',
                },
            ],
        },
        contact: {
            title: 'Contact',
            linksArr: [
                {
                    id: 1,
                    content: 'Reach Out!',
                    to: '/contact',
                },
            ]
        }
    }
}


export const Footer = ({ windowWidth }) => {
    const isWideScreen = windowWidth >= 800;

    return (
        <div className="bg-gray-100 w-full flex flex-col items-center pt-24">
            <div className='px-'>
                <h1 className="text-3xl text-gray-500 text-center">
                    follow me <a className='text-gray-400' href="https://www.instagram.com/stacked_stored_731/" target="blank">@stacked_stored_731</a> on Instagram</h1>
            </div>
            <div className="w-full">
                {isWideScreen ? (
                    <div className="flex w-full justify-evenly mt-5">
                        <PostDisplay windowWidth={windowWidth} post={footerData.posts[0]}/>
                        <PostDisplay windowWidth={windowWidth} post={footerData.posts[1]}/>
                        <PostDisplay windowWidth={windowWidth} post={footerData.posts[2]}/>
                        <PostDisplay windowWidth={windowWidth} post={footerData.posts[3]}/>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-evenly mt-5">
                            <PostDisplay windowWidth={windowWidth} post={footerData.posts[0]}/>
                            <PostDisplay windowWidth={windowWidth} post={footerData.posts[1]}/>
                        </div>
                        <div className="flex justify-evenly mt-5">
                            <PostDisplay windowWidth={windowWidth} post={footerData.posts[2]} />
                            <PostDisplay windowWidth={windowWidth} post={footerData.posts[3]}/>
                        </div>
                    </>
                )}
            </div>
            <div className={`${isWideScreen ? 'justify-evenly items-center' : 'flex-col justify-center items-start'} w-full mt-10 flex p-4`}>                
                <FooterLink links={footerData.links.services}/>
                <FooterLink links={footerData.links.projects} />
                <FooterLink links={footerData.links.contact} />
            </div>
        </div>
    );
};