import React from 'react';
import './styles.scss';
import { Education } from '../../@types';
import CSSIcon from '../Icons/CSS';
import HtmlIcon from '../Icons/HTML';
import IllustratorIcon from '../Icons/Illustrator';
import JavaScriptIcon from '../Icons/JavaScript';
import NodeJsIcon from '../Icons/Node.Js';
import PhotoshopIcon from '../Icons/Photoshop';
import PostgreSQLIcon from '../Icons/PostgreSQL';
import ReactIcon from '../Icons/React';
import ReduxIcon from '../Icons/Redux';
import ShopifyIcon from '../Icons/Shopify';
import TypescriptIcon from '../Icons/TS';
import ExpressIcon from '../Icons/Express';

interface EducationCardProps {
  education: Education;
}

function EducationCard({ education }: EducationCardProps) {
  // Check if education is undefined or empty
  if (!education || Object.keys(education).length === 0) {
    return <div>No education data available</div>;
  }

  return (
    <div className="education-card">
      <div className="education-card__duration">
        <h4 className="education-card__year">{education.startYear}</h4>
        <h4 className="education-card__year">{education.endYear}</h4>
      </div>
      <div className="education-card__details">
        <div className="education-card__degree">{education.degree}</div>
        <div className="education-card__school">{education.school}</div>
        <div className="education-card__location">{education.location}</div>
        <div className="education-card__skills">
          {education.skills.length > 0 && (
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
              {/* {education.skills.map((skill) => (
                <li key={skill} className="education-card__skill">{skill}</li>
              ))} */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
