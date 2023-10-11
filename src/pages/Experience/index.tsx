import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';
import experienceData from '../../data/experienceData.json';
import educationData from '../../data/educationData.json';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';

function ExperienceList() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <div className="experience-list">
        {' '}
        <h3 className="experience-list__title"> A little about me </h3>
        {' '}
        <p className="experience-list__intro">
          Born in Paris and raised in
          {' '}
          <span>Reunion Island</span>
          , I completed my education in Paris and then embarked on
          {' '}
          <span>a journey in China</span>
          .
          {' '}
          <br />
          There, I pursued business studies while mastering Mandarin,
          laying the foundation for my career.
        </p>
        <p className="experience-list__intro">
          My path led me to the world of
          {' '}
          <span>footwear design and manufacturing</span>
          {' '}
          in Asia. In 2017, I realized one of my dreams by launching
          {' '}
          <span>&quot;Les voyageuses label &quot;</span>
          {' '}
          in Hong Kong, blending my love for design, travel, and storytelling.
        </p>
        <p className="experience-list__intro">
          The COVID-19 pandemic prompted a move to Sydney and a shift in my career trajectory.
          Homesickness and a passion for boundless creativity brought me back to France,
          where I now thrive in the dynamic realm of
          {' '}
          <span>web development.</span>
        </p>
        <h3 className="experience-list__title">experience</h3>

        <div className="experience-container">
          <ExperienceCard experiences={experienceData} />
        </div>
        <h3 className="experience-list__title">education</h3>
        <div className="experience-list__container">
          <EducationCard education={educationData} />
        </div>

      </div>
    </motion.main>
  );
}

export default ExperienceList;
