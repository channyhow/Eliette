/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import './styles.scss';

function Info() {
  return (
    <div className="info">
      <h3 className="info__title">
        <NavLink to="/contact" className="info__navlink">
          channy
          how
        </NavLink>
      </h3>
      <p className="info__label">Designer & front-end web developper</p>
      <p className="info__body">
        I am driven by the belief that design can inspire diversity and innovation, and I continue
        <span> to learn and grow.</span>
      </p>
      <p className="info__body">
        I work with
        <span>React, JavaScript, TypeScript, HTML, CSS, SCSS,</span>
        Node.js, and PostgreSQL.
        <br />
        {/* I'm also proficient in Photoshop and Illustrator. */}
      </p>
      {/* <p className="info__body">
        My priority is creating
        {' '}
        <span>responsive</span>
        {' '}
        web solutions for optimal user experiences.
        {' '}
        <br />

        I believe in design-driven innovation and constantly evolve in the web development universe.
      </p> */}
      <p className="info__body">
        Let's
        {' '}
        <span>connect and transform ideas</span>
        {' '}
        into digital reality.
      </p>

    </div>
  );
}

export default Info;
