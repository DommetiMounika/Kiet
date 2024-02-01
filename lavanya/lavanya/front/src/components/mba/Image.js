import React from 'react';
import './Image.css'; // Import the CSS file for styling

const Image = () => {
  return (
    <div className="image-container" style={{ backgroundImage: 'url(images/mba.jpg)' }}>
      {/* You can add additional content related to the background image if needed */}
      <div className="overlay-text">
      <h1>Master of Business Administration/Master of Computer Applications</h1>
      <p className="pico">MBA is a postgraduate degree that focuses on developing skills and knowledge in business and management. It is a versatile degree that covers various aspects of business, including finance, marketing, human resources, operations, and strategic management.</p>
      <p className="pico">MCA is a postgraduate degree in computer science and information technology. The program emphasizes both theoretical and practical aspects of computer applications. MCA graduates are trained in areas such as software development, system design, networking, database management, and web development.</p>
      </div>
    </div>
  );
};
export default Image;