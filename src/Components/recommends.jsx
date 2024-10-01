import React, { useState } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const Recommendations = () => {
  const location = useLocation();
  const { recommendations: initialRecommendations, inputData } =
    location.state || {};
  const [recommendations, setRecommendations] = useState(
    initialRecommendations || []
  );
  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend', {
        ...inputData,
        page: page + 1,
      });

      setRecommendations((prevRecommendations) => {
        const newRecommendations = response.data.filter(
          (restaurant) =>
            !prevRecommendations.some((prev) => prev.name === restaurant.name)
        );
        return [...prevRecommendations, ...newRecommendations];
      });
      setPage(page + 1);
    } catch (error) {
      console.error('Error loading more recommendations:', error);
    }
  };

  return (
    <div className="recCont">
      <h1 style={{ color: '#fff' }}>Recommended Restaurants</h1>
      <div className="recDivs">
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((restaurant, index) => (
              <div className="recDiv" key={index}>
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
              </div>
            ))}
          </ul>
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
      <button onClick={handleLoadMore} className="modelBtn">
        Generate More
      </button>
    </div>
  );
};

export default Recommendations;
