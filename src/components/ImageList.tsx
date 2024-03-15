import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ImageListProps } from '../types';

// function srcset(image: string, size: number, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

export default function QuiltedImageList({ data }: ImageListProps) {
  const [open, setOpen] = useState(false);
  const [activeItemSrc, setActiveItemSrc] = useState('');

  const handleOpen = (imageSrc: string) => () => {
    setActiveItemSrc(imageSrc);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  // Style for the modal content
  const modalStyle = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    // bgcolor: 'background.paper',
    boxShadow: 24,
    // p: 4,
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.src}>
          <Button onClick={handleOpen(item.src)} style={{ padding: 0, minWidth: 'auto' }}>
            <img
              alt={item.alt}
              loading="lazy"
              style={{ width: 'auto', height: '100%' }}
            />
          </Button>
        </div>
      ))}

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <img
            src={activeItemSrc}
            alt=""
            style={{ maxWidth: '100%', maxHeight: '90vh' }}
            loading="lazy"
          />
        </Box>
      </Modal>
    </>
  );
}
