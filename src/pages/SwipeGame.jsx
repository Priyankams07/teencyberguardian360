import React, { useState } from 'react';
import './SwipeGame.css';

const scenarios = [
    {
      text: "You receive a friend request from someone you don’t know with no mutual friends.",
      correct: "red",
    },
    {
      text: "Your school’s official website asks you to update your password.",
      correct: "green",
    },
    {
      text: "You win a lottery you never entered and are asked to click a link.",
      correct: "red",
    },
    {
      text: "A classmate sends a Google Drive link to shared homework.",
      correct: "green",
    },
    {
      text: "You are asked to download a free game from a website with lots of pop-up ads.",
      correct: "red",
    },
    {
      text: "A teacher tells you to join a secure Zoom class using a password.",
      correct: "green",
    },
    {
      text: "A message says 'Your device is infected! Click here to fix it'.",
      correct: "red",
    },
    {
      text: "You use a different, strong password for each online account.",
      correct: "green",
    },
    {
      text: "You post your school ID card on social media.",
      correct: "red",
    },
    {
      text: "You use two-factor authentication for your email.",
      correct: "green",
    },
    {
      text: "You get an email saying your account will be closed unless you act now!",
      correct: "red",
    },
    {
      text: "You report a suspicious message to a trusted adult or teacher.",
      correct: "green",
    },
    {
      text: "You install antivirus software and keep it updated.",
      correct: "green",
    },
    {
      text: "You use public Wi-Fi to log into your bank account.",
      correct: "red",
    }
  ];
  

const SwipeGame = () => {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleChoice = (choice) => {
    const correctChoice = scenarios[index].correct;
    if (choice === correctChoice) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Oops! Try again.");
    }

    setTimeout(() => {
      setFeedback("");
      setIndex((prev) => (prev + 1) % scenarios.length);
    }, 1500);
  };

  return (
    <div className="swipe-game">
      <h2>Swipe Game</h2>
      <div className="scenario-card">
        <p>{scenarios[index].text}</p>
        <div className="buttons">
          <button className="red-flag" onClick={() => handleChoice("red")}>🚩</button>
          <button className="green-flag" onClick={() => handleChoice("green")}>✅</button>
        </div>
        <p className="feedback">{feedback}</p>
      </div>
    </div>
  );
};

export default SwipeGame;
