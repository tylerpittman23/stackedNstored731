import heroIMGWide from './images/heroIMG.png';
import heroIMGSmall from './images/heroIMG.jpg';


export const AboutHero = ({ windowWidth, data }) => {

    const isLargeScreen = windowWidth > 1000;

    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <>
        <div className="w-full h-full">
        {isLargeScreen ? 
        (
            <>
                <div className="w-full h-screen flex flex-col justify-evenly items-center relative">
                    <div className="card2 bg-white shadow-md rounded-sm w-3/5 absolute top-6 flex flex-col justify-evenly items-center p-10 z-10">
                        <h1 className="text-2xl text-center text-gray-500 mb-10">{data.header}</h1>
                        <p className=" text-md text-center text-gray-500">{data.statement}</p>
                    </div>
                        {/* <div className="bg-gray-400 w-3/5 h-1/2 absolute left-16 bottom-12" style={{...backgroundStyle, backgroundImage: `url(${heroIMGWide})`}}></div> */}
                        <img src={heroIMGWide} alt="" className="w-3/5 absolute left-10 translate-y-36"/>
                        <div className=" card rounded-sm shadow-md bg-gray-100 w-2/5 h-1/2 absolute right-6 bottom-20 flex flex-col justify-evenly items-center p-3">
                            <h2 className="text-2xl text-center text-gray-500">Hey, I'm Joann Lee.</h2>
                            <p className="text-center text-gray-500">{data.intro}</p>
                        </div>
                </div>
            </>
        ) : (
            <>
            <div className="w-full h-full flex flex-col justify-evenly items-center relative">
                <div className="bg-white shadow-lg w-11/12 flex flex-col justify-evenly items-center px-5 py-10 mb-10">
                    <h1 className="text-2xl text-center text-gray-500 mb-8">{data.header}</h1>
                    <p className="text-md text-center text-gray-500">{data.statement}</p>
                </div>
                {/* <div className="rounded-sm shadow-2xl bg-gray-400 h-2/5 w-4/5" style={{...backgroundStyle, backgroundImage: `url(${heroIMGSmall})`}}></div> */}
                <img src={heroIMGSmall} alt="" className='mb-10'/>
                <div className="shadow-lg bg-white w-11/12 bg-gray-100 flex flex-col justify-evenly items-center px-2 py-10 mb-10">
                    <h2 className=" text-center text-2xl text-gray-500 mb-10">Hi, I'm Joann Lee</h2>
                    <p className="text-center px-6 text-gray-500">{data.intro}</p>
                </div>
            </div>
            </>
        )}
        </div>
        </>
    )
};