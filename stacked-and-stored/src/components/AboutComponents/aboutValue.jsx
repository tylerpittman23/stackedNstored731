export const AboutValue = ({ windowWidth, data }) => {

    return (
        <>
        {windowWidth > 1000 ? 
        (
            <>
            <div className="w-full h-screen flex justify-evenly items-center">
                <div className="bg-gray-200 w-full h-4/5 flex justify-evenly items-center" style={{backgroundColor: '#b6cdbd'}}>
                    {data.map(value => {
                        return(
                            <div key={value.id} className="bg-white rounded-md shadow-md h-2/3 w-1/4 flex flex-col justify-evenly items-center px-5" style={{backgroundColor: '#f2f9f1'}}>
                                <h1 className="text-3xl text-gray-500 text-center" style={{color:'#5c715e'}}>{value.title}</h1>
                                <p className="text-center text-gray-500" style={{color:'#5c715e'}}>{value.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            </>
        ) : (
            <>
            <div className="bg-gray-200 w-full h-full flex flex-col justify-evenly items-center relative" style={{backgroundColor: '#b6cdbd'}}>
                {data.map(value => {
                    return(
                        <div key={value.id} className="w-11/12 flex flex-col justify-evenly items-center my-10">
                            <div className="card relative shadow-md bg-gray-100 w-full flex flex-col justify-evenly items-center px-5 py-10" style={{backgroundColor: '#f2f9f1'}}>
                                <h1 className="text-3xl text-center mb-10" style={{color:'#5c715e'}}>{value.title}</h1>
                                <p className="text-center" style={{color:'#5c715e'}}>{value.content}</p>
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