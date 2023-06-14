import React from 'react';
import palette from '../../theme/palette';
import { styled, Box, Typography } from '@mui/material';

const OurVisionWrapper = styled(Box)`
  gap: 10px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(0deg, #163e7b 0%, #1a3873 34%, #252960 75.99%, #2a2153 99.99%);
`;

function OurVision() {
  return (
    <OurVisionWrapper
      component="section"
      sx={{
        height: { md: '411px' },
        px: { xs: '32px', md: '383px' },
        py: '106px',
      }}
    >
      <Typography
        component="h3"
        sx={{
          typography: 'h2',
        }}
      >
        Our Vision
      </Typography>
      <Typography
        component="h4"
        sx={{
          pl: '22px',
          lineHeight: '36px',
          fontStyle: 'italic',
          flexDirection: 'row',
          letterSpacing: '.18px',
          fontSize: '30px',
          borderLeft: `solid 6px ${palette.primary.main}`,
        }}
      >
        "We envision a free and secure world that <strong>enables progress and innovation.</strong>"
      </Typography>
    </OurVisionWrapper>
  );
}

export default OurVision;
