import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Maintenance() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="maintenance"
    >
      <h1 style={{ fontFamily: 'EB Garamond, serif' }}>Oh no!</h1>
      <p>This area is still a work in progress!</p>
      <p>How about coming back later?</p>
      <NavLink to="/" className="maintenance__link">
        <h4 style={{ fontFamily: 'EB Garamond, serif' }}>How about coming back later?</h4>
        <div className="maintenance__back">
          <ArrowBack />
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Maintenance;
