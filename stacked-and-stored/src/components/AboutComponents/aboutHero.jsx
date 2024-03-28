import heroIMGWide from './images/heroIMG.png';
import heroIMGSmall from './images/heroIMG.jpg';


export const AboutHero = ({ windowWidth, data }) => {

    const isLargeScreen = windowWidth > 800;

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <>
        <div className="w-full h-screen">
        {isLargeScreen ? 
        (
            <>
                <div className="w-full h-full flex flex-col justify-evenly items-center relative">
                    <div className="card2 shadow-md rounded-sm w-3/5 h-1/3 absolute top-6 flex flex-col justify-evenly items-center p-6">
                        <h1 className="text-xl text-center">{data.header}</h1>
                        <p className='text-lg text-center'>{data.statement}</p>
                    </div>
                        <div className="bg-gray-400 w-3/5 h-1/2 absolute left-16 bottom-12" style={{...backgroundStyle, backgroundImage: `url(${heroIMGWide})`}}></div>
                        <div className=" card rounded-sm shadow-md bg-gray-100 w-2/5 h-1/2 absolute right-6 bottom-20 flex flex-col justify-evenly items-center p-3">
                            <h2>Hi, I'm Joann Lee</h2>
                            <p className="text-center">{data.intro}</p>
                        </div>
                </div>
            </>
        ) : (
            <>
            <div className="w-full h-full flex flex-col justify-evenly items-center relative">
                <div className="shadow-lg w-11/12 h-1/4 flex flex-col justify-evenly items-center">
                    <h1 className="text-lg text-center">{data.header}</h1>
                    <p className='text-xs text-center px-6'>{data.statement}</p>
                </div>
                <div className="rounded-sm shadow-2xl bg-gray-400 h-2/5 w-4/5" style={{...backgroundStyle, backgroundImage: `url(${heroIMGSmall})`}}></div>
                <div className="shadow-lg w-11/12 bg-gray-100 h-56 flex flex-col justify-evenly items-center">
                    <h2>Hi, I'm Joann Lee</h2>
                    <p className="text-center text-sm px-6">{data.intro}</p>
                </div>
            </div>
            </>
        )}
        </div>
        </>
    )
};