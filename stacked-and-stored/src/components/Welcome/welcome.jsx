export const Welcome = ({ windowWidth }) => {
    return(
        <>
        <div className="border-2 border-black h-screen w-full flex justify-center items-center relative">
        {windowWidth > 800 ? 
        (
        <>
        {/* <div className=" border-2 border-black w-full mt-5 h-full pt-20 flex flex-col">
        </div> */}
        <div className="w-full h-2/5 bg-gray-200 -translate-x-1/4">
            </div>
            <div className="border-2 bg-gray-400 h-1/2 w-1/3 absolute -translate-x-3/4"></div>
            <div className="border-2 border-green-400 bg-white w-1/3 h-1/3 absolute translate-x-3/4 flex flex-col justify-center items-center">
                <h1>welcome statement</h1>
                <div className="border-2 border-red-400 bg-white w-48 h-16 absolute -bottom-10 flex justify-center items-center">
                    <h1>My Services</h1>
                </div>
            </div>
        </>
        ) : (
        <>
        <div className={windowWidth > 600 ? "w-full flex h-full flex-col items-center justify-center p-5 mt-5" : "w-full flex h-5/6 flex-col items-center justify-center p-5 mt-5"}>
            <div className="border-2 border-green-400 h-1/4 w-9/12 mb-5">
                <h1>Welcome statement</h1>
            </div>
            <div className="border-2 bg-gray-400 h-1/2 w-11/12 mt-5 mb-6 flex items-end justify-center">
                <div className="border-2 border-red-400 w-36 h-12 bg-white translate-y-6 flex justify-center items-center">
                    <h1>My Services</h1>
                </div>
            </div>
        </div>
        </>
        )}
        </div>
        </>
    )
};