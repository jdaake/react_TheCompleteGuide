import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

function App() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Jordan', age: 34 },
      { name: 'Tiffanie', age: 34 },
      { name: 'Lennon', age: 4 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Jord', age: 28 },
        { name: 'Tiff', age: 27 },
        { name: 'Lenny Lu', age: 0 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hi, Im a react app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        I'm annoying
      </Person>
    </div>
  );
}

export default App;
