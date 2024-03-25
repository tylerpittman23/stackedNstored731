import { useState } from "react";

export const HeroSlides = ({ windowWidth }) => {

    return (
        <>
        {windowWidth > 800 ? 
        (
            <>
            <div className="border-2 bg-gray-400 h-96 w-7/12 flex justify-between items-center">
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center -translate-x-16">&larr;</div>
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center translate-x-16">&rarr;</div>
            </div>
            </>
        ) : (
            <>
            <div className="border-2 bg-gray-400 h-96 w-11/12 flex justify-between items-center px-2">
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center">&larr;</div>
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center">&rarr;</div>
            </div>
            </>
        )}
        <div className="border-2 w-28 flex justify-evenly items center mt-1">
            <span className="border-2 w-2 h-2 rounded-full bg-gray-200"></span>
            <span className="border-2 w-2 h-2 rounded-full"></span>
            <span className="border-2 w-2 h-2 rounded-full"></span>
            <span className="border-2 w-2 h-2 rounded-full"></span>
            <span className="border-2 w-2 h-2 rounded-full"></span>
            <span className="border-2 w-2 h-2 rounded-full"></span>
        </div>
        </>
    )
};