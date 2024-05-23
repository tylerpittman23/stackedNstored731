import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const PostDisplay = ({ post }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const handleOverlayClick = (e) => {
        if (e.target.id === "modalOverlay") {
            setShowModal(false);
        }
    };

    return (
        <>
        <div className="flex justify-center items-center flex-col mb-5 mt-20 relative" onClick={() => toggleModal(!showModal)}>
            <h1 className="text-center text-3xl mb-5 absolute -top-16" style={{color: '#5c715e'}}>{post.title}</h1>
            <img src={post.img} alt=""className="w-2/3 my-5 rounded-md cursor-pointer"/>
        </div>
        {showModal && (
                <div id='modalOverlay' className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOverlayClick}>
                    <div className="bg-white p-5 rounded-lg shadow-lg w-9/12 max-w-sm relative" style={{backgroundColor: '#f2f9f1'}}>
                        <h2 className="text-2xl mb-2" style={{color: '#5c715e'}}>{post.title}</h2>
                        <img src={post.img} alt="" className="w-full my-3 rounded-md"/>
                        <p className="mb-4" style={{color: '#5c715e'}}>{post.description}</p>
                        <a href={post.href} target="_blank" rel="noopener noreferrer" className="bg-gray-400 p-3 rounded-sm text-white" style={{backgroundColor: '#5c715e', color: '#f2f9f1'}}>
                            Go to Post
                        </a>
                        <button onClick={toggleModal} className="absolute top-4 right-6 text-4xl font-bold"><FontAwesomeIcon icon={faXmark} style={{color: '#5c715e'}}/></button>
                    </div>
                </div>
            )}
        </>
    );
};
