import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addNewPerson = (e, person) => {
    e.preventDefault()
    this.setState({[person.people]: [...this.state[person.people], person]})
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <Cohort staff={this.state.staff} students={this.state.students}/>
        <Form addNewPerson={this.addNewPerson}/>
      </main>
    );
  }
}

export default App;
