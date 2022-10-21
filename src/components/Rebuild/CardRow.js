import React from "react";
import Card from "./Card";
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
};

function CardRow({ cards }) {
  return (
    <Box sx={cardRowSx}>
      {cards.map((c, index) => (
        <Card key={`zarfcard-${index}`} {...c} />
      ))}
    </Box>
  );
}

export default CardRow;
