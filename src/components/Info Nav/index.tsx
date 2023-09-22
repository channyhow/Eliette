import { useEffect, useState } from 'react';
import './styles.scss';
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
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
      <ol>
        <li>
          <a
            href="/exp"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`info-nav__link ${hoveredIndex === 0 ? 'info-nav__link--hovered' : ''}`}
          >
            <span className="info-nav__link-text">Experience & Education</span>
            {!isMobile && hoveredIndex === 0 && (
              <Monstera className="info-nav__monstera" />
            )}
          </a>
        </li>
        <li>
          <Tech />
        </li>
      </ol>
    </div>
  );
}

export default InfoNav;
