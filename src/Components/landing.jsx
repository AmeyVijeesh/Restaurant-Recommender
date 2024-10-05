import React from 'react';
import './landing.css';
import img2 from './bgimg2.png';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div className="landingDiv">
        <div className="bodyDiv">
          <h1 className="bodyH1">Bengaluru Restaurant Recommender</h1>
          <p className="bodyText">
            Living in Bengaluru and craving something delightful? Tired of
            searching through endless restaurant options? Want to try somewhere
            new and can't be bothered to research? Our AI-powered recommender
            takes the guesswork out of dining. Whether you're looking for a cozy
            café, a fancy dinner spot, or a budget-friendly option, our smart
            system matches you with the perfect restaurant based on your
            preferences. Go ahead, try it out, it's free.
          </p>
          <div className="buttonDiv">
            <button className="bodyBtn">
              <NavLink to="/results" style={{ color: '#fff' }}>
                Get Started
              </NavLink>
            </button>
            <button className="bodyBtn">Learn More</button>
          </div>
        </div>
        <div className="imgDiv">
          <img src={img2} className="foodImg" />
        </div>
      </div>
    </>
  );
};

export default Landing;
