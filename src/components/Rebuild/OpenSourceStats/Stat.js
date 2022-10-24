import React from "react";
import { Box, Typography } from "@mui/material";
import { fontWeights } from "../../../theme/typography";

// interface StatProps {
//   title: string | number;
//   subtitle: string;
//   boxRef?: MutableRefObject<HTMLDivElement | undefined>;
// }
function Stat({ title, subtitle, boxRef }) {
  return (
    <Box textAlign={"center"} minWidth="90px" ref={boxRef}>
      <Typography
        variant="h2"
        sx={{
          fontSize: 64,
          fontWeight: fontWeights.regular,
          color: "primary.contrastText",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: 18,
          fontWeight: fontWeights.medium,
          color: "primary.contrastText",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Stat;
