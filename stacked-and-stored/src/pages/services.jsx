import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ServiceCard } from "../components/ServiceComponents";
import { atticIMG, cabinetIMG, closetIMG, garageIMG, pantryIMG } from "../components/ServiceComponents/images";

const leftCardStyles = {
    imgStyle: 'absolute left-10',
    textBox: 'absolute right-10',
    card: 'card',
}

const rightCardStyles = {
    imgStyle: 'absolute right-10',
    textBox: 'absolute left-10',
    card: 'card2',
    bg: 'bg-white'
}
const serviceData = {
    header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
    services: [
        {
            id: 'closets',
            title: 'Closets',
            info: '',
            src: closetIMG
        },
        {
            id: 'attics',
            title: 'Attics',
            info: '',
            src: atticIMG
        },
        {
            id: 'garages',
            title: 'Garages',
            info: '',
            src: garageIMG
        },
        {
            id: 'pantries',
            title: 'Pantries',
            info: '',
            src: pantryIMG
        },
        {
            id: 'cabinets',
            title: 'Cabinets',
            info: '',
            src: cabinetIMG
        }
    ]
}


export const Services = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const type = windowWidth > 800 ? 'large' : 'small';
    
    const location = useLocation();

    useEffect(() => {
        const scrollId = location.hash;
        if(scrollId) {
            const element = document.querySelector(scrollId);
            return element.scrollIntoView()
        }
        return window.scrollTo(0, 0, { behavior: 'smooth' })
    }, [location])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [windowWidth]);
    return (
        <>
        <div className="h-full flex flex-col bg-gray-100 justify-center items-center w-full pt-64">

        {type === 'large' ? 
        (
            <>
                <div className="shadow-md h-48 w-3/5 bg-white flex justify-center items-center relative p-6">
                    <p className="text-center text-xl bg-white">{serviceData.header}</p>
                </div>
                {serviceData.services.map((service, index) => {
                    if (index % 2 === 0) {
                    return <ServiceCard key={service.id} type={type} extraClasses={leftCardStyles} serviceData={service}/>
                    }
                    return <ServiceCard key={service.id} type={type} extraClasses={rightCardStyles} serviceData={service}/>
                })}
            </>
        ) : (
            <>
            <div className="bg-white h-48 w-10/12 shadow-md p-6 flex justify-center items-center">
                <p className="text-lg text-center">{serviceData.header}</p>
            </div>
            {serviceData.services.map((service, index) => {
                let bg = index % 2 === 0 ? '' : 'bg-white';
                return <ServiceCard key={service.id} type={type} extraClasses={bg} serviceData={service}/>
            })}
            </>
        )}
        </div>

        </>
        
    )
};