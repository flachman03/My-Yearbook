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

  changeForm = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" name="name" onChange={e => this.changeForm(e)}/>
        <input type="text" placeholder="Quote" name="quote" onChange={e => this.changeForm(e)}/>
        <input type="text" placeholder="Superlative" name="superlative" onChange={e => this.changeForm(e)}/>
        <input type="text" placeholder="Photo URL" name="phot0" onChange={e => this.changeForm(e)}/>
        <select id="person-type" name="people" onChange={e => this.changeForm(e)}>
          <option>Select One</option>
          <option value="students">Student</option>
          <option value="staff">Staff</option>
        </select>
        <button type="submit" onClick={(e) => this.props.addNewPerson(e, this.state)}>Submit!</button>    
      </form>
    )
  }  
}

export default Form;
