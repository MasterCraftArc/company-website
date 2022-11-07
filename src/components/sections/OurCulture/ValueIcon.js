import React from "react";
import { Box, Typography } from "@mui/material";
import { fonts } from "../../../theme/typography";

function ValueIcon(value) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        alignItems: "center",
        width: "240px",
        height: "240px",
      }}
    >
      <Box
        sx={{
          width: "136px",
          height: "136px",
          backgroundColor: "#244A8F",
          borderRadius: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={value.icon}
          sx={{ height: "84px", width: "84px" }}
          alt={value.alt}
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontFamily: fonts.teko,
          textAlign: "center",
          fontSize: "34px",
        }}
      >
        {value.title}
      </Typography>
    </Box>
  );
}

export default ValueIcon;
