import React from 'react';
import './Testmonial.css'; // Import the CSS file for styling

const Testmonial = () => {
  return (
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
    <div>
    <h1 className="main-heading">TESTMONIALS</h1>
    <p>Some testimonials and reviews from our students...</p>
    <div style={{ maxWidth: '500px', width: '100%' }}>
    <video className="bg" width="100%" controls>
            <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  </div>
  );
};
export default Testmonial;