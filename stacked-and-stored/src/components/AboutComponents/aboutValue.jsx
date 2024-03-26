export const AboutValue = ({ windowWidth }) => {
    return (
        <>
        {windowWidth > 800 ? 
        (
            <>
            <div className="border-2 border-black w-full h-screen flex justify-evenly items-center">
                <div className="border-2 border-black bg-gray-200 w-full h-3/5 flex justify-evenly items-center">
                    <div className="border-2 bg-white border-red-400 h-3/5 w-1/4"></div>
                    <div className="border-2 bg-white border-red-400 h-3/5 w-1/4"></div>
                    <div className="border-2 bg-white border-red-400 h-3/5 w-1/4"></div>
                </div>
            </div>
            
            </>
        ) : (
            <>
            <div className="border-2 border-black bg-gray-200 w-full h-screen flex flex-col justify-evenly items-center relative">
                {windowWidth > 600 ? 
                (
                    <>
                    <div className="border-2 border-red-400 bg-white h-64 w-72 absolute left-10 top-10"></div>    
                    <div className="border-2 border-red-400 bg-white h-64 w-72 absolute right-10"></div>    
                    <div className="border-2 border-red-400 bg-white h-64 w-72 absolute left-10 bottom-10"></div> 
                    </>
                ) : (
                    <>
                    <div className="border-2 border-red-400 bg-white h-64 w-72"></div>    
                    <div className="border-2 border-red-400 bg-white h-64 w-72"></div>    
                    <div className="border-2 border-red-400 bg-white h-64 w-72"></div> 
                    </>
                )}   
            </div> 
            </>
        )}     
        </>
    )
};