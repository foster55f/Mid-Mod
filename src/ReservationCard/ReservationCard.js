import React from 'react'
import './ReservationCard.css';


const ReservationCard = ({id,name,date,time,number}) => {
    return (
        <div className='card'>
            <h1>Id:{id}</h1>
            <h1>Name:{name}</h1>
            <h1>Date: {date}</h1>
            <h1>Time: {time}</h1>
            <h1>RoomNumber:{number}</h1>
        </div>
    )
}

export default ReservationCard