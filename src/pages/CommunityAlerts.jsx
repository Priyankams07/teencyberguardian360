import React, { useState } from 'react';
import './CommunityAlerts.css';

const initialAlerts = [
  {
    id: 1,
    title: "⚠️ New Phishing Email Alert",
    description: "Students are receiving fake school emails asking for login credentials. Do not click links. Report to your teacher.",
    postedBy: "CyberGuideTeam"
  },
  {
    id: 2,
    title: "🚫 Online Game Chat Bullying",
    description: "Several users reported bullying through in-game chats. Block and report abusive players immediately.",
    postedBy: "StudentLeader2025"
  },
  {
    id: 3,
    title: "🕵️ Stranger DM Alert on Insta",
    description: "Unknown accounts are sending teens messages pretending to be friends. Don’t share personal info!",
    postedBy: "SafetyBot"
  }
];

const CommunityAlerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [newAlert, setNewAlert] = useState({
    title: '',
    description: '',
    postedBy: ''
  });

  const handleChange = (e) => {
    setNewAlert({ ...newAlert, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    if (newAlert.title && newAlert.description && newAlert.postedBy) {
      const newEntry = { ...newAlert, id: alerts.length + 1 };
      setAlerts([newEntry, ...alerts]);
      setNewAlert({ title: '', description: '', postedBy: '' });
    }
  };

  return (
    <div className="community-alerts">
      <h2>🛡️ Community Cyber Alerts</h2>
      <div className="alert-form">
        <input
          type="text"
          placeholder="Alert Title"
          name="title"
          value={newAlert.title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={newAlert.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          placeholder="Posted by"
          name="postedBy"
          value={newAlert.postedBy}
          onChange={handleChange}
        />
        <button onClick={handlePost}>📢 Post Alert</button>
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => (
          <div className="alert-card" key={alert.id}>
            <h3>{alert.title}</h3>
            <p>{alert.description}</p>
            <p className="posted-by">👤 Posted by: <strong>{alert.postedBy}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityAlerts;
