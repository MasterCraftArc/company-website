import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurVisionWrapper = styled(Box)`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    0deg,
    #163e7b 0%,
    #1a3873 34%,
    #252960 75.99%,
    #2a2153 99.99%
  );
`;

function OurVision() {
  return (
    <OurVisionWrapper
      component="section"
      sx={{ height: 411 }}
    ></OurVisionWrapper>
  );
}

export default OurVision;
