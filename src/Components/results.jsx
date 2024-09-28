import React, { useState } from 'react';
import axios from 'axios';

const Results = () => {
  const [inputData, setInputData] = useState({
    location: '',
    cost: 1000,
    cuisines: '',
    rest_type: '',
    'listed_in(type)': '',
  });
  const [page, setPage] = useState(1);
  const locationOptions = [
    'Banashankari',
    'Basavanagudi',
    'Mysore Road',
    'Jayanagar',
    'Kumaraswamy Layout',
    'Rajarajeshwari Nagar',
    'Vijay Nagar',
    'Uttarahalli',
    'Jp Nagar',
    'South Bangalore',
    'City Market',
    'Nagarbhavi',
    'Bannerghatta Road',
    'Btm',
    'Kanakapura Road',
    'Bommanahalli',
    'Not Available',
    'Cv Raman Nagar',
    'Electronic City',
    'Hsr',
    'Marathahalli',
    'Sarjapur Road',
    'Wilson Garden',
    'Shanti Nagar',
    'Koramangala 5Th Block',
    'Koramangala 8Th Block',
    'Richmond Road',
    'Koramangala 7Th Block',
    'Jalahalli',
    'Koramangala 4Th Block',
    'Bellandur',
    'Whitefield',
    'East Bangalore',
    'Old Airport Road',
    'Indiranagar',
    'Koramangala 1St Block',
    'Frazer Town',
    'Rt Nagar',
    'Mg Road',
    'Brigade Road',
    'Lavelle Road',
    'Church Street',
    'Ulsoor',
    'Residency Road',
    'Shivajinagar',
    'Infantry Road',
    'St. Marks Road',
    'Cunningham Road',
    'Race Course Road',
    'Commercial Street',
    'Vasanth Nagar',
    'Hbr Layout',
    'Domlur',
    'Ejipura',
    'Jeevan Bhima Nagar',
    'Old Madras Road',
    'Malleshwaram',
    'Seshadripuram',
    'Kammanahalli',
    'Koramangala 6Th Block',
    'Majestic',
    'Langford Town',
    'Central Bangalore',
    'Sanjay Nagar',
    'Brookefield',
    'Itpl Main Road, Whitefield',
    'Varthur Main Road, Whitefield',
    'Kr Puram',
    'Koramangala 2Nd Block',
    'Koramangala 3Rd Block',
    'Koramangala',
    'Hosur Road',
    'Rajajinagar',
    'Banaswadi',
    'North Bangalore',
    'Nagawara',
    'Hennur',
    'Kalyan Nagar',
    'New Bel Road',
    'Jakkur',
    'Rammurthy Nagar',
    'Thippasandra',
    'Kaggadasapura',
    'Hebbal',
    'Kengeri',
    'Sankey Road',
    'Sadashiv Nagar',
    'Basaveshwara Nagar',
    'Yeshwantpur',
    'West Bangalore',
    'Magadi Road',
    'Yelahanka',
    'Sahakara Nagar',
    'Peenya',
  ];

  const typeOptions = [
    'Buffet',
    'Cafes',
    'Delivery',
    'Desserts',
    'Dine-out',
    'Drinks & nightlife',
    'Pubs and bars',
  ];

  const [recommendations, setRecommendations] = useState([]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: name === 'cost' ? parseInt(value, 10) : value,
    }));
  };

  const handleRecommend = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/recommend',
        inputData
      );

      if (response.data.message) {
        alert(response.data.message);
        setRecommendations([]);
      } else {
        setRecommendations(response.data);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert("This ain't working dude");
        } else {
          console.error('Error fetching recommendations:', error);
          alert('An unexpected error occurred');
        }
      } else {
        console.error('Error fetching recommendations:', error);
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h1>Restaurant Recommendations</h1>
      <div>
        <label htmlFor="location">Select Location:</label>
        <select
          id="location"
          name="location"
          value={inputData.location}
          onChange={handleChange}
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
      </div>
      <input
        type="number"
        name="cost"
        value={inputData.cost}
        onChange={handleChange}
        placeholder="Enter Price"
      />
      <input
        type="text"
        name="cuisines" // Corrected to match the state
        value={inputData.cuisines}
        onChange={handleChange}
        placeholder="Enter Cuisine"
      />
      <div>
        <label htmlFor="listed_in_type">Select Type:</label>
        <select
          id="listed_in(type)"
          name="listed_in(type)"
          value={inputData['listed_in(type)']}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a Type
          </option>
          {typeOptions.map((rest_type) => (
            <option key={rest_type} value={rest_type}>
              {rest_type}
            </option>
          ))}
        </select>
      </div>{' '}
      <button onClick={handleRecommend}>Get Recommendations</button>
      {recommendations.length > 0 && (
        <div>
          <h2>Recommended Restaurants:</h2>
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
      <button onClick={handleLoadMore}>Generate More</button>{' '}
    </div>
  );
};

export default Results;
