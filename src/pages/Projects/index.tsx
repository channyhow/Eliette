import { motion } from 'framer-motion';
import './styles.scss';
import React, { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {' '}
      <div className="projects">

        <h2 className="projects__title">projects</h2>
        <ol>
          <li>
            <a
              href="neso200"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className={`projects__link ${hoveredIndex === 3 ? 'projects__link--hovered' : ''}`}
            >
              <span className={`projects__link-text ${hoveredIndex === 3 ? 'projects__link-text--hovered' : ''}`}>NESO200</span>
              <ArrowOutwardIcon className={`projects__arrow ${hoveredIndex === 3 ? 'projects__arrow--visible' : ''}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.albany.fr/"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className={`projects__link ${hoveredIndex === 0 ? 'projects__link--hovered' : ''}`}
            >
              <span className={`projects__link-text ${hoveredIndex === 0 ? 'projects__link-text--hovered' : ''}`}>JL ALBANY portfolio</span>
              <ArrowOutwardIcon className={`projects__arrow ${hoveredIndex === 0 ? 'projects__arrow--visible' : ''}`} />
            </a>
          </li>
          <li>
            <a
              href="https://www.sashayogaflow.com/"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className={`projects__link ${hoveredIndex === 1 ? 'projects__link--hovered' : ''}`}
            >
              <span className={`projects__link-text ${hoveredIndex === 1 ? 'projects__link-text--hovered' : ''}`}>Sasha Yoga Flow</span>
              <ArrowOutwardIcon className={`projects__arrow ${hoveredIndex === 1 ? 'projects__arrow--visible' : ''}`} />
            </a>
          </li>
          <li>
            <a
              href="/"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className={`projects__link ${hoveredIndex === 2 ? 'projects__link--hovered' : ''}`}
            >
              <span className={`projects__link-text ${hoveredIndex === 2 ? 'projects__link-text--hovered' : ''}`}>Project RUN</span>
              <ArrowOutwardIcon className={`projects__arrow ${hoveredIndex === 2 ? 'projects__arrow--visible' : ''}`} />
            </a>
          </li>
        </ol>
      </div>
    </motion.main>
  );
}

export default Projects;
