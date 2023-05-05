import CurrentOpenings from '../components/sections/Careers/CurrentOpenings';
import CareersCollage from '../components/sections/Careers/CareersCollage';
import CareersHero from '../components/sections/Careers/CareersHero';
import CareersHelmet from '../components/sections/Careers/CareersHelmet';
import useDarkBackground from '../hooks/useDarkBackground';
import NavBar from '../components/sections/NavBar/NavBar';
import { fontWeights, fonts } from '../theme/typography';
import Footer from '../components/sections/Footer';
import { Box, styled } from '@mui/material';
import React from 'react';

const CareersPaper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 150px 0;
  z-index: -1;
  gap: 170px;
`;

function Careers() {
  useDarkBackground();

  return (
    <>
      <CareersHelmet />
      <NavBar pathname={'/careers'} />
      <CareersHero />
      <CareersPaper>
        <CurrentOpenings />
      </CareersPaper>
      <CareersCollage />
      <Footer />
    </>
  );
}

export default Careers;
