import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.scss';
import Copyright from '../Copyright';

function BottomNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/home';

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

    const resizeHandler = () => {
      checkMobile();
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  if (isMobile && isHomepage) {
    return null; // Return null if it's mobile and on the homepage
  }

  return (
    <div className="bottom-section">
      <nav className={`bottom-section__nav ${isMobile && isHomepage ? 'hidden' : ''}`}>
        <NavLink
          to="/home"
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