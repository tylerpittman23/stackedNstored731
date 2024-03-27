import { PostDisplay } from "./PostDisplay";
import { FooterLink } from "./FooterLink";
import { reelONE } from "./images";

const posts = [
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
]

export const Footer = ({ windowWidth }) => {
    const isWideScreen = windowWidth >= 900;
    const followClass = `border-2 border-black w-full h-16 text-${isWideScreen ? '3xl' : 'xl'} flex justify-center items-center`;

    return (
        <div className="bg-gray-100 w-full flex flex-col mt-5 items-center">
            <div className={followClass}>
                <span>follow me @INSTAGRAM</span>
            </div>
            <div className="w-full">
                {isWideScreen ? (
                    <div className="flex w-full justify-evenly mt-5">
                        <PostDisplay windowWidth={windowWidth} post={posts[0]}/>
                        <PostDisplay windowWidth={windowWidth} post={posts[1]}/>
                        <PostDisplay windowWidth={windowWidth} post={posts[2]}/>
                        <PostDisplay windowWidth={windowWidth} post={posts[3]}/>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-evenly mt-5">
                            <PostDisplay windowWidth={windowWidth} post={posts[0]}/>
                            <PostDisplay windowWidth={windowWidth} post={posts[1]}/>
                        </div>
                        <div className="flex justify-evenly mt-5">
                            <PostDisplay windowWidth={windowWidth} post={posts[2]} />
                            <PostDisplay windowWidth={windowWidth} post={posts[3]}/>
                        </div>
                    </>
                )}
            </div>
            <div className="w-full mt-5 flex flex-wrap justify-evenly items-center p-4">
                <FooterLink title="Services" />
                <FooterLink title="Projects" />
                <FooterLink title="Contact" />
            </div>
        </div>
    );
};