import React from 'react';
import { Section, SectionBody, SectionTitle, SectionDescription } from '../../Section';
import { Button, Box } from '@mui/material';
import skillbrigeImage from '../../../assets/png/skillbridge.png';

function SkillBridge() {
  return (
    <Section
      component="section"
      sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: '60px', lg: '120px' },
        justifyContent: 'center',
        alignItems: 'center',
        my: '160px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: { md: '40%' },
          textAlign: 'left',
          maxWidth: { md: '515px' },
        }}
      >
        <SectionTitle sx={{ textAlign: 'inherit' }}>SKILL BRIDGE OPPORTUNITY</SectionTitle>
        <SectionDescription sx={{ textAlign: 'inherit' }}>
          Same Mission Different Experience
        </SectionDescription>
        <SectionBody sx={{ textAlign: 'inherit', typography: { xs: 'body1', md: 'body2' } }}>
          The DOD SkillBridge program is an opportunity for service members to gain valuable
          civilian work experience through specific industry training, apprenticeships, or
          internships during the last 180 days of service. Defense Unicorns is honored to be an
          authorized SkillBridge provider with a history of providing service members with
          real-world job experience through this program.
        </SectionBody>
        <Button
          sx={{ mt: '24px', mr: 'auto' }}
          variant="contained"
          color="primary"
          href="https://www.dodskillbridge.us/"
        >
          Learn More
        </Button>
      </Box>
      <Box
        component="img"
        sx={{ maxWidth: { md: '40%' } }}
        src={skillbrigeImage}
        alt="Skill Bridge"
      />
    </Section>
  );
}

export default SkillBridge;
