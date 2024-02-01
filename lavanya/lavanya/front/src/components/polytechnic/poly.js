import React from 'react';
import Nav from './navbar1';
import './poly.css'; // Import the CSS file
import Feedback from './feedback';
const Poly = () => {
  return (
    <div>
      <Nav />
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
        <h2 className="h23">About Polytechnic</h2>
        <p className="p34">
          Welcome to our Polytechnic! We are dedicated to providing quality education and fostering a learning environment that prepares students for successful careers in various fields.
        </p>
        <p className="p34">
          Our courses are designed to equip students with the skills and knowledge
          needed to excel in their chosen professions.Explore our programs and
          discover the opportunities that await you at Polytechnic.
        </p>
      </div>
      <div
        className="Branches"
        style={{
          marginBottom: '0',
        }}
      >
        <h2 className="h23">Branches</h2>
        <p className="p34">
          Explore our branches and find the one that suits your interests. Our diverse<br />
          branches offer specialized courses and opportunities for growth in various fields.
        </p>
        <div className="BranchCard">
          <h3>CME</h3>
          <p className="p34">Computer Engineering Related To CSE</p>
          <p className="p34">
            Graduates: 1200<br />
            Years: 3
          </p>
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
            <source src={`${process.env.PUBLIC_URL}/videos/poly.mp4`} type="video/mp4" />
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

export default Poly;
