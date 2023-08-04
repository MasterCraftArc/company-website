import React from 'react';
import { Section, SectionBody, SectionDescription, SectionTitle } from '../../Section';
import { values } from './values';
import ValueIcon from './ValueIcon';
import ButtonLink from '../../ButtonLink';
import { namedLinks } from '../../../assets/data/navLinks';

function OurCulture() {
  return (
    <Section
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Section sx={{ textAlign: 'left', alignItems: 'start', width: { md: '515px' } }}>
        <SectionTitle>our culture</SectionTitle>
        <SectionDescription sx={{ textAlign: 'left' }}>
          Principles that Drive Innovation
        </SectionDescription>
        <SectionBody>
          Defense Unicorns operates with a single belief; that a value not lived is not a value at
          all. Our team exercises habits every day that bring our values to life.
        </SectionBody>
        <ButtonLink
          variant="outlined"
          color="secondary"
          sx={{ mx: 'auto', mt: '60px', width: '155px', height: '42px' }}
          {...namedLinks.careers}
          text="View Our Values"
        /> 
      </Section>
      <Section
        sx={{
          flexDirection: { xs: 'row', md: 'column' },
          flexWrap: 'wrap',
          width: { xs: '100%', md: '800px' },
          height: { xs: 'auto', md: '520px' },
        }}
      >
        {values.map((value, idx) => (
          <ValueIcon key={`core-value-${idx}`} {...value} />
        ))}
      </Section>
    </Section>
  );
}

export default OurCulture;
