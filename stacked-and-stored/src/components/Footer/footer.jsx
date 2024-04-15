import { PostDisplay } from "./PostDisplay";
import { FooterLink } from "./FooterLink";
import { reelONE, reelTWO, reelTHREE, reelFOUR } from "./images";

const footerData = {
    posts: [
        {
            href: 'https://www.instagram.com/reel/Cwtk-xirZwq/',
            title: 'Garage Makeover',
            img: reelONE,
            description: "I’d love to help make your garage more functional!! #stackedandstored731 #garagegoals #jacksontn #declutter #getorganized #reclaimyourspace",
        },
        {
            href: 'https://www.instagram.com/reel/C3ZAjMprMWP/',
            title: 'Attic Revamp',
            img: reelTWO,
            description: "My client was motivated!! We accomplished all this in one day with 3 trips to the dump and 3 to donate! At the end of the day she had free space in her attic!! 😊",
        },
        {
            href: 'https://www.instagram.com/reel/Cz10ZjdAwos/',
            title: 'Storage Closet Makeover',
            img: reelTHREE,
            description: "Large storage closet makeover!! What you don’t see here: removed old shelving, repaired wall, fresh coat of paint, collaborative effort to sort and declutter, remaining things organized into containers. My client wanted clear bins (my fav 😉) so she can see what’s inside.",
        },
        {
            href: 'https://www.instagram.com/reel/CitfAyEgVLB/',
            title: 'Organized Pantry',
            img: reelFOUR,
            description: 'Do you have a space that needs to be organized? Decluttered? Message me!!',
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
        <div className="bg-gray-100 w-full flex flex-col items-center pt-16">
            <div>
                <h1 className="text-3xl text-gray-500 text-center px-4">
                    follow me <a className='text-gray-400' href="https://www.instagram.com/stacked_stored_731/reels/" target="blank">@stacked_stored_731</a> on Instagram</h1>
            </div>
            <div className="w-full p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {footerData.posts.map((post, index) => (
                        <PostDisplay key={index} windowWidth={windowWidth} post={post} />
                    ))}
                </div>
            </div>
            <div className={`${isWideScreen ? 'justify-evenly items-center' : 'flex-col justify-center items-start'} w-full mt-10 flex p-4`}>
                <FooterLink links={footerData.links.services}/>
                <FooterLink links={footerData.links.projects} />
                <FooterLink links={footerData.links.contact} />
            </div>
        </div>
    );
};
