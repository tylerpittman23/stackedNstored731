export const Welcome = ({ windowWidth }) => {
    return(
        <>
        {windowWidth > 800 ? 
        (
        <>
        <div className=" w-3/4 mt-5 relative">
            <div className="w-8/12 bg-gray-200 p-5 flex items-center justify-center relative">
                <div className="border-2 bg-gray-400 h-80 w-9/12 flex flex-col items-end justify-center"></div>
            </div>
            <div className="border-2 border-green-400 bg-white w-2/5 h-72 right absolute right-2 -translate-y-80 flex justify-center items-center">
                <h1>welcome statement</h1>
                <div className="border-2 border-red-400 bg-white w-48 h-16 absolute bottom-0 translate-y-10 flex justify-center items-center">
                    <h1>My Services</h1>
                </div>
            </div>
        </div>
        </>
        ) : (
        <>
        <div className="w-11/12 flex flex-col items-center p-5 mt-5">
            <div className="border-2 border-green-400 h-24 w-11/12 mb-5">
                <h1>Welcome statement</h1>
            </div>
            <div className="border-2 bg-gray-400 h-80 w-10/12 mt-5 mb-6 flex items-end justify-center">
                <div className="border-2 border-red-400 w-36 h-12 bg-white translate-y-6 flex justify-center items-center">
                    <h1>My Services</h1>
                </div>
            </div>
        </div>
        </>
        )}
        </>
    )
};