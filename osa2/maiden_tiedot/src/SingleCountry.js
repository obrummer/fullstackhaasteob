import React from 'react';
import BasicInfo from './BasicInfo';
import Languages from './Languages';
import Weather from './Weather';

const SingleCountry = props => {
  const { filteredList } = props;
  const country = filteredList[0];
  return (
    <div>
      <BasicInfo country={country} />
      <Languages country={country} />
      <Weather country={country} />
    </div>
  );
};

export default SingleCountry;
