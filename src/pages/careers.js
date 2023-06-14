import React from 'react';
import { Box, styled } from '@mui/material';
import Footer from '../components/sections/Footer';
import NavBar from '../components/sections/NavBar/NavBar';
import useDarkBackground from '../hooks/useDarkBackground';
import OurDNA from '../components/sections/Careers/OurDNA';
import Benefits from '../components/sections/Careers/Benefits';
import CareersHero from '../components/sections/Careers/CareersHero';
import CareerQuote from '../components/sections/Careers/CareerQuote';
import CareersHelmet from '../components/sections/Careers/CareersHelmet';
import CareersCollage from '../components/sections/Careers/CareersCollage';
import CurrentOpenings from '../components/sections/Careers/CurrentOpenings';
import SkillBridge from '../components/sections/Careers/SkillBridge';

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
      <OurDNA />
      <CareersCollage />
      <CareersPaper>
        <Benefits />
      </CareersPaper>
      <CareerQuote />
      <SkillBridge />
      <Footer />
    </>
  );
}

export default Careers;
