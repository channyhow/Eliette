import React, { useEffect, useState } from 'react';
import './styles.scss';
import experienceData from '../../data/experienceData.json';
import educationData from '../../data/educationData.json';
import ExperienceCard from '../../components/ExperienceCard';
import EducationCard from '../../components/EducationCard';
import Monstera from '../../components/Icons/Monstera';

function ExperienceList() {
  // State to keep track of the currently hovered index
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Function to handle mouse enter event
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="experience-list">
      <h2 className="experience-list__title">experience</h2>
      <div>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.endYear} experience={experience} />
        ))}
        {/* ))} */}
        {' '}
        <h2 className="experience-list__title">education</h2>
        <div>
          {educationData.map((education) => (
            <EducationCard key={education.endYear} education={education} />
          ))}

        </div>
      </div>

      <a
        href="/home"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`experience-list__link ${hoveredIndex === 1 ? 'experience-list__link--hovered' : ''}`}
      >
        <span>Back to info</span>
        {!isMobile && hoveredIndex === 1 && (
        <Monstera className="experience-list__monstera" />
        )}

      </a>
    </div>
  );
}

export default ExperienceList;
