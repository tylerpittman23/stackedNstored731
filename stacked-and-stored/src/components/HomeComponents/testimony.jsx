export const Testimony = ({ windowWidth }) => {

    return (
        <>
        <div className="border-2 border-black h-screen w-full flex justify-center items-center relative mb-5">
        {windowWidth > 800 ? (
            <>
            {/* <div className=" border-2 border-black mt-5 w-full h-full flex justify-end items-center relative"> */}
                <div className="bg-gray-200 w-full h-1/3"></div>
                <div className="border-2 bg-gray-400 w-1/2 absolute h-3/5 right-12"></div>
                <div className="border-2 border-green-400 bg-white w-1/3 h-2/5 absolute left-12 flex justify-center items-center">
                    <div className="border-2 border-red-400 w-20 flex justify-evenly items-center absolute bottom-10">
                        <button className="text-3xl">&larr;</button>
                        <button className="text-3xl">&rarr;</button>
                    </div>
                    <div className="border-2 border-red-400 bg-white w-36 h-12 absolute -bottom-8 flex justify-center items-center">
                        <h1>View all</h1>
                    </div>
                    <div className="border-2 border-red-400 bg-white w-8/12 h-16 absolute top-0 -translate-y-6 flex justify-center items-center">
                        <h1>Testimonies</h1>
                    </div>
                {/* </div> */}
            </div>
            </>
            ) : (
            <>
            <div className="border-2 mt-5 h-full w-full flex flex-col justify-center items-center ">
                <div className="border-2 border-red-400 w-3/4 h-16 bg-white flex items-center justify-center z-10">
                    <h1>Testimonies</h1>
                </div>
                <div className="border-2 border-green-400 w-10/12 h-1/3 -translate-y-6 flex justify-center items-end">
                    <div className="border-2 border-red-400 w-20 flex justify-evenly items-center">
                        <button className="text-3xl">&larr;</button>
                        <button className="text-3xl">&rarr;</button>
                    </div>
                </div>
                <div className="border-2 border-black h-1/2 w-11/12"></div>
                <button className="border-2 border-red-400 w-24 h-10 mt-3.5">
                    <h2 className="">View all</h2>
                </button>
            </div>
            </>
        )}
        </div>
        </>
    )
};