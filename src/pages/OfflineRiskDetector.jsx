import React, { useState } from 'react';
import './OfflineRiskDetector.css';

const scenarios = [
  {
    question: "You receive a flyer at school for a 'free party' with no known organizer. Should you attend?",
    answer: "No",
    explanation: "Unverified events without trusted organizers can be unsafe. Always check with an adult."
  },
  {
    question: "Someone you recently met online asks to meet in person at a mall. You’ve only chatted a few times. Is it okay to go?",
    answer: "No",
    explanation: "Meeting strangers from the internet alone is risky. Always consult a trusted adult."
  },
  {
    question: "A person claiming to be a school official calls and asks for your address. They say it's for a 'student prize.' Should you give it?",
    answer: "No",
    explanation: "Never share your address or personal info unless you verify the source through your school."
  },
  {
    question: "Your best friend wants to show you a shortcut home through a dark alley. Should you go?",
    answer: "No",
    explanation: "Stick to well-lit and familiar routes. Safety first, even with close friends."
  },
  {
    question: "You are offered a free gift by someone on the street in exchange for a photo of your school ID. Is this safe?",
    answer: "No",
    explanation: "Never share your ID or personal documents with strangers."
  }
];

const OfflineRiskDetector = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleChoice = (choice) => {
    setSelected(choice);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setSelected('');
    setShowExplanation(false);
    setCurrent((prev) => (prev + 1) % scenarios.length);
  };

  const currentScenario = scenarios[current];

  return (
    <div className="offline-risk-detector">
      <h2>🚨 Offline Risk Detector</h2>
      <p className="scenario">{currentScenario.question}</p>

      {!showExplanation ? (
        <div className="buttons">
          <button onClick={() => handleChoice('Yes')} className="yes">Yes</button>
          <button onClick={() => handleChoice('No')} className="no">No</button>
        </div>
      ) : (
        <div className={`feedback ${selected === currentScenario.answer ? 'correct' : 'wrong'}`}>
          <p>
            {selected === currentScenario.answer ? '✅ Correct!' : '❌ Not quite.'}
          </p>
          <p className="explanation">{currentScenario.explanation}</p>
          <button onClick={nextQuestion} className="next-btn">Next</button>
        </div>
      )}
    </div>
  );
};

export default OfflineRiskDetector;
