import React, { useState } from 'react';
import Calendar from 'react-calendar';

function getDateDiffInDays(startDate, endDate) {
  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

export default function Rooms() {
  

  const [date, setDate] = useState(new Date());
  const [numPersons, setNumPersons] = useState("");
  const [roomType, setRoomType] = useState("");
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const diffDays = date.length > 0 ? getDateDiffInDays(date[0], date[1]) - 1 : 0;
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowBookingDetails({
      checkIn: date[0],
      checkOut: date[1],
      numberOfPersons: numPersons,
      roomType: roomType,
      pricePerNight: getPricePerNight(roomType),
      totalCost: getPricePerNight(roomType) * diffDays,
    });
  }

  const getPricePerNight = (roomType) => {
    switch (roomType) {
      case "standard":
        return 50;
      case "luxury":
        return 100;
      case "penthouse":
        return 150;
      default:
        return 0;
    }
  };

  return (
    <div>
      <img src="./hotel-room-double.jpg" className="rooms-mainpic" alt="hotel room" />

      <h1 className="acco">Accommodation</h1>


    
      <div className='app'>
        <h1 className='text-center'>Calendar</h1>
        <div className='calendar-container'>
          <Calendar
            onChange={setDate}
            value={date}
            selectRange={true}
            minDate={new Date()}
            tileDisabled={tileDisabled}
            />
            <br />
          </div>
        
          <form className="adults" onSubmit={handleFormSubmit}>
                <label htmlFor="numPersons">Number of persons</label>
                <select id="numPersons" value={numPersons} onChange={(e) => setNumPersons(e.target.value)}>
                    <option value="">-- Choose --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <br></br>

                <label htmlFor="roomType">Room type</label>
                <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                    <option value="">-- Choose --</option>
                    <option value="standard">Standard</option>
                    <option value="luxury">Luxury</option>
                    <option value="penthouse">Penthouse</option>
                </select>

                <br /><br />

                <button type="submit">Submit</button>
                </form>
        </div>

        {showBookingDetails && (
            <div className="booking-details">
                <h2>Booking Details</h2>
                <p>Check-in: {date[0].toDateString()}</p>
                <p>Check-out: {date[1].toDateString()}</p>
                <p>Number of persons: {numPersons}</p>
                <p>Room type: {showBookingDetails.roomType}</p>
                <p>Price per night: ${showBookingDetails.pricePerNight}</p>
                <p>Total cost: ${showBookingDetails.totalCost}</p>
            </div>
    

)}

    </div>
    
);
}  

  