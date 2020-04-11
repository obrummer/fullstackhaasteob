import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import SingleCountry from './SingleCountry';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleCountryNameChange = event => {
    setCountryName(event.target.value);
    countryFilter(event.target.value);
  };

  const countryFilter = filterValue => {
    const item = filterValue.toLowerCase();
    const updatedList = countries.filter(country =>
      country.name.toLowerCase().includes(item, 0)
    );
    setFilteredList(updatedList);
  };

  return (
    <div>
      <Form
        countryName={countryName}
        handleCountryNameChange={handleCountryNameChange}
      />
      {filteredList.length === 1 ? (
        <SingleCountry filteredList={filteredList} />
      ) : (
        <List filteredList={filteredList} />
      )}
    </div>
  );
};

export default App;
