import React from 'react';
import { Box } from '@mui/system';
import { careersCollageImages } from '../../../assets/data/careers-collage';

function CareersCollage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: '0'
      }}
    >
      {careersCollageImages.map((image, index) => (
        <Box
          component="img"
          key={index}
          src={image.src}
          alt={image.alt}
          sx={{
            width: { xs: '100%', sm: image.width },
            height: 'auto'
          }}
        />
      ))}
    </Box>
  );
}

export default CareersCollage;
