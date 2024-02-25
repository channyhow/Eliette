import React, { useState } from 'react';
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation({ color, hoverColor }:{ color?: string; hoverColor?: string; }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    // <nav className={`navigation ${!isHomePage ? 'navigation--not-home' : ''}`}>
    <nav className="navigation">
      <NavLink
        to="/"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 0 ? 'navigation__link--hovered' : ''}`}
        style={{
          color: hoveredIndex === 0 ? hoverColor : color, // Corrected index check
          transition: 'color 0.2s', // Specify transition property
        }}
      >
        <span className="navigation__label">Info</span>
      </NavLink>

      <NavLink
        to="/projects"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 1 ? 'navigation__link--hovered' : ''}`}
        style={{
          color: hoveredIndex === 1 ? hoverColor : color, // Corrected index check
          transition: 'color 0.2s', // Specify transition property
        }}
      >
        <span className="navigation__label">Projects</span>
      </NavLink>

      <NavLink
        to="/contact"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 2 ? 'navigation__link--hovered' : ''}`}
        style={{
          color: hoveredIndex === 2 ? hoverColor : color, // Corrected index check
          transition: 'color 0.2s', // Specify transition property
        }}
      >
        <span className="navigation__label">Contact</span>
      </NavLink>
    </nav>
  );
}

export default Navigation;
