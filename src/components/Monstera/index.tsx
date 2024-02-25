import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MonsteraBlue from '../Icons/MonsteraBlue';
import MonsteraNude from '../Icons/MonsteraNude';

function MonsteraMenu() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <div className="monstera-menu">
      {/* NavLink wraps the icon to make it clickable, leading to the home page */}
      <NavLink to="/">
        {/* Conditionally render icons based on screen size */}
        {isMobile ? <MonsteraNude /> : <MonsteraBlue />}
      </NavLink>
    </div>
  );
}

export default MonsteraMenu;
