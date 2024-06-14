import React, { useState } from "react";
import "./SeatSelection.css";

const screens = [
  {
    id: 1,
    name: "Screen 1",
    seats: [
      { id: 1, row: "A", seat: "1", status: "available" },
      { id: 2, row: "A", seat: "2", status: "available" },
      { id: 3, row: "A", seat: "3", status: "booked" },
      { id: 4, row: "A", seat: "4", status: "available" },
      { id: 5, row: "A", seat: "5", status: "available" },
      { id: 6, row: "A", seat: "6", status: "booked" },
      { id: 7, row: "A", seat: "7", status: "available" },
      { id: 8, row: "A", seat: "8", status: "available" },
      { id: 9, row: "A", seat: "9", status: "booked" },
      { id: 10, row: "A", seat: "10", status: "available" },
    ],
  },
];

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [screenSelection, setScreenSelection] = useState(null);

  const handleSeatSelection = (seat) => {
    if (seat.status === "available") {
      setSelectedSeats((prevSeats) => [...prevSeats, seat]);
      seat.status = "selected";
    } else if (seat.status === "selected") {
      setSelectedSeats((prevSeats) => prevSeats.filter((s) => s.id !== seat.id));
      seat.status = "available";
    }
  };

  const handleScreenSelection = (screen) => {
    setScreenSelection(screen);
  };

  const renderSeatMap = () => {
    if (!screenSelection) return null;

    return (
      <div className="seat-map-container">
        <h3>Seat Map:</h3>
        <ul>
          {screenSelection.seats.map((seat) => (
            <li key={seat.id}>
              <button
                onClick={() => handleSeatSelection(seat)}
                className={seat.status}
              >
                {seat.row} {seat.seat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="seat-selection">
      <h2>Seat Selection</h2>
      <div className="screen-selection">
        <h3>Screen Selection:</h3>
        <ul>
          {screens.map((screen) => (
            <li key={screen.id}>
              <button onClick={() => handleScreenSelection(screen)}>
                {screen.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {renderSeatMap()}
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map((seat) => (
            <li key={seat.id}>
              {seat.row} {seat.seat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatSelection;