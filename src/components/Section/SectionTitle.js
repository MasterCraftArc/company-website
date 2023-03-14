import React from 'react';
import { Typography } from '@mui/material';

function SectionTitle({ sx, children }) {
  return (
    <Typography component="h6" sx={{ typography: 'h6', textTransform: 'uppercase', ...sx }}>
      {children}
    </Typography>
  );
}

export default SectionTitle;
