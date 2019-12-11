import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard'


const ReservationContainer = (props) => {
    console.log(props)
    const allReservations = props.reservations.map(reservation => {
        return (<ReservationCard
            key={reservation.id}
            id={reservation.id}
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            />         
        )

    })

    return (
        <div>
            {allReservations}
        </div>
    )
}

export default ReservationContainer