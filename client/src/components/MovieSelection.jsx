import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieSelection.css";

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action, Adventure, Drama",
    showtimes: ["10:00 AM", "2:00 PM", "7:00 PM"],
  },
  {
    id: 2,
    title: "Inception",
    genre: "Action, Adventure, Sci-Fi",
    showtimes: ["11:30 AM", "4:30 PM", "8:30 PM"],
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    genre: "Drama",
    showtimes: ["1:00 PM", "6:00 PM", "9:00 PM"],
  },
  {
    id: 4,
    title: "Forrest Gump",
    genre: "Drama, Romance",
    showtimes: ["12:00 PM", "5:00 PM", "8:00 PM"],
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action, Crime, Drama",
    showtimes: ["11:00 AM", "3:00 PM", "7:30 PM"],
  },
];

const MovieSelection = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  const handleShowtimeSelection = (movie, showtime) => {
    setSelectedMovie({
      ...movie,
      showtime,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/SeatSelection"); // Navigate to SeatSelection page
  };

  return (
    <div className="movie-selection">
      {selectedMovie && (
        <div className="selected-movie">
          <h2>You selected: {selectedMovie.title}</h2>
          <p>Genre: {selectedMovie.genre}</p>
          <p>Showtime: {selectedMovie.showtime}</p>
          <button onClick={() => handleShowtimeSelection(selectedMovie, selectedMovie.showtimes[0])}>
            Select Seats
          </button>
        </div>
      )}
      <h2>Movie Selection</h2>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Showtimes:</p>
            <ul>
              {movie.showtimes.map((showtime, index) => (
                <li key={index}>
                  <button onClick={() => handleShowtimeSelection(movie, showtime)}>
                    {showtime}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSelection;