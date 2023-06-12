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
          width: '77%',
          display: 'flex',
          flexWrap: 'wrap',
          ml: { md: 'auto' },
          justifyContent: 'start',
        }}
      >
        {dnaCards.map((card, index) => (
          <Box
            key={`dna-card-${index}`}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', lg: 'start' },
              width: { xs: '100%', md: '38.5%' },
              padding: '24px 0',
              gap: '48px',
            }}
          >
            <img src={card.img} alt={card.alt} width="152.97px" height="150.55px" />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: { xs: 'center', md: 'start' },
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
