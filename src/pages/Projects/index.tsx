import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';
import Cards from '../../components/Card';
import portfolio from '../../utils/data/portfolio.json';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <Cards data={portfolio} />
    </motion.div>
  );
}

export default Projects;
