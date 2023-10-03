import { useEffect, useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import Tech from '../Tech & skills';
import Monstera from '../Icons/Monstera';

function InfoNav() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
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
    <div className="info-nav">

      <NavLink
        to="/exp"
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        className={`info-nav__link ${hoveredIndex === 0 ? 'info-nav__link--hovered' : ''}`}
      >
        <span className="info-nav__link-text">Experience & Education</span>
        {!isMobile && hoveredIndex === 0 && (
        <Monstera className="info-nav__monstera" />
        )}
      </NavLink>

      <Tech />

    </div>
  );
}

export default InfoNav;
