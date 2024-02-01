// Intro.js
import React, { useEffect, useState } from 'react';
import './Grid.css';
import { Link } from 'react-router-dom'; // Import the CSS file

const Grid = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    animateCount(setCount1, count1, 200);
    animateCount(setCount2, count2, 150);
    animateCount(setCount3, count3, 300);
  }, [count1, count2, count3]);

  const animateCount = (setCount, currentCount, targetCount) => {
    const step = targetCount / 150; // Assuming 150 steps for smooth animation
    let count = currentCount;

    if (count < targetCount) {
      setTimeout(() => {
        count += step;
        setCount(count);
      }, 20);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="images/KIET POLYTECHNIC.png" alt="polytechnic" />
            <div className="card-body">
              <h5 className="card-title">POLYTECHNIC</h5>
              <b>Courses Offered</b>
              <ul>
                <li>Computer Engineering Related To CSE</li>
                
              </ul>
              <Link to={'/polytechnic'}>
                 <button className="btn btn-primary">Know More</button>
              </Link>
             
              <div className="count-container">
                <p className="count-animations">Number of Graduations :</p>
                <p className="count-animation"><b>{Math.floor(count1)}</b> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="images/KIET ENGINEERING.png" alt="B.tech" />
            <div className="card-body">
              <h5 className="card-title">ENGINEERING</h5>
              <b>Courses Offered</b>
              <ul>
                <li>Cyber Security</li>
                <li>Artificial Intelligence & DataScience</li>
                <li>Artificial Intelligence</li>
                <li>Artificial Intelligence & Machine Learning</li>
                <li>Data Science</li>
              </ul>
              <Link to={'/btech'}>
                 <button className="btn btn-primary">Know More</button>
              </Link>
              <div className="count-container">
                <p className="count-animations">Number of Graduations :</p>
                <p className="count-animation"><b>{Math.floor(count2)}</b> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="/images/KIET ENGINEERING.png" alt="polytech" />
            <div className="card-body">
              <h5 className="card-title">POST GRADUATION</h5>
              <b>Courses Offered</b>
              <ul>
                <li>MBA</li>
                <li>MCA</li>
                <li>M.TECH</li>
              </ul>
              <Link to={'/mba'}>
                 <button className="btn btn-primary">Know More</button>
              </Link>
              <div className="count-container">
                <p className="count-animations">Number of Graduations : </p>
                <p className="count-animation"><b>{Math.floor(count3)}</b> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;

