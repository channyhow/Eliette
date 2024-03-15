import React from 'react';
import { motion } from 'framer-motion';
import './styles.scss';
import QuiltedImageList from '../../components/ImageList';
import { JLALBANY_IMAGE_MAP, SASHAYOGAFLOW_IMAGE_MAP } from '../../utils/imageMap';
import Cards from '../../components/Card';
import portfolio from './../../utils/data/portfolio.json';
function Projects() {
  // Combine and transform the image maps into the required array format
  const combinedImageData = [
    ...Object.values(JLALBANY_IMAGE_MAP),
    ...Object.values(SASHAYOGAFLOW_IMAGE_MAP),
  ].map((image) => ({
    src: image.src,
    alt: image.alt,
    cols: image.cols || 1, // Default to 1 if not specified
    rows: image.rows || 1, // Default to 1 if not specified
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="projects"
    >
      <Cards data={portfolio}/>
      {/* <QuiltedImageList data={combinedImageData} /> */}
    </motion.div>
  );
}

export default Projects;
