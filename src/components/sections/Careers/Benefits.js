import React from 'react';
import { Box, styled, Card, Typography } from '@mui/material';
import { BenefitsCards } from '../../../assets/data/cardData';
import CardBackground from '../../../assets/png/resource-card-bg.png';
import { Section, SectionTitle, SectionDescription } from '../../Section';

const ResourceRow = styled(Box)``;

const benefitRowSx = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: { xs: '50px', sm: '25px', md: '50px' },
  width: { xs: '100%', lg: '80%', xl: '65%' },
  mx: 'auto',
  mt: '48px'
};

const StyledCard = styled(Card)`
  width: 286px;
  height: 284px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  background-image: url(${CardBackground});
  text-align: center;
  align-items: center;
  padding: 24px;
`;

function Benefits() {
  return (
    <Section>
      <SectionTitle>Our Benefits</SectionTitle>
      <SectionDescription>Life of a Defense Unicorn</SectionDescription>
      <ResourceRow sx={benefitRowSx}>
        {BenefitsCards.map((card, index) => (
          <StyledCard sx={{ color: 'primary.contrastText' }} key={`learn-with-us-card-${index}`}>
            <Typography variant="h4">{card.title}</Typography>
            <Typography variant="h4">{card.titleLineTwo}</Typography>
            <Typography variant="body2" sx={{ marginTop: '12px', textAlign: 'left' }}>
              {card.body}
            </Typography>
          </StyledCard>
        ))}
      </ResourceRow>
    </Section>
  );
}

export default Benefits;
