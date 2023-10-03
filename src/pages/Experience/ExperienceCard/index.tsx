import React, { useState } from 'react';
import './styles.scss';
import {
  Button,
} from '@mui/material';
import { Experience } from '../../../@types';

// Define a type for the keys in showFullDescriptions based on your Experience object
type ShowFullDescriptions = Record<string, boolean>;

interface ExperienceCardProps {
  experiences: Experience[];
}

function ExperienceCard({ experiences }: ExperienceCardProps) {
  const [showFullDescriptions, setShowFullDescriptions] = useState<ShowFullDescriptions>({});
  const [showAll, setShowAll] = useState(false);

  // Check if experiences array is empty
  if (!experiences || experiences.length === 0) {
    return <div>No experience data available</div>;
  }

  // Function to handle showing full descriptions for all experiences
  const handleShowFullResume = () => {
    setShowAll(true);
    setShowFullDescriptions(
      experiences.reduce((acc, experience) => {
        // accumulator
        acc[experience.endYear] = true;
        return acc;
      }, {}),
    );
  };

  // Function to handle hiding full descriptions
  const handleHideFullResume = () => {
    setShowAll(false);
    setShowFullDescriptions({});
  };

  return (
    <div className="experience-card">
      {experiences.map((experience) => (
        <div key={experience.endYear} className="experience-card__body">
          <div className="experience-card__duration">
            <h4 className="experience-card__year">{experience.endYear}</h4>
            <h4 className="experience-card__year">{experience.startYear}</h4>
          </div>
          <div className="experience-card__details">
            <div className="experience-card__position">{experience.position}</div>
            <div className="experience-card__company">
              <a href={experience.website}>{experience.company}</a>
              {' '}
              -
              {' '}
              {experience.location}
            </div>
            <div className="experience-card__description">
              {showFullDescriptions[experience.endYear] ? (
                experience.description // Show full description if showFullDescriptions is true
              ) : (
                <>
                  {experience.description.slice(0, 100)}
                  {' '}
                  {/* Show the first 100 characters of the description */}
                  {experience.description.length > 100}
                </>
              )}
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
      <Button
        type="button"
        className="read-more-button"
        onClick={showAll ? handleHideFullResume : handleShowFullResume}
        style={{
          margin: '1em',
          padding: '0.5em',
          color: '#FDB727',
          alignSelf: 'flex-start',
          opacity: 0.8,
        }}
      >
        {showAll ? 'View less' : 'View full resume'}
      </Button>
    </div>
  );
}

export default ExperienceCard;
