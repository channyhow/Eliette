import './styles.scss';
import { NavLink } from 'react-router-dom';
import Pepette from '../../assets/sticker_16.png';

function Error() {
  return (
    <div className="error">
      <h1>Whoops</h1>
      {' '}
      <NavLink to="/home">
        <img src={Pepette} alt="Pepe" className="pepette" />
        {' '}
      </NavLink>
      <p>seems like this page doesn&apos;t exist!</p>
      <p>how about going home?</p>

    </div>
  );
}

export default Error;
