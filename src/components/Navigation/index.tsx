import React, { useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="navigation">
      <NavLink
        to="/"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 0 ? 'navigation__link--hovered' : ''}`}
      >
        <span className="navigation__label">Info</span>
      </NavLink>
      <NavLink
        to="/exp"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 3 ? 'navigation__link--hovered' : ''}`}
      >
        <span className="navigation__label">Experience</span>
      </NavLink>
      <NavLink
        to="/projects"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 1 ? 'navigation__link--hovered' : ''}`}
      >
        <span className="navigation__label">Projects</span>
      </NavLink>

      <NavLink
        to="/contact"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 2 ? 'navigation__link--hovered' : ''}`}
      >
        <span className="navigation__label">Contact</span>
      </NavLink>

    </nav>
  );
}

export default Navigation;
