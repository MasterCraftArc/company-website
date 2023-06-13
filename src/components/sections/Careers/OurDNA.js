import React from 'react';
import { Section, SectionDescription, SectionTitle } from '../../Section';
import { Box, Typography } from '@mui/material';
import { dnaCards } from '../../../assets/data/cardData';

const sectionSx = {
  background: `linear-gradient(0deg, #163E7B 0%, #1A3873 34%, #252960 75.99%, #2A2153 99.99%);`,
  padding: '120px 0',
};

function OurDNA() {
  return (
    <Section sx={sectionSx}>
      <SectionTitle>Our DNA</SectionTitle>
      <SectionDescription>What Makes Unicorns Sparkle</SectionDescription>
      <Box
        sx={{
          maxWidth: '1000px',
          display: 'flex',
          flexWrap: { md: 'wrap' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        {dnaCards.map((card, index) => (
          <Box
            key={`dna-card-${index}`}
            sx={{
              display: 'flex',
              // flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'start',
              width: { xs: 'auto', md: '500px' },
              padding: '24px 16px',
              gap: '32px',
            }}
          >
            <img src={card.img} alt={card.alt} height="120px" width="120px" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'start',
              }}
            >
              <Typography>We Are</Typography>
              <Typography variant="h2">{card.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Section>
  );
}

export default OurDNA;
