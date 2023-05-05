import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Section, SectionBody, SectionDescription, SectionTitle } from '../../Section';

function CurrentOpenings() {
  useEffect(() => {
    const jobsElement = document.getElementById('hiringthing-jobs');
    const mutationObserver = new MutationObserver(() => {
      const applyLinks = jobsElement.getElementsByClassName('ht-apply-link');
      const dividers = jobsElement.getElementsByClassName('ht-divider');
      if (dividers.length === 0 && applyLinks.length > 0) {
        for (const applyLink of applyLinks) {
          const divider = document.createElement('div');
          divider.setAttribute('class', 'ht-divider');
          applyLink.insertAdjacentElement('afterend', divider);
        }
      }
    });

    mutationObserver.observe(jobsElement, { childList: true });
    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Section>
      <SectionTitle>CURRENT OPENINGS</SectionTitle>
      <SectionDescription>Find Your Next Career</SectionDescription>
      <SectionBody sx={{ textAlign: 'center' }}>
        If you don't see a current opening that matches your interests please check back in this
        future.  We are routinely reviewing our resource plans and hiring needs.
      </SectionBody>
      <Box
        sx={{
          marginTop: '48px',
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column'
        }}
        id="hiringthing-jobs"
      ></Box>
    </Section>
  );
}

export default CurrentOpenings;
