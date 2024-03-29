export const ServiceCard = ({ type, extraClasses, serviceData }) => {
    return (
        <>
        {type === 'large' ?(
            <>
            <div className={`h-full w-full ${extraClasses.bg}`}>
                <div id={serviceData.id} className="w-full h-screen flex flex-col justify-center items-center relative">
                    <div className="bg-gray-200 w-full h-56 absolute"></div>
                    <div  className={`rounded-md shadow-2xl bg-gray-400 w-1/2 h-1/2 ${extraClasses.imgStyle}`} style={{ backgroundImage: `url(${serviceData.src})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    </div>
                    <div className={`${extraClasses.card} bg-white shadow-md rounded-sm bg-gray-100 flex justify-center items-center w-1/3 h-36 ${extraClasses.textBox}`}>
                        <h1 className="text-6xl text-center text-gray-500">{serviceData.title}</h1>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            <div className={`h-screen w-full flex flex-col justify-evenly items-center relative ${extraClasses}`}>
                <div id={serviceData.id} className="bg-gray-300 shadow-md w-full h-48 absolute translate-y-24"></div>
                <div className="card relative shadow-md bg-white rounded-sm h-36 w-3/4 flex justify-center items-center">
                    <h1 className="text-5xl text-center text-gray-500">{serviceData.title}</h1>
                </div>
                <div className="border-2 bg-gray-400 rounded-sm shadow-lg h-1/2 w-11/12 z-10" style={{ backgroundImage: `url(${serviceData.src})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            </div>
            </>
        ) }
        </>
    )
};