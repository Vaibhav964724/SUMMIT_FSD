import React from 'react';
import { Link } from 'react-router-dom';

// Minimal Home Page Component
const HomePage = ({ teamName }) => {
  return (
    <div className="minimal-home">
      <h1>Welcome to  Team <span className="team-name">{teamName}</span></h1>


      <p>Centralize and streamline team management with a smart tech platform..</p>  
      <div className="home-buttons">
        <Link to="/add-member" className="btn btn-primary btn-lg">
          Add New Member
        </Link>
        <Link to="/members" className="btn btn-outline-primary btn-lg">
          View Team
        </Link>
      </div>
    </div>
  );
};

export default HomePage;