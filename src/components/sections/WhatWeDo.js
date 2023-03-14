import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import DougRocket from '../../assets/svg/doug-rocket.svg';

const WhatWeDoSection = styled(Box)`
  display: flex;
  width: 100%;
  height: auto;
`;

function WhatWeDo() {
  return (
    <WhatWeDoSection
      component="section"
      sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 0, lg: '146px' },
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: '32px'
      }}
    >
      <Box>
        <DougRocket />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
          WHAT WE DO
        </Typography>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            fontSize: { md: '60px' },
            maxWidth: { md: '515px' }
          }}
        >
          Develop Mission Focused Open Source Products
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            maxWidth: { md: '515px' },
            typography: { xs: 'body2', md: 'body1' }
          }}
        >
          We provide secure, open source and infrastructure agnostic applications and tools that
          enable our partners to rapidly accelerate their software acquisition and delivery
          processes. Our open source applications enable DevSecOps on even the most secure systems.{' '}
        </Typography>
      </Box>
    </WhatWeDoSection>
  );
}

export default WhatWeDo;
