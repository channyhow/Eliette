import React, { useState } from 'react';
import './styles.scss';
import { Button } from '@mui/material';
import { Education } from '../../../@types';
import CSSIcon from '../../../components/Icons/CSS';
import HtmlIcon from '../../../components/Icons/HTML';
import IllustratorIcon from '../../../components/Icons/Illustrator';
import JavaScriptIcon from '../../../components/Icons/JavaScript';
import NodeJsIcon from '../../../components/Icons/Node.Js';
import PhotoshopIcon from '../../../components/Icons/Photoshop';
import PostgreSQLIcon from '../../../components/Icons/PostgreSQL';
import ReactIcon from '../../../components/Icons/React';
import ReduxIcon from '../../../components/Icons/Redux';
import ShopifyIcon from '../../../components/Icons/Shopify';
import TypescriptIcon from '../../../components/Icons/TS';
import ExpressIcon from '../../../components/Icons/Express';

interface EducationCardProps {
  education: Education[];
}

function EducationCard({ education }: EducationCardProps) {
  const [showFullEducation, setShowFullEducation] = useState<ShowFullEducation>({});
  const [showAll, setShowAll] = useState(false);

  // Check if education is undefined or empty
  if (!education || education.length === 0) {
    return <div>No education data available</div>;
  }

  // Function to handle showing full education for all items
  const handleShowFullEducation = () => {
    setShowAll(!showAll); // Toggle the showAll state
    setShowFullEducation(
      education.reduce((acc, edu) => {
        // accumulator
        acc[edu.id] = true;
        return acc;
      }, {}),
    );
  };

  // Function to handle hiding full education
  const handleHideFullEducation = () => {
    setShowAll(false);
    setShowFullEducation({});
  };

  const displayedEducation = showAll ? education : education.slice(0, 2);

  return (
    <div className="education-card">
      {displayedEducation.map((edu) => (
        <div key={edu.endYear} className="education-card__body">
          <div className="education-card__duration">
            <h4 className="education-card__year">{edu.endYear}</h4>
            <h4 className="education-card__year">{edu.startYear}</h4>

          </div>
          <div className="education-card__details">
            <div className="education-card__degree">{edu.degree}</div>
            <div className="education-card__school">{edu.school}</div>
            <div className="education-card__location">{edu.location}</div>
            <div className="education-card__skills">
              {edu.skills.length > 0 && (
              <ul className="education-card__skills-list">
                <li>
                  <JavaScriptIcon />
                </li>
                <li>
                  <TypescriptIcon />
                </li>
                <li>
                  <ReactIcon />
                </li>
                <li>
                  <ReduxIcon />
                </li>
                <li>
                  <HtmlIcon />
                </li>
                <li>
                  <CSSIcon />
                </li>
                <li>
                  <NodeJsIcon />
                </li>
                <li>
                  <ExpressIcon />
                </li>
                <li>
                  <PostgreSQLIcon />
                </li>
                <li>
                  <PhotoshopIcon />
                </li>
                <li>
                  <IllustratorIcon />
                </li>
                <li>
                  <ShopifyIcon />
                </li>
              </ul>
              )}
            </div>
          </div>
        </div>
      ))}

      <Button
        type="button"
        className="read-more-button"
        onClick={showAll ? handleHideFullEducation : handleShowFullEducation}
        style={{
          margin: '1em',
          padding: '0.5em',
          color: '#FDB727',
          alignSelf: 'flex-start',
          opacity: 0.8,
        }}
      >
        {showAll ? 'View less' : 'View full education'}
      </Button>

    </div>
  );
}

export default EducationCard;
