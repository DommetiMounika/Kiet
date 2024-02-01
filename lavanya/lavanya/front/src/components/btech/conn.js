// src/App.js

import React from 'react';
import './conn.css';
import Feedback from './feedback';
import Nav from './nav';
const conn = () => {
  return (
    <div>
      <Nav/>
      <div
        className="About"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/k4.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '20px',
          position: 'relative',
          minHeight: 'calc(100vh - 56px)',
        }}
      >
        <img className="width" src="images/k1.jpg" alt="Imag" />
        <h2 className="soni">𝑲𝑰𝑬𝑻</h2>
        <img  className="i9" src="images/k4.jpg" alt="Imag" />
        
        <p className="lav">
          KIET offers a wide range of undergraduate and postgraduate programs in engineering and technology.
        </p>
        <p className="lav">
          Located in Ghaziabad, KIET has a strong emphasis on academic excellence and industry-oriented education.
        </p>
        <h2 className="soni">𝑲𝑰𝑬𝑻+</h2>
        <img  className="i9" src="images/k5.jpg" alt="Imag" />
        
        <p className="lav">
          KIET+ is an advanced branch that focuses on cutting-edge technologies and research opportunities.
        </p>
        <p className="lav">
          Students in KIET+ have access to state-of-the-art facilities and industry collaborations.
        </p>
        <h2 className="soni">𝑲𝑰𝑬𝑻 𝑾𝑶𝑴𝑬𝑵𝑺</h2>
        <img  className="i9" src="images/k6.jpg" alt="Imag" />
        
        <p className="lav">
          KIET WOMENS is dedicated to empowering women in the field of engineering and technology.
        </p>
        <p className="lav">
          It provides a supportive environment and specialized programs to nurture women's talents and skills.
        </p>
      </div>
      <div
  className="Branches"
  style={{
    marginBottom: '0',
    display: 'flex',
    justifyContent: 'space-around', // Adjust as needed
  }}
>
    <h className="soni">Branches for btech</h><br/><br/>
  <div className="branch-box">
    <h2 className="soni">KIET</h2>
    <div className="branch-container">
      <h className="lav">CSC(cyber security)</h><br />
      <h className="lav">CSM(Artificial intelligence and machine learning)</h><br />
      <h className="lav">CAI(Artificial intelligence)</h><br />
      <h className="lav">CSD(data science)</h><br />
      <h className="lav">AID(Artificial intelligence and data science)</h><br />
    </div>
  </div>
  <div className="branch-box">
    <h2 className="soni">KIET+</h2>
    <div className="branch-container">
      <h className="lav">CSC(cyber security)</h><br />
      <h className="lav">CSM(Artificial intelligence and machine learning)</h><br />
      <h className="lav">CAI(Artificial intelligence)</h><br />
      <h className="lav">CSD(data science)</h><br />
      <h className="lav">AID(Artificial intelligence and data science)</h><br />
    </div>
  </div>
  <div className="branch-box">
    <h2 className="soni">KIET WOMENS</h2>
    <div className="branch-container">
      <h className="lav">CSM(Artificial intelligence and machine learning)</h><br />
      <h className="lav">CAI(Artificial intelligence)</h><br />
      <h className="lav">AID(Artificial intelligence and data science)</h><br />
    </div>
  </div>
</div>



      <div
        className="Testimonials"
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '3px',
          position: 'relative',
          minHeight: '49vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <h2>Testimonials</h2>
        <p>Some testimonials and reviews from our students...</p>
        <div style={{ maxWidth: '500px', width: '100%' }}>
          <video className="bg" width="100%" controls>
            <source src={`${process.env.PUBLIC_URL}/videos/btech1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video><br/><br/>
          <video className="bg" width="100%" controls>
            <source src={`${process.env.PUBLIC_URL}/videos/btech2.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
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
        <h2>Gallery</h2>
        <p className="p34">Explore images from our campus and events...</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img className="width" src="images/k1.jpg" alt="Imag" />
          <img className="width" src="images/k2.jpg" alt="Imag" />
          <img className="width" src="images/k3.jpg" alt="Imag" />
          <img className="width" src="images/k4.jpg" alt="Imag" />
          <img className="width" src="images/k5.jpg" alt="Imag" />
          <img className="width" src="images/k6.jpg" alt="Imag" />
          {/* Add more images here if needed */}
        </div>
      </div>
      <div
        className="Feedback"
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '20px',
          position: 'relative',
          minHeight: '49vh',
          marginTop: '20px',
        }}
      >
        <Feedback/>
      </div>
    </div>
  );
};
export default conn;