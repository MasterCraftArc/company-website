import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { Section, SectionBody, SectionDescription, SectionTitle } from '../../Section';
import { fontWeights, fonts } from '../../../theme/typography';

const JobListings = styled(Box)`
  .ht-divider {
    :not(:last-child) {
      margin-bottom: 16px;
    }
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.text.secondary};
  }

  .ht-title-link {
    font-size: 36;
    width: fit-content;
    font-family: ${fonts.poppins};
    font-weight: ${fontWeights.medium};
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  .ht-apply-link {
    :hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    text-align: center;
    margin: 16px 0;
    color: ${({ theme }) => theme.palette.secondary.main};
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    cursor: pointer;
    font-family: Poppins, Verndana;
    font-weight: 500;
    font-size: 0.9375rem;
    line-height: 1.75;
    text-transform: uppercase;
    min-width: 64px;
    padding: 7px 21px;
    border-radius: 4px;
    -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #68c4ff;
    font-size: 15px;
    width: 155px;
    height: 42px;
  }

  .ht-no-positions {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

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
      <JobListings
        sx={{
          marginTop: '48px',
          display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
        }}
        id="hiringthing-jobs"
      ></JobListings>
    </Section>
  );
}

export default CurrentOpenings;
