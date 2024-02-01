import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
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
          <h className="hy">KAKINADA INSTITUTE OF ENGINEERING AND TECHNOLOGY</h>
          <h className="hy">ABOUT MBA</h>
          <p className="p123">MBA stands for Master of Business Administration. It is a graduate-level degree that focuses on developing skills and knowledge in business and management. MBA programs typically cover a wide range of business-related subjects, including finance, marketing, human resources, operations management, entrepreneurship, and strategy.
          The goal of an MBA is to equip individuals with the necessary tools and perspectives to lead and manage organizations effectively. MBA programs are offered by universities and business schools around the world, and they often attract professionals who are looking to advance their careers in business or pursue leadership roles.</p>
          <img className="mmmmm" src="images/k3.jpg" alt="kiet"/>
  
        </div>
  );
};
export default AboutUs;