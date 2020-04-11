import React from 'react';

const List = ({ filterValue, filteredList, removePerson, persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filterValue.length > 0 ? (
        <ul>
          {filteredList.map((person, i) => (
            <div key={i}>
              <li key={i}>
                {person.name} {person.number}
              </li>
              <button onClick={() => removePerson(person.id)}>delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <ul>
          {persons.map((person, i) => (
            <div key={i}>
              <li key={i}>
                {person.name} {person.number}
              </li>
              <button onClick={() => removePerson(person.id)}>delete</button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
