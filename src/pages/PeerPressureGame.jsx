import React, { useState } from 'react';
import './PeerPressureGame.css';

const scenarios = [
  {
    id: 1,
    situation: "Your friend dares you to click a suspicious link to get free game coins. What do you do?",
    options: ["Click it to prove you're not scared", "Refuse and explain it's unsafe"],
    correct: 1,
  },
  {
    id: 2,
    situation: "Your classmate shares their social media password with you and asks you to do the same. What will you do?",
    options: ["Share yours too to maintain friendship", "Politely say passwords should be private"],
    correct: 1,
  },
  {
    id: 3,
    situation: "A group chat you're in starts bullying someone. You're asked to join in. What do you do?",
    options: ["Say it's just fun and join in", "Leave the chat and report it"],
    correct: 1,
  },
];

const PeerPressureGame = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === scenarios[current].correct) {
      setScore(score + 1);
    }

    if (current + 1 < scenarios.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="peer-pressure-game">
      <h2>Peer Pressure Simulation</h2>
      {!showScore ? (
        <div className="scenario-box">
          <p className="scenario-text">{scenarios[current].situation}</p>
          <div className="options">
            {scenarios[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="score-box">
          <h3>Your Score: {score} / {scenarios.length}</h3>
          <p>{score === scenarios.length ? "Great choices! 💪" : "Good effort! Learn and try again!"}</p>
        </div>
      )}
    </div>
  );
};

export default PeerPressureGame;
