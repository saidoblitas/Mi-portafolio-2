import React, { useState } from 'react';
import './ModeToggle.css'; // Estilos para el toggle de modo claro/oscuro

function ModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  };

  return (
    <button onClick={toggleMode} className="mode-toggle">
      {darkMode ? '🌙' : '🌞'}
    </button>
  );
}

export default ModeToggle;
