import React from "react";
import { Box, styled, Typography } from "@mui/material";
import WhereToFindUsImg from "../../assets/jpg/where-to-find-us.jpg";

const Section = styled(Box)`
  display: flex;
  width: 100%;
  height: auto;
`;
const Image = styled(Box)``;

function WhereToFindUs() {
  return (
    <Section
      component="section"
      sx={{
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "60px", md: "120px" },
        justifyContent: "center",
        alignItems: "center",
        paddingX: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
          WHERE TO FIND US
        </Typography>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            fontSize: { md: "60px" },
            maxWidth: { md: "515px" },
          }}
        >
          Our Virtual Office
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: { md: "515px" },
            typography: { xs: "body2", md: "body1" },
          }}
        >
          Our unicorns are fully remote and work from locations all across the
          United States. We spend most of our day collaborating in our virtual
          office on gather.
        </Typography>
      </Box>
      <Image
        component="img"
        src={WhereToFindUsImg}
        loading="lazy"
        sx={{ maxWidth: { md: "40%" } }}
        alt="Defense Unicorns employees around a virtual table discussing Zarf inside gather town."
      />
    </Section>
  );
}

export default WhereToFindUs;
