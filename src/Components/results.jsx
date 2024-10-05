import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './results.css';
import axios from 'axios';
import { locationOptions, typeOptions } from './featureNames.js';
import img from './sideimg.jpg';

const Results = () => {
  const [inputData, setInputData] = useState({
    location: '',
    cost: 1000,
    cuisines: '',
    rest_type: '',
    'listed_in(type)': '',
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: name === 'cost' ? parseInt(value, 10) : value,
    }));
  };
  const navigate = useNavigate();

  const handleRecommend = async () => {
    if (
      !inputData.location ||
      !inputData.cost ||
      !inputData.cuisines ||
      !inputData['listed_in(type)']
    ) {
      alert('Please fill out all fields before getting recommendations.');
      return;
    }

    try {
      const response = await axios.post(
        'https://recommendermodel.onrender.com/recommend',
        inputData
      );

      if (response.data.message) {
        alert(response.data.message);
        setRecommendations([]);
      } else {
        navigate('/recommendations', {
          state: { recommendations: response.data, inputData },
        });
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert(
            'Sorry, no restaurant is available for your search criteria. Please change the inputs and try again.'
          );
        } else {
          console.error('Error fetching recommendations:', error);
          alert(
            'Sorry, no restaurant is available for your search criteria. Please change the inputs and try again.'
          );
        }
      } else {
        console.error('Error fetching recommendations:', error);
        alert(
          'Sorry, no restaurant is available for your search criteria. Please change the inputs and try again.'
        );
      }
    }
  };

  return (
    <>
      <div className="modelCont">
        <div className="modelForm">
          <h1 className="modelH1">
            Get Restaurant Recommendations in Bengaluru!
          </h1>
          <div className="modelInpsDiv">
            <select
              id="location"
              name="location"
              value={inputData.location}
              onChange={handleChange}
              className="modelDrop"
            >
              <option value="" disabled>
                Select a location
              </option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <input
              type="number"
              name="cost"
              value={inputData.cost}
              onChange={handleChange}
              placeholder="Choose a Budget"
              className="modelInp"
            />
            <input
              type="text"
              name="cuisines"
              value={inputData.cuisines}
              onChange={handleChange}
              placeholder="Choose a Cuisine"
              className="modelInp"
            />
            <select
              id="listed_in(type)"
              name="listed_in(type)"
              value={inputData['listed_in(type)']}
              onChange={handleChange}
              className="modelDrop"
            >
              <option value="" disabled>
                Type of Dining
              </option>
              {typeOptions.map((rest_type) => (
                <option key={rest_type} value={rest_type}>
                  {rest_type}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleRecommend} className="modelBtn">
            Get Recommendations
          </button>
          <div>
            {recommendations.length > 0 && (
              <div>
                <h2 style={{ textAlign: 'center' }}>
                  Recommended Restaurants:
                </h2>
                <ul>
                  {recommendations.map((restaurant, index) => (
                    <li key={index}>
                      <strong>{restaurant.name}</strong>
                      <br />
                      Location: {restaurant.location}
                      <br />
                      Cost: ₹{restaurant.cost}
                      <br />
                      Rating: {restaurant.rate}
                      <br />
                      Cuisines: {restaurant.cuisines}
                      <br />
                      Online Order: {restaurant.online_order}
                      <br />
                      Book Table: {restaurant.book_table}
                      <br />
                      Type of restaurant: {restaurant['listed_in(type)']}
                      <br />
                      Votes: {restaurant.votes}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <img src={img} className="sideImg" />
      </div>
    </>
  );
};

export default Results;
