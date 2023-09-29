import './styles.scss';
import Pepette from '../../assets/sticker_16.png';

function Maintenance() {
  return (
    <div className="maintenance">
      <h1>Whoops</h1>
      <p>this page is under construction</p>
      <p>how about coming back later?</p>
      <img src={Pepette} alt="Pepe" style={{ scale: '50%' }} />

    </div>
  );
}

export default Maintenance;
