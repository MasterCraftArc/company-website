import React from "react";
import { Box, Typography } from "@mui/material";

// interface StatProps {
//   title: string | number;
//   subtitle: string;
//   boxRef?: MutableRefObject<HTMLDivElement | undefined>;
// }
function Stat({ title, subtitle, boxRef }) {
  return (
    <Box textAlign={"center"} minWidth="90px" ref={boxRef}>
      <Typography variant="h2" fontSize="64px">
        {title}
      </Typography>
      <Typography variant="subtitle2" fontSize="18px">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Stat;
