import { useEffect, useState } from "react";

export const Footer = ({ windowWidth }) => {
    return (
        <>
        <div className="border-2 border-black w-full flex flex-col mt-5">
            <div className="border-2 border-black flex flex-col justify-center items-center">
                    {windowWidth < 800 ? 
                    
                    (<>
                    <div className="flex justify-center items-center h-24 w-11/12">
                        <div className="border-2 border-black w-full h-16 text-xl flex justify-center items-center">follow me @INSTAGRAM</div>
                    </div>
                    <div className="w-full">
                    <div className="flex justify-evenly mt-5">
                        <div className="border-2 bg-gray-200 w-2/5 h-64">post</div>
                        <div className="border-2 bg-gray-200 w-2/5 h-64">post</div>
                    </div>
                    <div className="flex justify-evenly mt-5">
                        <div className="border-2 bg-gray-200 w-2/5 h-64">video</div>
                        <div className="border-2 bg-gray-200 w-2/5 h-64">post</div>
                    </div>
                    </div>
                    <div className="border-2 border-black w-full mt-5">
                        <div className="flex flex-col p-8">
                            <div className="border-2 w-48 h-64 mt-5">
                                <h1>Services</h1>
                            </div>
                            <div className="border-2 w-48 h-64 mt-5">
                                <h1>Projects</h1>
                            </div>
                            <div className="border-2 w-48 h-64 mt-5">
                                <h1>Contact</h1>
                            </div>
                        </div>
                    </div>
                    </> 
                    ) : (
                        <>
                        <div className="flex justify-center items-center h-24 w-11/12">
                            <div className="border-2 border-black w-3/4 h-16 text-3xl flex items-center justify-center">
                               <span>follow me @INSTAGRAM</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-evenly">
                            <div className="border-2 bg-gray-200 w-48 h-64">post</div>
                            <div className="border-2 bg-gray-200 w-48 h-64">post</div>
                            <div className="border-2 bg-gray-200 w-48 h-64">video</div>
                            <div className="border-2 bg-gray-200 w-48 h-64">post</div>
                        </div>
                        <div className="border-2 border-black w-full mt-5">
                            <div className="flex justify-evenly items-center px-4">
                                <div className="border-2 w-48 h-64">
                                    <h1>Services</h1>
                                </div>
                                <div className="border-2 w-48 h-64">
                                    <h1>Projects</h1>
                                </div>
                                <div className="border-2 w-48 h-64">
                                    <h1>Contact</h1>
                                </div>
                            </div>
                        </div>
                        </>
                    )}
                
            </div>
        </div>
        </>
    )
};