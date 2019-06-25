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

  render() {
    return (
      <main className="App">
        <header className="App-header">
        <h1>Turing Yearbook</h1>
        </header>
        <Cohort staff={this.state.staff} students={this.state.students}/>
        <Form />
      </main>
    );
  }
}

export default App;
