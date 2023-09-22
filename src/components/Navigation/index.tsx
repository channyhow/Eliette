import React, { useState, useEffect } from 'react';
import './styles.scss';
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
    <div className="navigation">
      <ol className="navigation__list">
        <li className="navigation__item">
          <a
            href="/home"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`navigation__link ${hoveredIndex === 0 ? 'navigation__link--hovered' : ''}`}
          >
            {/* Render Monstera conditionally based on screen size */}
            {!isMobile && hoveredIndex === 0 && (
              <Monstera
                className="navigation__arrow navigation__arrow--visible"
              />
            )}

            <span className="navigation__text">Info</span>
          </a>
        </li>
        <li className="navigation__item">
          <a
            href="/projects"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`navigation__link ${hoveredIndex === 1 ? 'navigation__link--hovered' : ''}`}
          >
            {/* Render Monstera conditionally based on screen size */}
            {!isMobile && hoveredIndex === 1 && (
              <Monstera
                className="navigation__arrow navigation__arrow--visible"
              />
            )}

            <span className="navigation__text">Projects</span>
          </a>
        </li>
        <li className="navigation__item">
          <a
            href="/contact"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`navigation__link ${hoveredIndex === 2 ? 'navigation__link--hovered' : ''}`}
          >
            {/* Render Monstera conditionally based on screen size */}
            {!isMobile && hoveredIndex === 2 && (
              <Monstera
                className="navigation__arrow navigation__arrow--visible"
              />
            )}

            <span className="navigation__text">Contact</span>
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Navigation;
