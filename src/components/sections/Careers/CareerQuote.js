import React from 'react';
import palette from '../../../theme/palette';
import { styled, Box, Typography } from '@mui/material';
import Doug from '../../../assets/png/doug.png';

const BannerWrapper = styled(Box)`
  gap: 10px;
  width: 100vw;
  display: flex;
  justify-content: center;
  background: linear-gradient(0deg, #163e7b 0%, #1a3873 34%, #252960 75.99%, #2a2153 99.99%);
`;

function CareerQuote() {
  return (
    <BannerWrapper
      component="section"
      sx={{
        height: { md: '411px' },
        px: { xs: '32px', md: '64px' },
        py: '106px',
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: '24px', md: '32px', lg: '60px' },
      }}
    >
      <Typography
        component="h4"
        sx={{
          display: 'flex',
          lineHeight: '36px',
          fontStyle: 'italic',
          flexDirection: 'column',
          letterSpacing: '.18px',
          fontSize: '30px',
          gap: '24px',
          borderLeft: `solid 6px ${palette.primary.main}`,
          pl: '22px',
        }}
      >
        <Typography variant="inherit" maxWidth="729px">
          “Invest in people so they can work anywhere. Treat them in a way that they won’t want to
          work anywhere but here”
        </Typography>
        <Typography variant="inherit">- Andrew Greene</Typography>
      </Typography>
      <img
        src={Doug}
        alt="Doug, the Defense Unicorns spokes-unicorn"
        width="150.48px"
        height="218.64px"
      />
    </BannerWrapper>
  );
}

export default CareerQuote;
