import { NavLink } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__body">
        <h1 className="header__title">
          <NavLink to="/home" className="header__navlink">
            <span className="header__fname">channy</span>
            <span className="header__name">how</span>
          </NavLink>
        </h1>
        <p className="header__label">designer & front-end web developper</p>
      </div>
    </div>
  );
}

export default Header;
