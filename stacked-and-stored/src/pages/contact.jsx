import { useEffect } from "react";
import { ContactForm } from "../components/Forms/contactForm";

export const Contact = () => {
    useEffect(() => {
        return window.scrollTo(0, 0, { behavior: 'smooth'})
    }, [])

    return (
        <>
        <div className="h-full flex flex-col bg-white justify-center items-center w-full pt-52" style={{backgroundColor: '#ddeedf'}}>
            <div className="card relative w-11/12 p-4 mb-10 max-w-screen-lg shadow-md" style={{backgroundColor: '#f2f9f1'}}>
                    <p className="text-center p-3 text-xl" style={{color:'#5c715e'}}>
                        I'm here to help! If you're feeling overwhelmed by 
                        clutter or just need some guidance on where to begin, 
                        don't hesitate to reach out. I am dedicated to creating organized, 
                        serene spaces that enhance your comfort and productivity. Whether 
                        you have a question about my services or need advice on a specific 
                        organizing challenge, please use the form below to get in touch. I 
                        look forward to helping you transform your space into a beautifully organized haven!
                    </p>
            </div>
            <div className="shadow-md rounded-md w-11/12 p-4 relative mb-10 max-w-screen-md" style={{backgroundColor: '#f2f9f1'}}>
                <ContactForm />
            </div>
        </div>    
        </>
    )
};