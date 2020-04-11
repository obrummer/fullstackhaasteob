import React from 'react';

const Languages = ({ country }) => {
  return (
    <div>
      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} style={{ height: '70px' }} alt="Country flag" />
    </div>
  );
};

export default Languages;
