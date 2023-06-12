import React from 'react';
import { Box, styled } from '@mui/material';
import Footer from '../components/sections/Footer';
import NavBar from '../components/sections/NavBar/NavBar';
import useDarkBackground from '../hooks/useDarkBackground';
import Benefits from '../components/sections/Careers/Benefits';
import CareersHero from '../components/sections/Careers/CareersHero';
import CareersHelmet from '../components/sections/Careers/CareersHelmet';
import CareersCollage from '../components/sections/Careers/CareersCollage';
import CurrentOpenings from '../components/sections/Careers/CurrentOpenings';
import OurDNA from '../components/sections/Careers/OurDNA';

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
        <OurDNA />
      </CareersPaper>
      <CareersCollage />
      <CareersPaper>
        <Benefits />
      </CareersPaper>
      <Footer />
    </>
  );
}

export default Careers;
