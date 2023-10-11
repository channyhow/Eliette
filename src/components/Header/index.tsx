import { NavLink } from 'react-router-dom';
import '../../styles/font.scss';
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <h3 className="header__title">
        <NavLink to="/home" className="header__navlink">
          channy
          how
        </NavLink>
      </h3>
      <p className="header__label">Designer & front-end web developper</p>
    </div>
  );
}

export default Header;
