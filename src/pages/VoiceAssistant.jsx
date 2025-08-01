import React, { useEffect, useState } from 'react';

const VoiceAssistant = () => {
  const [language, setLanguage] = useState('en'); // 'en' or 'ta'
  const [lastResponse, setLastResponse] = useState('');

  useEffect(() => {
    const synth = window.speechSynthesis;

    const speak = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === 'ta' ? 'ta-IN' : 'en-IN';
      synth.speak(utterance);
    };

    const handleCommand = (command) => {
      let response = '';
      const cmd = command.toLowerCase();

      if (cmd.includes("hello")) {
        response = language === 'ta' ? "வணக்கம்! உங்களை சந்திப்பதில் மகிழ்ச்சி!" : "Hello! Nice to meet you!";
      } else if (cmd.includes("who are you")) {
        response = language === 'ta'
          ? "நான் TEENCYBER360-இன் குரல் உதவியாளர்!"
          : "I am the voice assistant of TEENCYBER360!";
      } else if (cmd.includes("give me a safety tip")) {
        response = language === 'ta'
          ? "உங்கள் இணையக் கணக்குகளுக்கு வலுவான கடவுச்சொற்களைப் பயன்படுத்துங்கள்."
          : "Use strong passwords for your online accounts.";
      } else if (cmd.includes("what can i say")) {
        response = language === 'ta'
          ? "நீங்கள் 'வணக்கம்', 'நீங்கள் யார்', 'பாதுகாப்பு யோசனை', அல்லது 'தமிழுக்கு மாற்று' என்று சொல்லலாம்."
          : "You can say 'Hello', 'Who are you', 'Give me a safety tip', or 'Switch to Tamil'.";
      } else if (cmd.includes("switch to tamil")) {
        setLanguage('ta');
        response = "இப்போது தமிழ் மொழிக்கு மாற்றப்பட்டது.";
      } else if (cmd.includes("switch to english")) {
        setLanguage('en');
        response = "Switched to English.";
      } else if (cmd.includes("repeat")) {
        response = lastResponse || (language === 'ta' ? "திரும்பச் சொல்ல ஏதும் இல்லை." : "There is nothing to repeat.");
      } else {
        response = language === 'ta'
          ? "மன்னிக்கவும், நான் அதை புரியவில்லை."
          : "Sorry, I didn't understand that.";
      }

      setLastResponse(response);
      speak(response);
    };

    const startListening = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = language === 'ta' ? 'ta-IN' : 'en-IN';

      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        console.log("🎤 Heard:", transcript);
        handleCommand(transcript);
      };

      recognition.onerror = (event) => {
        console.error("🎤 Speech recognition error:", event.error);
      };

      recognition.start();
      console.log("🟢 Voice assistant is listening...");
    };

    startListening();
  }, [language, lastResponse]); // ✅ Now warning-free

  return (
    <div className="voice-assistant">
      <h2>🎤 Voice Assistant</h2>
      <p>Try saying: "Hello", "Who are you?", "Switch to Tamil", "Give me a safety tip", "Repeat"</p>
    </div>
  );
};

export default VoiceAssistant;
