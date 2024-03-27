export const AboutValue = ({ windowWidth, data }) => {

    return (
        <>
        {windowWidth > 900 ? 
        (
            <>
            <div className="w-full h-screen flex justify-evenly items-center">
                <div className="bg-gray-200 w-full h-3/5 flex justify-evenly items-center">
                    {data.map(value => {
                        return(
                            <div key={value.id} className="border-2 bg-white rounded-md shadow-sm h-2/3 w-1/4 flex flex-col justify-evenly items-center px-5">
                                <h1 className="text-3xl">{value.title}</h1>
                                <p className="text-center">{value.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            </>
        ) : (
            <>
            <div className="bg-gray-200 w-full h-screen flex flex-col justify-evenly items-center relative">
                {data.map(value => {
                    return(
                        <div key={value.id} className="h-1/3 w-11/12 flex flex-col justify-evenly items-center">
                            <div className="card relative shadow-md bg-gray-100 w-full h-5/6 flex flex-col justify-evenly items-center px-5">
                                <h1 className="text-3xl">{value.title}</h1>
                                <p className="text-center">{value.content}</p>
                            </div>
                        </div>
                    )
                })}   
            </div> 
            </>
        )}     
        </>
    )
};