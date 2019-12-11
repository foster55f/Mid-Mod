import React from 'react'

const ReservationCard = ({id,name,date,time,number}) => {
    return (
        <div>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{date}</h1>
            <h1>{time}</h1>
            <h1>{number}</h1>
        </div>
    )
}

export default ReservationCard