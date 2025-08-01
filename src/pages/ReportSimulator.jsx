import React, { useState } from 'react';
import './ReportSimulator.css';

const scenarios = [
  {
    id: 1,
    message: "A stranger sends you a suspicious link on social media claiming you won a prize.",
    correctAction: "Report",
    explanation: "Unknown links from strangers can lead to scams or malware. Reporting helps protect others too."
  },
  {
    id: 2,
    message: "A classmate posts a hurtful meme about you online.",
    correctAction: "Report",
    explanation: "Cyberbullying should always be reported to platform admins or trusted adults."
  },
  {
    id: 3,
    message: "A friend sends you a funny but harmless meme that’s trending.",
    correctAction: "Ignore",
    explanation: "If it's not offensive or harmful, there's no need to report. Save reporting for real risks."
  },
  {
    id: 4,
    message: "Someone is impersonating your profile and posting fake updates.",
    correctAction: "Report",
    explanation: "Impersonation is a serious issue. Report it to the platform immediately."
  },
  {
    id: 5,
    message: "You receive a friend request from someone you don’t know and their profile looks suspicious.",
    correctAction: "Report",
    explanation: "Reporting suspicious profiles helps prevent online threats."
  }
];

const ReportSimulator = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const current = scenarios[index];

  const handleAction = (action) => {
    setSelected(action);
    setShowFeedback(true);
  };

  const nextScenario = () => {
    setSelected('');
    setShowFeedback(false);
    setIndex((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="report-simulator">
      <h2>📢 Report Simulator</h2>
      <div className="scenario-box">
        <p className="message">"{current.message}"</p>
      </div>

      {!showFeedback ? (
        <div className="action-buttons">
          <button className="report-btn" onClick={() => handleAction("Report")}>🚨 Report</button>
          <button className="ignore-btn" onClick={() => handleAction("Ignore")}>🙈 Ignore</button>
        </div>
      ) : (
        <div className={`feedback ${selected === current.correctAction ? 'correct' : 'wrong'}`}>
          <p>{selected === current.correctAction ? '✅ Good choice!' : '❌ Not quite.'}</p>
          <p className="explanation">{current.explanation}</p>
          <button onClick={nextScenario} className="next-btn">Next</button>
        </div>
      )}
    </div>
  );
};

export default ReportSimulator;
