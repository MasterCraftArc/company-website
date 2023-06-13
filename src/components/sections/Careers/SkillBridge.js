import React from 'react';
import { Section, SectionBody, SectionTitle, SectionDescription } from '../../Section';
import { Button } from '@mui/material';
import skillbrigeImage from '../../../assets/png/skillbridge.png';

function SkillBridge() {
  return (
    <Section
      sx={{
        flexDirection: { xs: 'column-reverse', lg: 'row' },
        my: '160px',
        mx: { xs: '32px', md: '64px', lg: '160px', xl: '240px' },
        gap: { xs: '24px', md: '32px', lg: '60px' },
      }}
    >
      <Section
        sx={{
          gap: '12px',
          justifyContent: 'start',
          alignItems: 'start',
          textAlign: 'left',
          maxWidth: '720px',
        }}
      >
        <SectionTitle sx={{ textAlign: 'inherit' }}>SKILL BRIDGE OPPORTUNITY</SectionTitle>
        <SectionDescription sx={{ textAlign: 'inherit' }}>
          Same Mission Different Experience
        </SectionDescription>
        <SectionBody sx={{ textAlign: 'inherit' }}>
          The DOD SkillBridge program is an opportunity for service members to gain valuable
          civilian work experience through specific industry training, apprenticeships, or
          internships during the last 180 days of service. Defense Unicorns is honored to be an
          authorized SkillBridge provider with a history of providing service members with
          real-world job experience through this program.
        </SectionBody>
        <Button
          sx={{ mt: '24px' }}
          variant="contained"
          color="primary"
          href="https://www.dodskillbridge.us/"
        >
          Learn More
        </Button>
      </Section>
      <Section sx={{ maxWidth: '720px', height: '388.54px' }}>
        <img src={skillbrigeImage} alt="Skill Bridge" width="100%" />
      </Section>
    </Section>
  );
}

export default SkillBridge;
