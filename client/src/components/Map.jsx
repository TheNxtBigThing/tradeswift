import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Map = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: {
          latlng: '40.714224,-73.96145',
          language: 'en'
        },
        headers: {
          'X-RapidAPI-Key': '66e779d4a6msh34115664702bbd0p165f22jsn6fdc89ccccd7',
          'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setLocationData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!locationData) {
    return <div>Loading...</div>;
  } else {
    // Assuming you want to display some data from the response
    const { results } = locationData;
    const formattedAddress = results.length > 0 ? results[0].formatted_address : 'No address found';

    return (
      <div>
        <h1>Location Data</h1>
        <p>Formatted Address: {formattedAddress}</p>
        {/* You can render other relevant data from locationData here */}
      </div>
    );
  }
};

export default Map;
