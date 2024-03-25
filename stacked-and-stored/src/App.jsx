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
    <NextUIProvider>
      <Navbar windowWidth={windowWidth}/>
      <Outlet windowWidth={windowWidth}/>
      <Footer windowWidth={windowWidth}/>
    </NextUIProvider>
    </>
  )
}

export default App
