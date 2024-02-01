import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to redirect to a new page
    navigate('/intro');
  }; 

  const videoFilenames = ['ai.mp4'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFilenames.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, videoFilenames.length]);

  return (
    <div className="homepage">
      <div className="video-slider">
        {videoFilenames.map((videoFilename, index) => (
          <div key={index} className={`video-contain ${index === currentVideoIndex ? 'active' : ''}`}>
            <video
              className={`fullscreen-video blur-zoom`}
              src={`/videos/${videoFilename}`}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="text-overlay">
              <h1><span>ʜᴇʏ ꜱᴛᴜᴅᴇɴᴛꜱ</span></h1>
              <p>Want To Have a Degree and Knowledge About The New Emerging Technology With The JNTUK Approved Certification and Want to Enhance Your Skills?</p>
            </div>
            <div className="button-overlay">
              <button onClick={handleButtonClick}>ιηтяєѕтє∂</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
