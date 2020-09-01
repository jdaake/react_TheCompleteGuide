import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jordan', age: 34 },
      { name: 'Tiffanie', age: 34 },
      { name: 'Lennon', age: 4 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Jordan', age: 28 },
        { name: 'Tiffy', age: 27 },
        { name: 'Lennon', age: 0 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
