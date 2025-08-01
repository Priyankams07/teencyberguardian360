import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Games.css';
import { FaSearch, FaTachometerAlt } from 'react-icons/fa';

const Games = () => {
  const navigate = useNavigate();

  return (
    <div className="games-page">
      {/* Header */}
      <div className="games-header">
        <div className="header-left">
          <FaTachometerAlt className="dashboard-icon" />
        </div>
        <div className="header-center">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search games..." />
          </div>
        </div>
        <div className="header-right">
          <img
            src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}
            alt="Avatar"
            className="avatar"
          />
        </div>
      </div>

      {/* Games Section */}
      <div className="games-section">
        <h2 className="section-title">Choose a Game or Simulation</h2>
        <div className="games-grid">
          {/* Original Games */}
          <div className="game-card">
            <h3>Yes / No Game</h3>
            <p>Answer quick-fire cyber safety questions!</p>
            <button className="play-button" onClick={() => navigate('/yesno')}>
              Play Now
            </button>
          </div>
          <div className="game-card">
            <h3>Swipe Game</h3>
            <p>Swipe 🚩 or ✅ for online behavior!</p>
            <button className="play-button" onClick={() => navigate('/swipe')}>
              Play Now
            </button>
          </div>
          <div className="game-card">
            <h3>Court Room</h3>
            <p>Make the right verdict in cybercrime cases!</p>
            <button className="play-button" onClick={() => navigate('/courtroom')}>
              Play Now
            </button>
          </div>

          {/* Hackathon-Winning Features */}
          <div className="game-card">
            <h3>Risk Profile</h3>
            <p>View your personalized cyber safety dashboard.</p>
            <button className="play-button" onClick={() => navigate('/dashboard')}>
              Launch
            </button>
          </div>
          <div className="game-card">
            <h3>Peer Pressure Simulator</h3>
            <p>Practice safe responses in tricky online chats.</p>
            <button className="play-button" onClick={() => navigate('/peerpressure')}>
              Try It
            </button>
          </div>
          <div className="game-card">
            <h3>Spot the Fake</h3>
            <p>Detect deepfakes & misleading posts like a pro.</p>
            <button className="play-button" onClick={() => navigate('/spotfake')}>
              Start Game
            </button>
          </div>
          <div className="game-card">
            <h3>Footprint Timeline</h3>
            <p>Visualize the long-term effects of online mistakes.</p>
            <button className="play-button" onClick={() => navigate('/footprint')}>
              Explore
            </button>
          </div>
          <div className="game-card">
            <h3>Voice Reporting Practice</h3>
            <p>Practice reporting cybercrime in your language.</p>
            <button className="play-button" onClick={() => navigate('/report')}>
              Practice
            </button>
          </div>
          <div className="game-card">
            <h3>Community Alerts</h3>
            <p>View and report local cyber scams from peers.</p>
            <button className="play-button" onClick={() => navigate('/alerts')}>
              Go to Alerts
            </button>
          </div>
          <div className="game-card">
            <h3>Offline Risk Detector</h3>
            <p>Learn how to avoid privacy leaks in real life.</p>
            <button className="play-button" onClick={() => navigate('/offline-risk')}>
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
