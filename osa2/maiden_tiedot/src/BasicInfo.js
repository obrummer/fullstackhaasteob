import React from 'react';

const BasicInfo = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default BasicInfo;
