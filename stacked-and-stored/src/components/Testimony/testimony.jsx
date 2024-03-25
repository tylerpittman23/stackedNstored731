export const Testimony = ({ windowWidth }) => {

    return (
        <>
        {windowWidth > 800 ? (
            <>
            <div className=" mt-5 w-3/4 h-96 flex justify-end items-center relative">
                <div className="border-2 bg-gray-200 w-7/12 h-36 relative">
                    <div className="border-2 bg-gray-400 h-80 w-7/12 absolute right-16 -translate-y-24"></div>
                </div>
                <div className="border-2 border-green-400 bg-white w-5/12 absolute h-72 left-12 flex justify-center items-center">
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
                </div>
            </div>
            </>
            ) : (
            <>
            <div className="mt-5 w-full flex flex-col justify-center items-center">
                <div className="border-2 border-red-400 w-3/4 h-16 bg-white flex items-center justify-center z-10">
                    <h1>Testimonies</h1>
                </div>
                <div className="border-2 border-green-400 w-10/12 h-64 -translate-y-6 flex justify-center items-end">
                    <div className="border-2 border-red-400 w-20 flex justify-evenly items-center">
                        <button className="text-3xl">&larr;</button>
                        <button className="text-3xl">&rarr;</button>
                    </div>
                </div>
                <button className="border-2 border-red-400 w-24 h-10">
                    <h2 className="">View all</h2>
                </button>
            </div>
            </>
        )}
        </>
    )
};