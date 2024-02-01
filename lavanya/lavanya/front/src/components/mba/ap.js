
import React, { useRef } from 'react';
import Navbar from './Navbar';
import Image from './Image';
import AboutUs from './AboutUs';
import Testmonial from './Testmonial';
import Gallery from './Gallery';
import Feedback from './feedback';
import Branches from './branches';
const Ap = () => {
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const galleryRef = useRef(null);


  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div>
  
        <Navbar
          
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToTestimonial={() => scrollToRef(testimonialRef)}
          scrollToGallery={() => scrollToRef(galleryRef)}
        />
      <Image/>
      <AboutUs/>
      <Branches/>
      <Testmonial/>
      <Gallery/>
      <Feedback/>
       </div>
   
         
  );
};

export default Ap;
