import { useEffect, useState } from 'react';
import './styles.scss';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ReduxIcon from '../Icons/Redux';
import JavaScriptIcon from '../Icons/JavaScript';
import ReactIcon from '../Icons/React';
import NodeJsIcon from '../Icons/Node.Js';
import HtmlIcon from '../Icons/HTML';
import CSSIcon from '../Icons/CSS';
import IllustratorIcon from '../Icons/Illustrator';
import PhotoshopIcon from '../Icons/Photoshop';
import ExpressIcon from '../Icons/Express';
import PostgreSQLIcon from '../Icons/PostgreSQL';
import ShopifyIcon from '../Icons/Shopify';
import TypescriptIcon from '../Icons/TS';
import Monstera from '../Icons/Monstera';

function Tech() {
  // State to keep track of the currently hovered index
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Function to handle mouse enter event
  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave event
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
    <div className="tech">
      <div
        onMouseEnter={() => handleMouseEnter(1)} // When mouse enters, set hovered index to 1
        onMouseLeave={handleMouseLeave} // When mouse leaves, reset hovered index
        className={`tech__link ${hoveredIndex === 1 ? 'tech__link--hovered' : ''}`}
      >
        <span className="tech__link-text">Tech & Skills</span>
        {!isMobile && hoveredIndex === 1 && (
        <Monstera className="tech__monstera" />
        )}

      </div>
      {/* Conditionally render the sublinks (icons) if hoveredIndex is 1 */}
      {hoveredIndex === 1 && (
        <div className={`tech__link ${hoveredIndex === 1 ? 'tech__link--visible' : ''}`}>
          <ul>
            <li><JavaScriptIcon /></li>
            <li><TypescriptIcon /></li>
            <li><ReactIcon /></li>
            <li><ReduxIcon /></li>
            <li><HtmlIcon /></li>
            <li><CSSIcon /></li>
            <li><NodeJsIcon /></li>
            <li><ExpressIcon /></li>
            <li><PostgreSQLIcon /></li>
            <li><PhotoshopIcon /></li>
            <li><IllustratorIcon /></li>
            <li><ShopifyIcon /></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tech;
