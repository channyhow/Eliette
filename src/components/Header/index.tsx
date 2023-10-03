import { NavLink } from 'react-router-dom';
import './styles.scss';

function Header() {
  console.log('header');

  return (
    <div className="header">
      <div className="header__body">
        <div>
          <h1 className="header__title">
            <NavLink to="/home">channy how</NavLink>
          </h1>
        </div>
        <p className="header__label">designer & front-end web developper</p>
      </div>
    </div>
  );
}

export default Header;
