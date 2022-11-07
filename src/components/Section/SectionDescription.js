import React from "react";
import { Typography } from "@mui/material";

function SectionDescription({ sx, children }) {
  return (
    <Typography
      variant="h2"
      color="secondary"
      sx={{ fontSize: { md: "60px" }, textAlign: "center", ...sx }}
    >
      {children}
    </Typography>
  );
}

export default SectionDescription;
