import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('Persons.js - getderivedstaefromprops');
  //     return state;
  //   }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js - shouldcomponenetupdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log('persons.js - getsnapshot');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons.js - componentdidmount');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] render()');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default Persons;
