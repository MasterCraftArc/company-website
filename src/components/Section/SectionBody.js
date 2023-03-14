import React from 'react';
import { Typography } from '@mui/material';

function SectionBody({ sx, children }) {
  return (
    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: { md: '1000px' }, ...sx }}>
      {children}
    </Typography>
  );
}

export default SectionBody;
