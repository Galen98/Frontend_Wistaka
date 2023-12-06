import Header from "../Components/Header"
import HeaderPage from "../Components/HeaderPage";
import Bodyhome from "../Components/Bodyhome";
import { Footer } from "../Components/Footer";
import React, { useState, useEffect } from 'react';
export default function HomePage(){
    const FloatingLogo = () => {
        const [isVisible, setIsVisible] = useState(true);
      
        useEffect(() => {
          const handleScroll = () => {
            const footer = document.querySelector('.foots');
            if (footer) {
              const footerRect = footer.getBoundingClientRect();
              if (footerRect.top <= window.innerHeight) {
                setIsVisible(false);
              } else {
                setIsVisible(true);
              }
            }
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        if (!isVisible) {
          return null;
        }
      
        return (
          <a href="/explore/mobile">
          <div className="floating-logo-container">
            <button className='buttonblack text-white font-medium py-2 px-4 rounded-full'>
            <i className="fa-solid fa-map"></i> Tampilkan peta</button>
          </div>
          </a>
        );
      };

    return(
        <>
      <Header/>
      <Bodyhome/>
      {FloatingLogo()}
      <div className="foots">
      <Footer/>
      </div>
        </>
    )
}