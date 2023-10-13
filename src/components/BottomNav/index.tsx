import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.scss';
import Copyright from '../Copyright';

function BottomNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  if (isHomepage) {
    return null; // Return null on homepage
  }

  return (
    <div className="bottom-section">
      <nav className="bottom-section__nav">
        <NavLink
          to="/"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className={`bottom-section__link ${
            hoveredIndex === 0 ? 'bottom-section__link--hovered' : ''
          }`}
        >

          <h4 className="bottom-section__text">Info</h4>
        </NavLink>
        <NavLink
          to="/exp"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          className={`bottom-section__link ${
            hoveredIndex === 3 ? 'bottom-section__link--hovered' : ''
          }`}
        >

          <h4 className="bottom-section__text">Experience</h4>
        </NavLink>
        <NavLink
          to="/projects"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className={`bottom-section__link ${
            hoveredIndex === 1 ? 'bottom-section__link--hovered' : ''
          }`}
        >

          <h4 className="bottom-section__text">Projects</h4>
        </NavLink>
        <NavLink
          to="/contact"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          className={`bottom-section__link ${
            hoveredIndex === 2 ? 'bottom-section__link--hovered' : ''
          }`}
        >

          <h4 className="bottom-section__text">Contact</h4>
        </NavLink>
      </nav>
      {' '}
      <Copyright />
    </div>
  );
}

export default BottomNav;
