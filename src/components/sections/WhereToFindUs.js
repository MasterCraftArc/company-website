import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import WhereToFindUsImg from '../../assets/png/where-to-find-us.png';
import { Mail } from '@mui/icons-material';

const Section = styled(Box)`
  display: flex;
  width: 100%;
  height: auto;
`;
const Image = styled(Box)``;

function WhereToFindUs() {
  return (
    <Section
      component="section"
      sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: '60px', md: '120px' },
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: '32px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
          WHERE TO FIND US
        </Typography>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            fontSize: { md: '60px' },
            maxWidth: { md: '515px' }
          }}
        >
          Our Virtual Office
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            maxWidth: { md: '515px' },
            typography: { xs: 'body2', md: 'body1' }
          }}
        >
          Looking for a Unicorn? You can find us in our virtual office on Gather. We are a fully
          remote company with Unicorns who work all across the United States. Our virtual office
          space keeps us connected no matter where we are located.
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            maxWidth: { md: '515px' },
            typography: { xs: 'body2', md: 'body1' }
          }}
        >
          If you want to contact the very real team behind Defense Unicorns, email us at:
        </Typography>
        <Box>
          <Mail />
          <Typography
            component="a"
            href={'mailto: hello@defenseunicorns.com'}
            variant="body2"
            color="text.secondary"
            marginLeft="20px"
          >
            hello@defenseunicorns.com
          </Typography>
        </Box>
      </Box>
      <Image
        component="img"
        src={WhereToFindUsImg}
        loading="lazy"
        sx={{ maxWidth: { md: '40%' } }}
        alt="Defense Unicorns employees around a virtual table discussing Zarf inside gather town."
      />
    </Section>
  );
}

export default WhereToFindUs;
