import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import ReservationForm from '../ReservationForm/ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error))
  }

  addReservation = (newReservation) => {
    console.log(newReservation.id)
    this.setState({ data: [...this.state.data, newReservation] });
    fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        "id": newReservation.id,
        "name": newReservation.name,
        "date": newReservation.date,
        "time": newReservation.time,
        "number": parseInt(newReservation.number)
      })
    }).then(res => res.json())
    .then(data =>  data)
    .catch(error =>error)
  }

  

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        {this.state.data && (<ReservationContainer reservations={this.state.data} />)}
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>      
        </div>
      </div>
    )
  }
}

export default App;
