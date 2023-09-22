import Navigation from '../Navigation';
import './styles.scss';

function Header() {
  return (
    <div className="header">
      <div className="header__body">
        <div>
          <h1 className="header__title">
            <a href="/home">channy how</a>
          </h1>
        </div>
        <p className="header__label">designer & front-end web developper</p>
      </div>

      <Navigation />
    </div>
  );
}

export default Header;
