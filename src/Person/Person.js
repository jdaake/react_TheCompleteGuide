import React from 'react';
import './Person.css';

function Person(props) {
  return (
    <div className='Person'>
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Person;
