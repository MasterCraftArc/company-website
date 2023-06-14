import React from 'react';
import { Box, Typography } from '@mui/material';
import CareerHeroBg from '../../../assets/jpg/careers-hero-bg.jpeg';
import palette from '../../../theme/palette';

function CareersHero() {
  return (
    <Box
      component="section"
      backgroundColor="background.paper"
      sx={{
        // NavBar Height
        backgroundImage: `url(${CareerHeroBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        gap: '2rem',
        width: '100vw',
        minHeight: '700px',
        height: '100vh',
        display: 'flex',
        marginTop: '-6rem',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingX: { xs: '2rem', md: '18.563rem' },
      }}
    >
      <Typography variant="h1" color="text.primary">
        Unicorn Careers
      </Typography>
      <Typography
        variant="h6"
        color="text.primary"
        sx={{
          typography: { xs: 'body2', md: 'h6' },
          paddingLeft: '.5rem',
          borderLeft: `solid 4px ${palette.primary.main}`,
        }}
      >
        Together, we can make the world more free and secure through the power of open source
        software.
      </Typography>
    </Box>
  );
}

export default CareersHero;
