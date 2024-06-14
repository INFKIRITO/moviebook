import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Movie 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Movie 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Movie 4', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Movie 5', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Movie 6', image: 'https://via.placeholder.com/150' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, movies.length]);

  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear the user's session or token
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout} className="logout-button btn btn-primary float-right">Logout</button>
      <h2>Welcome to the Home Page!</h2>
      <p>This is your home page content.</p>
      <h3>Movie Selection</h3>
      <div className="movie-carousel">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`movie-carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/movies')}>Go to Movie Selection</button>
    </div>
  );
};

export default Home;