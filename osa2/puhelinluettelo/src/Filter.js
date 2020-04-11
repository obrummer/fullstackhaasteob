import React from 'react';

const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      <div>
        Filter by name:{' '}
        <input value={filterValue} onChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default Filter;
