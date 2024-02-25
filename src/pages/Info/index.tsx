import { NavLink } from 'react-router-dom';
import './styles.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';

function Info() {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="info"
    >
      {' '}
      <div className="info__left">
        <div className="info__title">
          <NavLink to="/contact">
            <h1 className="info__title" style={{ fontFamily: 'EB Garamond, serif' }}>hi, i&rsquo;m channy how.</h1>
          </NavLink>
        </div>
        <div>
          <p>
            Your local front end developer,
            <br />
            driven by the belief that design
            can
            {' '}
            <br />
            {' '}
            inspire diversity and innovation
            {' '}
            <br />
            {' '}
            as I continue
            <span> to learn and grow.</span>
          </p>
          {/* <p>
            I work with
            <span> React, JavaScript, TypeScript, HTML, CSS, SCSS,</span>
            {' '}
            Node.js, and PostgreSQL.
          </p> */}
          <NavLink to="/contact">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {' '}
              <div>
                {' '}
                <p>
                  Let&rsquo;s
                  <span className="info__connect"> connect and transform ideas</span>
                  {' '}
                  <br />
                  {' '}
                  into digital reality.
                </p>
              </div>
              <ArrowForwardIcon style={{ display: 'flex', flex: '1' }} />
            </div>
          </NavLink>
          <p style={{ opacity: 0.5 }}>Ps: My favourite colour might be blue.</p>
        </div>
      </div>
      {/* {!isMobile && ( */}
      <div className="info__right">
        <Navigation hoverColor="#C6F700" />
      </div>
      {/* )} */}

    </motion.div>
  );
}

export default Info;
