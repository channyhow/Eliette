import './styles.scss';
// import Pepe from '../../assets/pepe.png';
import Pepette from '../../assets/sticker_16.png';

function Error() {
  return (
    <div className="error">
      <h1>Whoops</h1>
      <p>seems like this page doesn&apos;t exist!</p>
      <p>how about going home?</p>
      <img src={Pepette} alt="Pepe" style={{ scale: '50%' }} />

    </div>
  );
}

export default Error;
