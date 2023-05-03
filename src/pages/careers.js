import { Section, SectionBody, SectionDescription, SectionTitle } from '../components/Section';
import CareersHero from '../components/sections/CareersHero';
import useDarkBackground from '../hooks/useDarkBackground';
import NavBar from '../components/sections/NavBar/NavBar';
import { fontWeights, fonts } from '../theme/typography';
import Footer from '../components/sections/Footer';
import SiteHelmet from '../components/SiteHelmet';
import { Box, styled } from '@mui/material';
import React, { useCallback, useEffect } from 'react';

const CareersPaper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 150px 0;
  z-index: -1;
  gap: 170px;

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
`;

function Careers() {
  useDarkBackground();

  useEffect(() => {
    const jobsRef = document.getElementById('hiringthing-jobs');
    const mutationObserver = new MutationObserver(() => {
      const applyLinks = jobsRef.getElementsByClassName('ht-apply-link');
      const dividers = jobsRef.getElementsByClassName('ht-divider');
      if (dividers.length === 0 && applyLinks.length > 0) {
        for (const applyLink of applyLinks) {
          const divider = document.createElement('div');
          divider.setAttribute('class', 'ht-aNWQdivider');
          applyLink.insertAdjacentElement('afterend', divider);
        }
      }
    });

    mutationObserver.observe(jobsRef, { childList: true });
    return () => {
      mutationObserver.disconnect();
    };
  });

  return (
    <>
      <SiteHelmet
        route="Careers"
        link={[
          {
            rel: 'stylesheet',
            type: 'text/css',
            media: 'all',
            href: 'https://assets.rippling-ats.com/stylesheets/embed.css'
          }
        ]}
        script={[
          {
            src: 'https://assets.rippling-ats.com/javascripts/embed.js',
            type: 'text/javascript'
          },
          {
            type: 'text/javascript',
            innerHTML: `var ht_settings = ( ht_settings || new Object() ); 
              ht_settings.site_url = "defense-unicorns"; 
              ht_settings.open_jobs_in_new_tab = true;
              `
          }
        ]}
      />
      <NavBar pathname={'/careers'} />
      <CareersHero />
      <CareersPaper>
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
      </CareersPaper>
      <Footer />
    </>
  );
}

export default Careers;
