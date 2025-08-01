import React, { useState } from 'react';
import './YesNoGame.css';

const YesNoGame = () => {
  const questions = [
    {
      text: "You get a message saying, “Send me your photo or I’ll tell everyone your secret.”",
      answer: "no"
    },
    {
      text: "A new friend you met online is asking for your address to send a 'gift.'",
      answer: "no"
    },
    {
      text: "You clicked a link from a friend, and it opened a weird site asking for your Instagram login.",
      answer: "no"
    },
    {
      text: "You receive a request to share your school ID card 'just for verification.'",
      answer: "no"
    },
    {
      text: "You’re asked to join a private chat group to talk about '18+ content.'",
      answer: "no"
    },
    {
      text: "Your favorite app says to enable 2FA (Two-Factor Authentication).",
      answer: "yes"
    },
    {
      text: "Someone offers you money online in exchange for your gaming account login.",
      answer: "no"
    },
    {
      text: "You report a bullying comment you saw on a friend's post.",
      answer: "yes"
    },
    {
      text: "A person online insists you don’t tell anyone about your conversations.",
      answer: "no"
    },
    {
      text: "You receive a pop-up that says you’ve won a new iPhone. You just need to click to claim.",
      answer: "no"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const handleAnswer = (userAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Oops! That\'s not right.');
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedback('');
      } else {
        setGameOver(true);
        setFeedback('');
      }
    }, 1200); // delay before moving to next question
  };

  return (
    <div className="yesno-game-container">
      <div className="yesno-game-box">
        <h2>Cybersecurity Yes/No Game</h2>

        {!gameOver ? (
          <>
            <p className="question">{questions[currentQuestionIndex].text}</p>
            <div className="yesno-buttons">
              <button className="yes-button" onClick={() => handleAnswer('yes')}>Yes</button>
              <button className="no-button" onClick={() => handleAnswer('no')}>No</button>
            </div>
            <p className="feedback" style={{ color: feedback.includes('Correct') ? 'green' : 'red' }}>
              {feedback}
            </p>
          </>
        ) : (
          <div className="completion-message">
            <p>🎉 You've completed the game! Great job staying cyber smart! 🔐</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YesNoGame;
