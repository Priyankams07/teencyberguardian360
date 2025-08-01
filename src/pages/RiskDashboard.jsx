import React from 'react';
import './RiskDashboard.css';

const riskData = [
  {
    category: "Password Strength",
    level: "High Risk",
    description: "Uses weak or reused passwords across platforms.",
    color: "#e74c3c",
  },
  {
    category: "Social Media Activity",
    level: "Medium Risk",
    description: "Often shares personal information publicly.",
    color: "#f39c12",
  },
  {
    category: "App Permissions",
    level: "Low Risk",
    description: "Grants unnecessary permissions to apps.",
    color: "#27ae60",
  },
  {
    category: "Click Behavior",
    level: "High Risk",
    description: "Frequently clicks on suspicious links.",
    color: "#c0392b",
  },
];

const RiskDashboard = () => {
  return (
    <div className="risk-dashboard">
      <h2 className="dashboard-title">Teen Cyber Risk Dashboard</h2>
      <p className="dashboard-subtitle">Evaluate your cyber habits and identify areas to improve</p>

      <div className="risk-cards-container">
        {riskData.map((item, index) => (
          <div key={index} className="risk-card" style={{ borderColor: item.color }}>
            <h3>{item.category}</h3>
            <p><strong>Risk Level:</strong> <span style={{ color: item.color }}>{item.level}</span></p>
            <p className="risk-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskDashboard;
