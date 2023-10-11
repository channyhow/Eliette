import React, { useState, useEffect } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Monstera from '../Icons/Monstera';

function Navigation() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <nav className="navigation">
      <NavLink
        to="/home"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 0 ? 'navigation__link--hovered' : ''}`}
      >
        {/* Render Monstera conditionally based on screen size */}
        {!isMobile && hoveredIndex === 0 && (
        <Monstera
          className="navigation__monstera navigation__monstera--visible"
        />
        )}
        <span className="navigation__label">Info</span>
      </NavLink>
      <NavLink
        to="/exp"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 3 ? 'navigation__link--hovered' : ''}`}
      >
        {!isMobile && hoveredIndex === 3 && (
        <Monstera className="navigation__monstera navigation__monstera--visible" />
        )}
        <span className="navigation__label">Experience</span>
      </NavLink>
      <NavLink
        to="/projects"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 1 ? 'navigation__link--hovered' : ''}`}
      >
        {/* Render Monstera conditionally based on screen size */}
        {!isMobile && hoveredIndex === 1 && (
        <Monstera
          className="navigation__monstera navigation__monstera--visible"
        />
        )}
        <span className="navigation__label">Projects</span>
      </NavLink>

      <NavLink
        to="/contact"
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        className={`navigation__link ${hoveredIndex === 2 ? 'navigation__link--hovered' : ''}`}
      >
        {/* Render Monstera conditionally based on screen size */}
        {!isMobile && hoveredIndex === 2 && (
        <Monstera
          className="navigation__monstera navigation__monstera--visible"
        />
        )}
        <span className="navigation__label">Contact</span>
      </NavLink>

    </nav>
  );
}

export default Navigation;
