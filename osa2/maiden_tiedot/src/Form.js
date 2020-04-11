import React from 'react';

const Form = ({ countryName, handleCountryNameChange }) => {
  return (
    <div>
      Find countries:{' '}
      <input value={countryName} onChange={handleCountryNameChange} />
    </div>
  );
};

export default Form;
