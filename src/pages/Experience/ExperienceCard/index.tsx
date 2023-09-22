import React from 'react';
import './styles.scss';
import { Experience } from '../../../@types';

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  // Check if experience is undefined or empty
  if (!experience || Object.keys(experience).length === 0) {
    return <div>No experience data available</div>;
  }

  return (
    <div className="experience-card">
      <div className="experience-card__duration">
        <h4 className="experience-card__year">{experience.startYear}</h4>
        <h4 className="experience-card__year">{experience.endYear}</h4>
      </div>
      <div className="experience-card__details">
        <div className="experience-card__position">{experience.position}</div>
        <div className="experience-card__company">{experience.company}</div>
        <div className="experience-card__location">{experience.location}</div>
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
  );
}

export default ExperienceCard;
