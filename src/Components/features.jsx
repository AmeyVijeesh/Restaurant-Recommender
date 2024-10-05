import React from 'react';
import './features.css';

const Features = () => {
  return (
    <>
      <div className="featCont">
        <h1 className="featH1">Features</h1>
        <div className="featDivs">
          <div className="featDiv">
            <h1 className="featTitle">Over 12,000 Restaurants</h1>
            <p className="featP">
              Our dataset includes everything - ranging from quaint cafes to fun
              microbreweries to cultural eats. However, do note that it does not
              include all the restaurants that has sprung up in the past 5
              years.
            </p>
          </div>{' '}
          <div className="featDiv">
            <h1 className="featTitle">Anything for Anyone</h1>
            <p className="featP">
              Choose your what you want to eat. Want a budget-friendly option or
              want to splurge a bit? Want to try something exotic? Or do you
              want to find out those hidden gems?
            </p>
          </div>
          <div className="featDiv">
            <h1 className="featTitle">Find Based on Location</h1>
            <p className="featP">
              No willing to drive far away? Get recommendations based on your
              prefered locations to get going right away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
