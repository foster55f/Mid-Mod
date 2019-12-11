import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'
import './ReservationContainer.css';



const ReservationContainer = (props) => {
    console.log(props)
    const allReservations = props.reservations.map(reservation => {
        return (<div className='reservation-container'>
            <ReservationCard
            key={reservation.id}
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            />   
            </div>
        )

    })

    return (
        <div>
            {allReservations}
        </div>
    )
}

export default ReservationContainer