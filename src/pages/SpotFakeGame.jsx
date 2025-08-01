import React, { useState } from 'react';
import './SpotFakeGame.css';

const scenarios = [
  {
    id: 1,
    optionA: {
      name: 'Jessica_Real',
      bio: 'Student | Nature Lover 🌱 | DM for collabs',
      followers: 500,
      profilePic: '/images/jess.png'
    },
    optionB: {
      name: 'Jessy.Free.Giftz',
      bio: 'Win iPhones 🎁💥 Limited Offer!!',
      followers: 8,
      profilePic: '/images/fake.jpg'
    },
    correct: 'B'
  },
  {
    id: 2,
    optionA: {
      name: 'FitAdvice.biz',
      bio: 'Lose 20kg in 5 days 😱 | Link in bio 👇',
      followers: 23,
      profilePic: '/images/hfake.jpg'
    },
    optionB: {
      name: 'HealthGuru_21',
      bio: 'Fitness tips 💪 | Real advice | No spam',
      followers: 1200,
      profilePic: '/images/health.jpg'
    },
    correct: 'A'
  },
  {
    id: 3,
    optionA: {
      name: 'TravelWithLily',
      bio: 'Explorer ✈️ | Sharing travel tips & photos | Let’s wander together!',
      followers: 1500,
      profilePic: 'https://via.placeholder.com/100/27ae60/ffffff?text=A'
    },
    optionB: {
      name: 'Travel.Free.Gift',
      bio: 'Win Free Trips 🌍 Limited Time Offer!!',
      followers: 12,
      profilePic: 'https://via.placeholder.com/100/e74c3c/ffffff?text=B'
    },
    correct: 'B'
  },
  {
    id: 4,
    optionA: {
      name: 'Emma.123.Free',
      bio: 'Get free cooking gadgets 🍴 Hurry now!',
      followers: 5,
      profilePic: 'https://via.placeholder.com/100/f39c12/ffffff?text=A'
    },
    optionB: {
      name: 'ChefEmma',
      bio: 'Home Chef 🍳 | Recipes & cooking hacks | DM for collabs',
      followers: 980,
      profilePic: 'https://via.placeholder.com/100/2980b9/ffffff?text=B'
    },
    correct: 'A'
  },
  {
    id: 5,
    optionA: {
      name: 'NatureLover_Amy',
      bio: 'Plant parent 🌿 | Sharing gardening tips | Eco-friendly',
      followers: 1300,
      profilePic: 'https://via.placeholder.com/100/16a085/ffffff?text=A'
    },
    optionB: {
      name: 'Amy_FreePlants',
      bio: 'Win Free Plants 🌱 | Click link now!',
      followers: 7,
      profilePic: 'https://via.placeholder.com/100/8e44ad/ffffff?text=B'
    },
    correct: 'B'
  },
  {
    id: 6,
    optionA: {
      name: 'Free.TechGadgets',
      bio: 'Claim your free gadgets 🎁 | Limited stock!',
      followers: 15,
      profilePic: 'https://via.placeholder.com/100/e67e22/ffffff?text=A'
    },
    optionB: {
      name: 'TechGeekMax',
      bio: 'Latest tech reviews & tutorials 💻 | Follow for updates',
      followers: 2100,
      profilePic: 'https://via.placeholder.com/100/34495e/ffffff?text=B'
    },
    correct: 'A'
  },
  {
    id: 7,
    optionA: {
      name: 'Sara.FreeYoga',
      bio: 'Free yoga mats 🎁 | Join now!',
      followers: 10,
      profilePic: 'https://via.placeholder.com/100/c0392b/ffffff?text=A'
    },
    optionB: {
      name: 'YogaWithSara',
      bio: 'Yoga instructor 🧘‍♀️ | Daily poses & wellness tips',
      followers: 1750,
      profilePic: 'https://via.placeholder.com/100/2ecc71/ffffff?text=B'
    },
    correct: 'A'
  }
];

const SpotFakeGame = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (choice) => {
    if (showResult) return;
    setSelected(choice);
    setShowResult(true);
  };

  const nextScenario = () => {
    setSelected('');
    setShowResult(false);
    setIndex((prev) => (prev + 1) % scenarios.length);
  };

  const current = scenarios[index];

  return (
    <div className="spot-fake-game">
      <h2>🕵️ Spot the Fake Profile</h2>
      <p>Can you tell which one is suspicious?</p>

      <div className="profile-container">
        <div
          className={`profile-card ${selected === 'A' ? 'selected' : ''}`}
          onClick={() => handleSelect('A')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleSelect('A');
          }}
        >
          <img src={current.optionA.profilePic} alt="Profile A" />
          <h3>{current.optionA.name}</h3>
          <p>{current.optionA.bio}</p>
          <small>Followers: {current.optionA.followers}</small>
        </div>

        <div
          className={`profile-card ${selected === 'B' ? 'selected' : ''}`}
          onClick={() => handleSelect('B')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleSelect('B');
          }}
        >
          <img src={current.optionB.profilePic} alt="Profile B" />
          <h3>{current.optionB.name}</h3>
          <p>{current.optionB.bio}</p>
          <small>Followers: {current.optionB.followers}</small>
        </div>
      </div>

      {showResult && (
        <div className={`result-message ${selected === current.correct ? 'correct' : 'wrong'}`}>
          {selected === current.correct
            ? '✅ Correct! That profile is suspicious.'
            : '❌ Oops! Try again next time.'}
          <button onClick={nextScenario}>Next</button>
        </div>
      )}
    </div>
  );
};

export default SpotFakeGame;
