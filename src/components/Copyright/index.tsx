import { NavLink } from 'react-router-dom';
import './styles.scss';

function Copyright() {
  return (
    <div className="copyright">
      <NavLink to="/contact">
        {' '}
        <p>
          Coded with ♡ by
          {' '}
          {' '}

          <span>Channy How</span>
        </p>
      </NavLink>
    </div>
  );
}

export default Copyright;
