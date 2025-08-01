import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import VoiceAssistant from './VoiceAssistant'; // ✅ Make sure this path is correct
import './WelcomePage.css';

// Language Switcher Component
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
    </div>
  );
};

const WelcomePage = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const { t } = useTranslation();

  const handleStartGame = () => navigate('/games');
  const handleLearnMore = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const handleJoinClick = () => navigate('/join');
  const handleLoginClick = () => navigate('/login');

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/Wel.png'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
  };

  return (
    <div className="welcome-container" style={backgroundStyle}>
      {/* ✅ Voice Assistant */}
      <VoiceAssistant />

      {/* Navbar */}
      <div className="navbar">
        <div className="left-navbar">
          <span className="dashboard-symbol" onClick={toggleMenu}>☰</span>
          {menuVisible && (
            <div className="dashboard-menu">
              <Link to="/home">🏠 {t('Home')}</Link>
              <Link to="/progress">📈 {t('My Progress')}</Link>
              <Link to="/games">🎮 {t('Games')}</Link>
              <Link to="/logout">🚪 {t('Log Out')}</Link>
            </div>
          )}
        </div>
        <div className="right-navbar">
          <LanguageSelector />
          <button className="join-button" onClick={handleJoinClick}>{t('Join for Free')}</button>
          <button className="login-button" onClick={handleLoginClick}>{t('Login')}</button>
          <button onClick={() => navigate("/view-reports")}>{t('View All Reports')}</button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-content">
        <h1 className="welcome-title">{t('Welcome to TeenCyber360')}</h1>
        <p className="welcome-subtitle">{t('Your fun way to become a Cyber Hero!')}</p>
        <div className="button-group">
          <button className="start-game-button" onClick={handleStartGame}>{t('Start Game')}</button>
          <button className="learn-more-button" onClick={handleLearnMore}>{t('Learn More')}</button>
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="top-performers-box">
        <h2>{t('Our Top Performers 🏆')}</h2>
        <div className="performer-cards">
          <div className="performer-card">
            <h3>{t('TeenCyberGuardian360 of the Week')}</h3>
            <p>🌟 Ananya R</p>
          </div>
          <div className="performer-card">
            <h3>{t('TeenCyberGuardian360 of the Month')}</h3>
            <p>🔥 Karthik V</p>
          </div>
          <div className="performer-card">
            <h3>{t('TeenCyberGuardian360 of the Year')}</h3>
            <p>👑 Sanjana M</p>
          </div>
        </div>
      </div>

      {/* Quizzes Section */}
      <div className="quiz-section">
        <div className="quiz-image-area">
          <img
            src={`${process.env.PUBLIC_URL}/images/cyber-kid.jpg`}
            alt="Cyber Kid"
          />
        </div>
        <div className="quiz-content">
          <h2>{t('Quizzes and Competitions for children')}</h2>
          <p><strong>{t('Quizzes')}:</strong><br />{t('National level quiz competitions are conducted for students regularly.')}</p>
          <p><strong>{t('Competitions')}:</strong><br />{t('Drawing, Painting, Cartoon stories, Reels, Short videos')}</p>
          <button className="know-more-button">{t('Know More')}</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-app">
        <h2>{t('About This App')}</h2>
        <p>{t('What if you could become a digital superhero and save the day online? 🦸‍♀️🦸‍♂️')}</p>
        <p>{t('Welcome to')} <strong>TeenCyber360</strong>, {t('the app that turns you into a cyber expert with every click!')}</p>
        <p><strong>{t('Why Should You Care About Cybersecurity?')}</strong><br />{t('Think of the internet like a huge, exciting playground... TeenCyber360 gives you the superpowers to protect yourself.')}</p>
        <p><strong>{t('What’s Inside the Game?')}</strong><br />{t('Choose wisely to level up as a Cyber Guardian! 🎮🏅')}</p>
        <p><strong>{t('Why Play?')}</strong><br />{t('You’re not just learning—you’re living it.')}</p>
        <p><strong>{t('Ready to Join the Cyber Defenders?')}</strong><br />{t('Click "Start Game" and begin your cyber adventure! 🚀🔐')}</p>
      </div>

      {/* Cyber Kid Movement Section */}
      <div className="cyber-kid-movement">
        <h2>{t('Become a TeenCyberGuardian360 Partner!')}</h2>
        <p>{t("Shape the future of digital warriors! We're recruiting rockstar institutions to host our exclusive cybersecurity course—with your branding front and center!")}</p>
        <h3>{t('Who We Want')}:</h3>
        <ul>
          <li>✔️ {t('Schools – CBSE, ICSE, State Boards, JNVs, and beyond')}</li>
          <li>✔️ {t('Elite International Academies – Because safety has no borders!')}</li>
          <li>✔️ {t('Tech-Savvy Orgs – NGOs, ed-tech disruptors—let’s level up together!')}</li>
        </ul>
        <div className="connect-section">
          <h2>{t('Ready to Roll?')}</h2>
          <p>{t('DM, tag, or carrier pigeon—we’re flexible!')}</p>
          <h3>🔗 {t('Connect & Collab')}:</h3>
        </div>
        <p>{t('Together, we can empower the next generation with essential cybersecurity skills!')}</p>
        <p>{t('Ready to collaborate? Let’s make it happen.')}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
