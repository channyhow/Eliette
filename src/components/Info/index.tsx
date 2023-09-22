import InfoNav from '../Info Nav';
import './styles.scss';

function Info() {
  return (
    <div className="info">
      <h2 className="info__title">bonjour</h2>
      <p className="info__body">
        Born in Paris and raised in Reunion Island, I completed my education in Paris and then embarked on
        {' '}
        <span>a transformative journey in China</span>
        .
        {' '}
        <br />
        There, I pursued business studies while mastering Mandarin, laying the foundation for my eclectic career.
      </p>
      <p className="info__body">
        My path led me to the world of
        {' '}
        <span>footwear design and manufacturing</span>
        {' '}
        in Asia. In 2017, I realized one of my dreams by launching
        {' '}
        <span>"Les voyageuses label"</span>
        {' '}
        in Hong Kong, blending my love for design, travel, and storytelling.
      </p>
      <p className="info__body">
        The COVID-19 pandemic prompted a move to Sydney and a shift in my career trajectory. Homesickness and a passion for boundless creativity brought me back to France, where I now thrive in the dynamic realm of
        {' '}
        <span>web development.</span>
      </p>
      <p className="info__body">
        I am driven by the belief that design can inspire diversity and innovation, and I continue
        {' '}
        <span>to learn and grow</span>
        {' '}
        in the ever-expanding universe of web development.
      </p>

      <InfoNav />
    </div>
  );
}

export default Info;
