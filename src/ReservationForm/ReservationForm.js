import React, { Component } from 'react';


class ReservationForm extends Component{
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            date: '',
            time: '',
            number:''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
            value={this.state.name}
            onChange ={event => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={this.state.date}
        />

        <button>SUBMIT</button>
      </form>
    )
  }
}

export default ReservationForm