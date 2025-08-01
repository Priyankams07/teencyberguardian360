import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [language, setLanguage] = useState('en');
  const [voice, setVoice] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-container">
      <h1>⚙️ App Settings</h1>

      <div className="setting-item">
        <label htmlFor="language-select">🌐 Select Language:</label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
        </select>
      </div>

      <div className="setting-item">
        <label>🗣️ Voice Guidance:</label>
        <input
          type="checkbox"
          checked={voice}
          onChange={() => setVoice(!voice)}
        />
      </div>

      <div className="setting-item">
        <label>🌙 Dark Mode:</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      <button className="save-button">Save Settings</button>
    </div>
  );
};

export default Settings;
