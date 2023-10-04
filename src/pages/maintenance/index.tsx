import './styles.scss';
import { NavLink } from 'react-router-dom'; // Remove NavLink import if not needed
import Pepette from '../../assets/sticker_16.png';

function Maintenance() {
  return (
    <div className="maintenance">
      <h1>Oh no!</h1>
      {' '}
      <NavLink to="/home">
        <img src={Pepette} alt="Pepe" className="pepette" />
        {' '}
      </NavLink>
      <p>This area is still a work in progress!</p>
      <p>How about coming back later?</p>

    </div>
  );
}

export default Maintenance;
