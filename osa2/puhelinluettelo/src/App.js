import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Form from './Form';
import List from './List';
import Notification from './Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    personService.getAll().then(response => {
      setPersons(response);
    });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
    listFilter(event.target.value, persons);
  };

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    if (
      nameValidator(newName) &&
      window.confirm(
        `${newName} is already in the phonebook, replace the old number wiht new one?`
      )
    ) {
      const id = [persons.find(person => person.name === newName)][0].id;
      changePerson(id, personObject, newName);
      messageSetter(newName, 'changed successfully!');
    } else if (!nameValidator(newName)) {
      personService
        .create(personObject)
        .then(response => {
          messageSetter(newName, 'created succesfully!');
          setPersons(persons.concat(response));
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.log(error.response.data.error);
          setError('true');
          messageSetter(error.response.data.error);
          setTimeout(() => {
            setError(false);
          }, 5000);
        });
    } else {
      setNewName('');
      setNewNumber('');
    }
  };

  const changePerson = (id, newObject, name) => {
    personService
      .update(id, newObject)
      .then(
        personService.getAll().then(response => {
          setPersons(response);
          listFilter(filterValue, response);
          setNewName('');
          setNewNumber('');
        })
      )
      .catch(error => {
        console.log(error);
        setError('true');
        messageSetter(name, 'was already removed from server.');
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  const removePerson = id => {
    const deletedName = [persons.find(person => person.id === id)][0].name;
    if (window.confirm(`Do you really want to remove ${deletedName}?`)) {
      const newList = persons.filter(person => person.id !== id);
      personService
        .remove(id)
        .then(messageSetter(deletedName, 'deleted!'))
        .then(setPersons(persons.filter(person => person.id !== id)))
        .then(listFilter(filterValue, newList));
    }
  };

  const nameValidator = checkedName => {
    if (persons.find(person => person.name === checkedName)) {
      return true;
    }
  };

  const listFilter = (filterValue, list) => {
    const item = filterValue.toLowerCase();
    const updatedList = list.filter(person =>
      person.name.toLowerCase().includes(item, 0)
    );
    setFilteredList(updatedList);
  };

  const messageSetter = (name, note) => {
    setMessage(`${name} ${note}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={error} />
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <List
        filterValue={filterValue}
        filteredList={filteredList}
        persons={persons}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
