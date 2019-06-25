import React, { Component } from 'react'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: '',
      people: '',
    }
  }
  
  render() {
    return (
      <form>
        <input type="text" placeholder="Name" name="name"/>
        <input type="text" placeholder="Quote" name="quote"/>
        <input type="text" placeholder="Superlative" name="superlative"/>
        <input type="text" placeholder="Photo URL" name="phot0"/>
        <select id="person-type" name="people">
          <option value="students">Student</option>
          <option value="staff">Staff</option>
        </select>
      </form>
    )
  }  
}

export default Form;
