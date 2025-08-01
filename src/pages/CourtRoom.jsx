import React, { useState } from 'react';
import './CourtRoom.css';

const cases = [
  {
    scenario: "A student creates a fake social media profile of a teacher and posts memes using their photo.",
    options: ["Innocent", "Cyberbullying", "Identity Theft"],
    correct: "Cyberbullying"
  },
  {
    scenario: "A teenager downloads a movie from a website offering it for free without the creator's permission.",
    options: ["Legal", "Copyright Violation", "Hacking"],
    correct: "Copyright Violation"
  },
  {
    scenario: "A person guesses their friend's password and logs into their account to check messages.",
    options: ["Smart Move", "Fun Prank", "Hacking"],
    correct: "Hacking"
  },
  {
    scenario: "Someone sends repeated threatening messages on WhatsApp to a classmate.",
    options: ["Harassment", "Normal Chat", "Debate"],
    correct: "Harassment"
  },
  {
    scenario: "A person intentionally spreads a virus via email to crash systems.",
    options: ["Cyber Vandalism", "Email Forward", "No Crime"],
    correct: "Cyber Vandalism"
  }
];

const CourtRoom = () => {
  const [currentCase, setCurrentCase] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    setShowAnswer(true);
    if (option === cases[currentCase].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrentCase(currentCase + 1);
  };

  return (
    <div className="courtroom-container">
      <h2>🧑‍⚖️ Court Room Game</h2>
      {currentCase < cases.length ? (
        <div className="courtroom-card">
          <p className="scenario">{cases[currentCase].scenario}</p>
          <div className="options">
            {cases[currentCase].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  showAnswer && option === cases[currentCase].correct
                    ? 'correct'
                    : selected === option
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {showAnswer && (
            <button className="next-button" onClick={handleNext}>
              Next Case
            </button>
          )}
        </div>
      ) : (
        <div className="result">
          <h3>Game Over!</h3>
          <p>You scored {score} out of {cases.length} 🏅</p>
        </div>
      )}
    </div>
  );
};

export default CourtRoom;
