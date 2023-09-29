import React, { useState } from 'react';
import './styles.scss';
import experienceData from '../../data/experienceData.json';
import educationData from '../../data/educationData.json';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
// import Monstera from '../../components/Icons/Monstera';

function ExperienceList() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  // const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  // const checkMobile = () => {
  //   setIsMobile(window.innerWidth < 768);
  // };

  // useEffect(() => {
  //   checkMobile();
  //   window.addEventListener('resize', checkMobile);
  //   return () => {
  //     window.removeEventListener('resize', checkMobile);
  //   };
  // }, []);

  return (
    <div className="experience-list">
      <h2 className="experience-list__title">experience</h2>
      <div className="education-card__container">
        <ExperienceCard experiences={experienceData} />
      </div>
      <h2 className="experience-list__title">education</h2>
      <div className="education-card__container">
        <EducationCard education={educationData} />
      </div>
      <a
        href="/home"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`experience-list__link ${hoveredIndex === 1 ? 'experience-list__link--hovered' : ''}`}
      >
        {/* <span>Back to Info</span>
        {!isMobile && hoveredIndex === 1 && (
        <Monstera className="experience-list__monstera" />
        )} */}
      </a>
    </div>
  );
}

export default ExperienceList;
