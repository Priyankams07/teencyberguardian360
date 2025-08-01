import React from "react";
import './i18n'; // ✅ Ensure this runs before any translation logic
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Pages
import WelcomePage from "./pages/WelcomePage";
import Games from "./pages/Games";
import SwipeGame from "./pages/SwipeGame";
import YesNoGame from "./pages/YesNoGame";
import CourtRoom from "./pages/CourtRoom";
import JoinFormPage from './pages/JoinFormPage';
import LoginPage from './pages/LoginPage';

// Hackathon Feature Pages
import RiskDashboard from "./pages/RiskDashboard";
import PeerPressureGame from "./pages/PeerPressureGame";
import SpotFakeGame from "./pages/SpotFakeGame";
import FootprintTimeline from "./pages/FootprintTimeline";
import CommunityAlerts from "./pages/CommunityAlerts";
import OfflineRiskDetector from "./pages/OfflineRiskDetector";

// Report System
import ReportForm from "./pages/ReportForm";
import ViewReports from "./pages/ViewReports";

// Not Found
import NotFound from "./pages/NotFound";

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Router>
      {/* Language Selector - Top Right Corner */}
      <div style={{
        padding: "10px",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "flex-end"
      }}>
        <label htmlFor="language-select" style={{ marginRight: "8px" }}>🌐 {t("Choose Language")}:</label>
        <select id="language-select" onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
        </select>
      </div>

      {/* Routes */}
      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/swipe" element={<SwipeGame />} />
        <Route path="/yesno" element={<YesNoGame />} />
        <Route path="/courtroom" element={<CourtRoom />} />
        <Route path="/join" element={<JoinFormPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Hackathon Features */}
        <Route path="/dashboard" element={<RiskDashboard />} />
        <Route path="/peerpressure" element={<PeerPressureGame />} />
        <Route path="/spotfake" element={<SpotFakeGame />} />
        <Route path="/footprint" element={<FootprintTimeline />} />
        <Route path="/alerts" element={<CommunityAlerts />} />
        <Route path="/offline-risk" element={<OfflineRiskDetector />} />

        {/* Report System */}
        <Route path="/report" element={<ReportForm />} />
        <Route path="/submit-report" element={<ReportForm />} />
        <Route path="/view-reports" element={<ViewReports />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
