import React, { useState } from 'react';
import './styles.scss';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// import educationData from '../../data/educationData.json';

function EducationList() {
  // State to keep track of the currently hovered index
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Function to handle mouse enter event
  const handleMouseEnter = (index:number) => {
    setHoveredIndex(index);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };
  return (
    <div
      onMouseEnter={() => handleMouseEnter(1)} // When mouse enters, set hovered index to 1
      onMouseLeave={handleMouseLeave} // When mouse leaves, reset hovered index
      className={`education-list ${hoveredIndex === 1 ? 'education--hovered' : ''}`}
    >
      <h2 className="education-list__title">education</h2>
      {/* <div>
        {educationData.map((education) => (
          <EducationCard key={education.endYear} education={education} />
        ))}

      </div> */}
      <a
        href="/home"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className={`education-list__link ${hoveredIndex === 1 ? 'education-list__link--hovered' : ''}`}
      >
        <span>Back to info</span>
        <ArrowOutwardIcon className={`education-list__arrow ${hoveredIndex === 1 ? 'education-list__arrow--visible' : ''}`} />
      </a>
    </div>
  );
}

export default EducationList;
