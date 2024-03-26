import { useState } from "react";

export const HeroSlides = ({ windowWidth }) => {

    return (
        <>
        <div className="border-2 border-black h-screen flex flex-col justify-center items-center w-full pt-36">
        {windowWidth > 800 ? 
        (
            <>
            <div className={ windowWidth > 1200 ? ("w-1/2 border-2 bg-gray-400 h-3/4 flex justify-between items-center") : ("w-8/12 border-2 bg-gray-400 h-3/4 flex justify-between items-center")}>
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center -translate-x-16">&larr;</div>
                <div className="border-2 border-black w-12 h-12 flex justify-center items-center translate-x-16">&rarr;</div>
            </div>
            </>
        ) : (
            <>
            <div className="border-2 bg-gray-400 h-2/3 w-10/12 flex justify-between items-center px-2">
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
        </div>
        </>
    )
};