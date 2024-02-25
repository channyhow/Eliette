import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';
import Card from '../../components/Card';
import portfolio from '../../utils/data/portfolio.json';
import { convertPortfolioToCommonData } from '../../utils/dataConversion';
import Maintenance from '../maintenance';

function Projects() {
  // const portfolioData = convertPortfolioToCommonData(portfolio);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <Maintenance />
      {/* <Card data={portfolioData} /> */}
    </motion.div>
  );
}

export default Projects;
