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

function Careers() {
  useDarkBackground();

  return (
    <>
      <CareersHelmet />
      <NavBar pathname={'/careers'} />
      <CareersHero />
      <CareersPaper>
        <CurrentOpenings />
        <CareersCollage />
      </CareersPaper>
      <Footer />
    </>
  );
}

export default Careers;
