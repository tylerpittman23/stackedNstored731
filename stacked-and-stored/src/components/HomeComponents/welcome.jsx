import { Link } from 'react-router-dom';

import { imgWELCOME } from "./images";

const welcomeStatement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export const Welcome = ({ windowWidth }) => {
    const isWideScreen = windowWidth > 900;
    const isMediumScreen = windowWidth > 600;
    const backgroundStyle = {
      backgroundImage: `url(${imgWELCOME})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  
    return (
      <div className="h-full w-full flex justify-center items-center relative">
        {isWideScreen ? (
          <>
          <div className='h-screen flex items-center'>
            <div className="w-full h-48 bg-gray-100 absolute -z-10"></div>
            {/* <div className=" border-2 bg-gray-400 h-2/5 w-2/5 absolute left-10 shadow-lg" style={backgroundStyle}></div> */}
            <img src={imgWELCOME} className="w-2/3 absolute left-6" alt="" />
            <div className="card shadow-md w-2/5 py-20 px-5 absolute right-10 flex flex-col justify-between items-center">
              <h1 className="text-3xl text-gray-500 text-center mb-20">Welcome to Stacked and Stored</h1>
              <p className=" text-center text-gray-600">{welcomeStatement}</p>
              <div className="rounded-sm bg-gray-300 w-48 h-16 absolute -bottom-8 flex justify-center items-center transition ease-in-out shadow-md hover:bg-gray-400 hover:shadow-xl">
                <Link to="/services/" className="text-3xl text-white">My Services</Link>
              </div>
            </div>
            </div>
          </>
        ) : (
          <div className='w-full h-5/6 flex flex-col items-center justify-center'>
            <div className="card relative shadow-md h-3/5 w-11/12 flex flex-col justify-evenly items-center px-5 py-10 mt-10">
              <h1 className="text-xl text-gray-500 mb-10 text-center">Welcome to Stacked and Stored</h1>
              <p className="text-center text-lg text-gray-500">{welcomeStatement}</p>
            </div>
            <div>
              <div className="mt-10 flex flex-col items-center">
                <img src={imgWELCOME} className="" alt="" />
                <div className="w-48 h-16 rounded-sm bg-gray-300 absolute -bottom-8 flex justify-center items-center transition ease-in-out shadow-md hover:bg-gray-400 hover:shadow-xl">
                  <Link to="/services/" className="text-3xl text-white">My Services</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  