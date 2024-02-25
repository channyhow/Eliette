import './styles.scss';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MonsteraMenu from '../Monstera';
import SwipeableTemporaryDrawer from '../Drawer';

function Top() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  type PageNameMap = {
    [key: string]: string;
  };

  const pageName: PageNameMap = {
    '/': 'bonjour!',
    '/about': "it's me, channy!",
    // '/exp': 'Work',
    '/projects': "what's on",
    '/contact': 'contact',
  };

  const location = useLocation();
  const currentPath = location.pathname;

  // Function to get the page name from the path
  const getPageName = (path: string) => pageName[path] || 'Unknown Page';
  return (
    <div className="top">
      {isMobile && (
      <div>
        <SwipeableTemporaryDrawer />
      </div>
      )}
      <div style={{ scale: '0.9' }}>
        <h4 style={{ fontFamily:'EB Garamond, serif'}}>{getPageName(currentPath)}</h4>
      </div>
      {!isMobile && <MonsteraMenu />}
    </div>
  );
}

export default Top;
