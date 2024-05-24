import { Link } from 'react-router-dom';

import welcomeProfileImg from "./images/welcomeProfileImg.png";

const welcomeStatement = "Welcome to Stacked & Stored 731, where your space matters. Join me, Joann Lee,  in transforming clutter into clarity with solutions that are as functional as they are beautiful. Dive into a world of organizational excellence with me and discover the peace that comes from a perfectly curated space. Start your journey to a more organized life today!"

export const Welcome = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 1200;
  
    return (
      <div className="h-full w-full flex justify-center items-center relative">
        {isWideScreen ? (
          <>
          <div className='h-screen flex items-center'>
            <div className="w-full h-48 bg-gray-100 absolute -z-10"></div>
            {/* <div className=" border-2 bg-gray-400 h-2/5 w-2/5 absolute left-10 shadow-lg" style={backgroundStyle}></div> */}
            <img src={welcomeProfileImg} className="w-2/3 absolute left-6" alt="" />
            <div className="card shadow-md w-2/5 py-20 px-5 absolute right-10 flex flex-col justify-between items-center" style={{backgroundColor: '#f2f9f1'}}>
              <h1 className="text-3xl text-gray-500 text-center mb-20" style={{color: '#5c715e'}}>Welcome to Stacked and Stored</h1>
              <p className=" text-center text-gray-600 text-lg" style={{color: '#5c715e'}}>{welcomeStatement}</p>
              <div className="rounded-sm w-48 h-16 absolute -bottom-8 flex justify-center items-center transition ease-in-out shadow-md hover:shadow-xl" style={{backgroundColor: '#5c715e'}}>
                <Link to="/services/" className="text-3xl text-white">My Services</Link>
              </div>
            </div>
            </div>
          </>
        ) : (
          <div className='w-full h-5/6 flex flex-col items-center justify-center'>
            <div className="card relative shadow-md h-3/5 w-11/12 flex flex-col justify-evenly items-center px-5 py-10 mt-10" style={{backgroundColor: '#f2f9f1'}}>
              <h1 className="text-xl text-gray-500 mb-10 text-center" style={{color: '#5c715e'}}>Welcome to Stacked and Stored</h1>
              <p className="text-center text-lg text-gray-500" style={{color: '#5c715e'}}>{welcomeStatement}</p>
            </div>
            <div>
              <div className="mt-10 flex flex-col items-center">
                <img src={welcomeProfileImg} className="w-full max-w-screen-lg" alt="" />
                <div className="w-48 h-16 rounded-sm absolute -bottom-8 flex justify-center items-center transition ease-in-out shadow-md hover:shadow-xl" style={{backgroundColor: '#5c715e'}}>
                  <Link to="/services/" className="text-3xl text-white">My Services</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  