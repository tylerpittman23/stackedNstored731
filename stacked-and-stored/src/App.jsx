import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/navbar';
import { Footer } from './components/Footer/footer';



function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <>
    {windowWidth > 800 ? 
    (
      <>
      <div className="w-full flex flex-col justify-center overflow-x-hidden">
        <Navbar windowWidth={windowWidth}/>
        <Outlet />
        <Footer windowWidth={windowWidth}/>
      </div>
      </>
    ) : (
      <>
      <div className="w-full overflow-x-hidden">
        <Navbar windowWidth={windowWidth}/>
        <Outlet />
        <Footer windowWidth={windowWidth}/>
      </div>
      </>
    )}
    </>
  )
}

export default App
