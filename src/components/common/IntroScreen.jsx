import { useEffect, useState } from 'react';
import './IntroScreen.css';

const IntroScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Start exit animation at 100%
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Complete and hide intro screen
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen ${isExiting ? 'intro-screen-exit' : ''}`}>
      <div className="intro-content">
        {/* Animated Logo */}
        <div className="intro-logo">
          <div className="logo-circle">
            <svg viewBox="0 0 100 100" className="logo-svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#155EEF" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="url(#logoGradient)" 
                strokeWidth="3"
                className="logo-circle-path"
              />
              <text 
                x="50" 
                y="60" 
                textAnchor="middle" 
                fill="url(#logoGradient)" 
                fontSize="32" 
                fontWeight="800"
                className="logo-letter"
              >
                A
              </text>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="intro-brand">
          <span className="brand-text">Awizo</span>
          <span className="brand-text brand-text-accent">Hub</span>
        </h1>

        {/* Tagline */}
        <p className="intro-tagline">Your Partner for Digital Success</p>

        {/* Progress Bar */}
        <div className="intro-progress-container">
          <div className="intro-progress-bar">
            <div 
              className="intro-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="intro-progress-text">{progress}%</span>
        </div>

        {/* Animated Dots */}
        <div className="intro-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Background Animation */}
      <div className="intro-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </div>
  );
};

export default IntroScreen;
