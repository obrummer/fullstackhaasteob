import React from 'react';

const List = ({ filteredList }) => {
  return (
    <div>
      {filteredList.length < 11 ? (
        <ul>
          {filteredList.map(item => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Too many matches, specify another filter.</p>
      )}
    </div>
  );
};

export default List;
