// import { useEffect, useState } from 'react';
import './styles.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Monstera from '../Icons/Monstera';
import Socials from '../Socials';

function TopNav() {
  // const [hoveredIndex, setHoveredIndex] = useState(-1);
  // // const [isMobile, setIsMobile] = useState<boolean>(false);

  // const handleMouseEnter = (index: number) => {
  //   setHoveredIndex(index);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredIndex(-1);
  // };

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
  //   };

  //   checkMobile();

  //   window.addEventListener('resize', checkMobile);
  //   return () => {
  //     window.removeEventListener('resize', checkMobile);
  //   };
  // }, []);

  type PageNameMap = {
    [key: string]: string;
  };

  const pageName: PageNameMap = {
    '/': 'Bonjour!',
    '/home': 'Hey there!',
    '/exp': 'Work',
    '/projects': 'Projects',
    '/contact': 'Contact',
  };

  const location = useLocation();
  const currentPath = location.pathname;

  // Function to get the page name from the path
  const getPageName = (path: string) => pageName[path] || 'Unknown Page';
  return (
    <div className="topnav">
      <div className="topnav__left">
        {' '}
        <Socials />
      </div>
      <div className="topnav__link">
        <div className="topnav__page">{getPageName(currentPath)}</div>

        <NavLink
          to="/home"
        >
          <Monstera className="topnav__monstera" width={48} height={48} />
        </NavLink>
      </div>
    </div>
  );
}

export default TopNav;
