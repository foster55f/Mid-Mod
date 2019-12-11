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

    submitReservation = (event) => {
        event.preventDefault();
        const newRes = {
            id: Date.now(),
            name: this.state.name,
            date: this.state.date,
            number: this.state.number
        }
        console.log(newRes)
        this.props.addReservation(newRes)
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
          type='number'
          placeholder='RoomNumber'
                name='number'
                // min="1" max="15"
                value={this.state.number}
                onChange ={event => this.handleChange(event)}
        />
             <input type="date" name ='date'min="01-01-2019" max="12-31-2019"  value={this.state.date}
            onChange ={event => this.handleChange(event)}></input> 

        <button onClick={this.submitReservation}>SUBMIT</button>
      </form>
    )
  }
}

export default ReservationForm