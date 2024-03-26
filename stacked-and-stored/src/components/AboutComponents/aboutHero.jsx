export const AboutHero = ({ windowWidth }) => {
    return (
        <>
        <div className=" border-2 border-black w-full h-screen">
        {windowWidth > 800 ? 
        (
            <>
                <div className="border-2 border-black w-full h-full flex flex-col justify-evenly items-center relative">
                    <div className="border-2 border-green-400 w-2/5 h-1/4 absolute top-4 left-20"></div>
                    {windowWidth > 1000 ? 
                    (   <>
                        <div className="border-2 bg-gray-400 w-1/2 h-3/5 absolute left-12 bottom-24"></div>
                        </>
                        ) : (
                        <>
                        <div className="border-2 bg-gray-400 w-3/5 h-1/2 absolute left-16 bottom-24"></div>
                        </>
                    )}
                        <div className="border-2 border-green-400 w-2/5 h-1/2 absolute right-10 top-48"></div>
                </div>
            </>
        ) : (
            <>
            <div className="border-2 border-black w-full h-full flex flex-col justify-evenly items-center relative">
                <div className="border-2 border-green-400 w-5/6 h-36"></div>
                <div className="border-2 bg-gray-400 h-2/5 w-4/5"></div>
                <div className="border-2 border-green-400 w-5/6 h-1/4"></div>
            </div>
            </>
        )}
        </div>
        </>
    )
};