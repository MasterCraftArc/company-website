import React from "react";
import { Box, styled } from "@mui/material";

export const SectionWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const sectionSx = { px: "32px" };

function Section({ sx, children }) {
  return (
    <SectionWrapper component="section" sx={{ ...sectionSx, ...sx }}>
      {children}
    </SectionWrapper>
  );
}

export default Section;
