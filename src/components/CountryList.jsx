import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCoutries = async () => {
          try {
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
            setCountries(response.data);
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    fetchCoutries();
    }, []);

    return (
        <div>
            {countries.map((country) => (
          <div key={country.alpha3Code}>
            <h1>{country.name}</h1> - {country.alpha3Code}
          </div> ))}
        </div>
    )
        
}

export default CountryList;