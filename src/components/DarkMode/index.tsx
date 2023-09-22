import React, { useState } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : ''}`}>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider round" />
      </label>
      <p>Dark Mode</p>
    </div>
  );
}

export default DarkModeToggle;
