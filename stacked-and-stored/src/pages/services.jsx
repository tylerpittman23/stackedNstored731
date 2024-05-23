import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ServiceCard } from "../components/ServiceComponents";
import { closetImgs } from '../components/ServiceComponents/images/closetsImgs/index.js';
import { atticImgs } from "../components/ServiceComponents/images/atticsImgs/index.js";
import { kitchenImgs } from "../components/ServiceComponents/images/kitchenImgs/index.js";
import { garageImgs } from "../components/ServiceComponents/images/garagesImgs/index.js";

const leftCardStyles = {
    imgStyle: 'absolute -translate-x-1/2',
    textBox: 'absolute right-10',
    card: 'card',
}

const rightCardStyles = {
    imgStyle: 'absolute translate-x-1/2',
    textBox: 'absolute left-10',
    card: 'card2'
}
const serviceData = {
    header: 'Discover my professional organizing services tailored to meet your specific needs. From decluttering homes to optimizing workspaces, I provide customized solutions to transform your areas into efficient, tranquil spaces. Let me help you achieve a more organized and peaceful environment. Contact me today to begin your journey!',
    services: [
        {
            id: 'closets',
            title: 'Closets',
            info: '',
            imgs: [...closetImgs],
        },
        {
            id: 'attics',
            title: 'Attics',
            info: '',
            imgs: [...atticImgs],
        },
        {
            id: 'garages',
            title: 'Garages',
            info: '',
            imgs: [...garageImgs],
        },
        {
            id: 'kitchens',
            title: 'Kitchens',
            info: '',
            imgs: [...kitchenImgs],
        }
    ]
}


export const Services = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const type = windowWidth > 1000 ? 'large' : 'small';
    
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
        <div className="h-full flex flex-col justify-center items-center w-full pt-52" style={{backgroundColor: '#ddeedf'}}>

        {type === 'large' ? 
        (
            <>
                <div className="shadow-md w-3/5 bg-white flex justify-center items-center relative p-6" style={{backgroundColor: '#f2f9f1'}}>
                    <p className="text-center text-2xl" style={{color: '#5c715e'}}>{serviceData.header}</p>
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
            <div className="w-10/12 shadow-md p-6 flex justify-center items-center" style={{backgroundColor: '#f2f9f1'}}>
                <p className="text-2xl text-center" style={{color: '#5c715e'}}>{serviceData.header}</p>
            </div>
            {serviceData.services.map((service, index) => {
                return <ServiceCard key={service.id} type={type} serviceData={service}/>
            })}
            </>
        )}
        <div className="h-full w-full flex flex justify-center items-center" style={{backgroundColor: '#f2f9f1'}}>
            <div className="w-full max-w-screen-lg p-10 flex flex-col justify-center items-center" >
                <p 
                    className="text-center text-lg"
                    style={{color: '#5c715e'}}
                    >
                        While my website highlights a range of services I offer, my expertise goes beyond what's listed. 
                        I pride myself on my flexibility and creativity in tackling any organizational challenge you may face. 
                        If you have a unique project or specific need, don't hesitate to reach out. I'm here to help you find the perfect solution for your space.
               </p>
               <button className="mt-8 p-2 rounded-sm text-lg" style={{backgroundColor: '#5c715e', color:'#f2f9f1'}}>Contact me</button>
            </div>
        </div>

        </div>

        </>
        
    )
};