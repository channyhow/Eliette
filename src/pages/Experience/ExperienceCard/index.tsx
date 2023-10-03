import React, { useState } from 'react';
import './styles.scss';
import {
  Button,
} from '@mui/material';
import { Experience } from '../../../@types';

interface ExperienceCardProps {
  experiences: Experience[];
}

function ExperienceCard({ experiences }: ExperienceCardProps) {
  const [showAll, setShowAll] = useState(false);

  // Check if experiences array is empty
  if (!experiences || experiences.length === 0) {
    return <div>No experience data available</div>;
  }

  // Slice the array to display a maximum of 2 cards or all cards based on showAll state
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="experience-card">
      {displayedExperiences.map((experience) => (
        <div key={experience.endYear} className="experience-card__body">
          <div className="experience-card__duration">
            <h4 className="experience-card__year">{experience.endYear}</h4>
            <h4 className="experience-card__year">{experience.startYear}</h4>
          </div>
          <div className="experience-card__details">
            <div className="experience-card__position">{experience.position}</div>
            <div className="experience-card__company">
              <a href="{experience.website}">{experience.company}</a>
              -
              {' '}
              {experience.location}
            </div>
            <div className="experience-card__description">
              {experience.description}
            </div>

            <div className="experience-card__skills">
              {experience.skills.length > 0 && (
                <ul className="experience-card__skills-list">
                  {experience.skills.map((skill) => (
                    <li key={skill} className="experience-card__skill">
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}

      {experiences.length > 2 && !showAll && (
        <Button
          type="button"
          className="read-more-button"
          onClick={() => setShowAll(true)}
          style={{
            color: '#eeebe9', // Change the text color to white
            alignSelf: 'center', // Center the button horizontally
            backgroundColor: '#FDB727',
            opacity: 0.8,
          }}
        >
          Read More
        </Button>
      )}
    </div>
  );
}

export default ExperienceCard;
