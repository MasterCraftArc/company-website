import React from 'react';
import ButtonLink from '../../ButtonLink';
import CapabilitiesCardRow from './CapabilitiesCardRow';
import { namedLinks } from '../../../assets/data/navLinks';
import { zarfCapabilityCards } from '../../../assets/data/cardData';
import { Section, SectionTitle, SectionDescription } from '../../Section';

function ZarfCapabilities() {
  return (
    <Section>
      <SectionTitle>ZARF CAPABILITIES</SectionTitle>
      <SectionDescription>Deploy Anywhere - Regardless of Connection</SectionDescription>
      <CapabilitiesCardRow cards={zarfCapabilityCards} />
      <ButtonLink
        variant="outlined"
        color="secondary"
        sx={{ mx: 'auto', mt: '60px', width: '155px', height: '42px' }}
        {...namedLinks.zarfInstall}
      />
    </Section>
  );
}

export default ZarfCapabilities;
