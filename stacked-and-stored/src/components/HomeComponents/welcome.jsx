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
            <div className="w-full h-48 bg-gray-200 -translate-x-1/4"></div>
            <div className="border-2 bg-gray-400 h-2/5 w-2/5 absolute left-10" style={backgroundStyle}></div>
            <div className="border-2 border-green-400 bg-white w-1/2 h-80 absolute right-8 flex flex-col justify-evenly items-center p-2.5">
              <h1 className="text-lg">Welcome to Stacked and Stored</h1>
              <p className=" text-center text-sm">{welcomeStatement}</p>
              <div className="border-2 border-red-400 bg-white w-48 h-16 absolute -bottom-10 flex justify-center items-center">
                <h1>My Services</h1>
              </div>
            </div>
          </>
        ) : (
          <div className={`${isMediumScreen ? "w-full h-full" : "w-full h-5/6"} flex flex-col items-center justify-center p-2`}>
            <div className="border-2 border-green-400 h-3/5 w-11/12 flex flex-col justify-evenly items-center p-2.5">
              <h1 className="text-xl">Welcome to Stacked and Stored</h1>
              <p className="text-center">{welcomeStatement}</p>
            </div>
            <div className="border-2 bg-gray-400 h-3/5 w-11/12 flex items-end justify-center mt-2" style={backgroundStyle}>
              <div className="border-2 border-red-400 w-36 h-12 bg-white translate-y-6 flex justify-center items-center">
                <h1>My Services</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  