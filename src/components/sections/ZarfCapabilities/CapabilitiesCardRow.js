import React from "react";
import CapabilitiesCard from "./CapabilitiesCard";
import { Box } from "@mui/material";

// export interface ZarfCardRowProps {
//   cards: ZarfCardProps[];
// }

const cardRowSx = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: "50px", sm: "25px", md: "50px" },
  width: { xs: "100%", lg: "80%", xl: "65%" },
  mx: "auto",
  mt: "48px",
};

function CapabilitiesCardRow({ cards }) {
  return (
    <Box sx={cardRowSx}>
      {cards.map((c, index) => (
        <CapabilitiesCard key={`zarfcard-${index}`} {...c} />
      ))}
    </Box>
  );
}

export default CapabilitiesCardRow;
