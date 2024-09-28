import React from 'react';
import './landing.css';
import img from './bgimg.jpg';
import img2 from './bgimg2.png';

const Landing = () => {
  return (
    <>
      <div className="landingDiv">
        <div className="bodyDiv">
          <h1 className="bodyH1">Bengaluru Restaurant Recommender</h1>
          <p className="bodyText">
            Living in Bengaluru and craving something delightful? Want to try
            somewhere new and can't be bothered to research? Well, here you go.
            A perfect AI restaurant recommender. Go ahead, try it. Living in
            Bengaluru and craving something delightful? Want to try somewhere
            new and can't be bothered to research? Well, here you go. A perfect
            AI restaurant recommender. Go ahead, try it. Living in Bengaluru and
            craving something delightful? Want to try somewhere new and can't be
            bothered to research? Well, here you go. A perfect AI restaurant
            recommender. Go ahead, try it. Living in Bengaluru and craving
            something delightful? Want to try somewhere new and can't be
            bothered to research? Well, here you go. A perfect AI restaurant
            recommender. Go ahead, try it.
          </p>
        </div>
        <div className="imgDiv">
          <img src={img2} className="foodImg" />
        </div>
      </div>
    </>
  );
};

export default Landing;
