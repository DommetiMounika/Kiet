// Gallery.js

import React from 'react';
import './Gallery.css'; // Import the CSS file for styling

const Gallery = () => {
  return (
    <div
    className="Gallery"
    style={{
      backgroundColor: 'white',
      color: 'black',
      padding: '20px',
      position: 'relative',
      minHeight: '49vh',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
    }}
  >
      <h1>Image Gallery</h1>
     <p className="p34">Explore images from our campus and events...</p>
    <div className="gallery-container back about">
        <div className="image-item">
          <img className="width" src="images/k1.jpg" alt="Imag" />
        </div>
        <div className="image-item">
          <img className="width" src="images/k2.jpg" alt="Imag" />
        </div>
        <div className="image-item">
          <img className="width" src="images/k3.jpg" alt="Imag" />
        </div>

        <div className="image-item">
          <img className="width" src="images/k4.jpg" alt="Imag" />
        </div>
        <div className="image-item">
          <img className="width" src="images/k5.jpg" alt="Imag" />
        </div>
        <div className="image-item">
          <img className="width" src="images/k6.jpg" alt="Imag" />
        </div>
    </div>
  </div>

  );
};

export default Gallery;