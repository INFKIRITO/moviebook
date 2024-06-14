import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Auth/login";
import Register from "./components/Auth/Register";
import MovieSelection from "./components/MovieSelection";
import SeatSelection from "./components/SeatSelection";
import { AuthProvider, useAuth } from "./context/Auth"; // Ensure correct path
import "./index.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppWithNavbarAndFooter />
      </Router>
    </AuthProvider>
  );
};

const AppWithNavbarAndFooter = () => {
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<MovieSelection />} />
        <Route path="/seat-selection" element={<ProtectedRoute element={<SeatSelection />} />} />
      </Routes>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const [auth] = useAuth();
  return auth.token ? element : <Navigate to="/login" />;
};

export default App;
