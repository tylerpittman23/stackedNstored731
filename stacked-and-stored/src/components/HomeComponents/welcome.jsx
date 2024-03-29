import { Link } from 'react-router-dom';

import { imgWELCOME } from "./images";

const welcomeStatement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export const Welcome = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 800;
    const isMediumScreen = windowWidth > 600;
    const backgroundStyle = {
      backgroundImage: `url(${imgWELCOME})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  
    return (
      <div className="h-screen w-full flex justify-center items-center relative">
        {isWideScreen ? (
          <>
            <div className="w-full h-48 bg-gray-100 -translate-x-1/3"></div>
            <div className=" border-2 bg-gray-400 h-2/5 w-2/5 absolute left-10 shadow-lg" style={backgroundStyle}></div>
            <div className="card shadow-md w-1/2 h-80 absolute right-8 flex flex-col justify-evenly items-center px-6">
              <h1 className="text-lg text-gray-500">Welcome to Stacked and Stored</h1>
              <p className=" text-center text-sm text-gray-600">{welcomeStatement}</p>
              <div className="rounded-sm bg-gray-300 w-48 h-16 absolute -bottom-8 flex justify-center items-center transition ease-in-out shadow-md hover:bg-gray-400 hover:shadow-xl">
                <Link to="/services/" className="text-3xl text-white">My Services</Link>
              </div>
            </div>
          </>
        ) : (
          <div className={`${isMediumScreen ? "w-full h-5/6" : "w-full h-5/6"} flex flex-col items-center justify-center p-2`}>
            <div className="card relative shadow-md h-3/5 w-11/12 flex flex-col justify-evenly items-center p-2.5">
              <h1 className="text-xl text-gray-500">Welcome to Stacked and Stored</h1>
              <p className="text-center text-lg text-gray-500">{welcomeStatement}</p>
            </div>
            <div className="border-2 bg-gray-400 h-3/5 w-11/12 flex items-end justify-center mt-2 shadow-lg" style={backgroundStyle}>
              <div className="w-48 h-16 rounded-sm bg-gray-300 translate-y-8 flex justify-center items-center transition ease-in-out shadow-md hover:bg-gray-400 hover:shadow-xl">
                <Link to="/services/" className="text-3xl text-white">My Services</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  