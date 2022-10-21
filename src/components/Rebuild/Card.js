import React from "react";
import { Box, Card as MuiCard, Typography, styled } from "@mui/material";
import CardBackground from "../../assets/png/capabilities-card-bg.png";
import { fonts } from "../../theme/typography";
// type ZarfCardVariant = "nocard" | "card";
// type BodyColor = "text.primary" | "text.secondary";

// export interface ZarfCardProps {
//   topImage: string;
//   headerFirstLine: string;
//   headerSecondLine: string;
//   body: string;
//   variant?: ZarfCardVariant;
//   bodyColor?: BodyColor;
// }

const StyledCard = styled(MuiCard)`
  border-radius: 24px;
  width: 286px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 1rem 2rem;
`;

function getVariantStyle(variant) {
  let sxProps;
  switch (variant) {
    case "nocard":
      sxProps = {
        background: "transparent",
      };
      break;
    default:
      sxProps = {
        backgroundImage: `url(${CardBackground})`,
      };
  }
  return sxProps;
}

function Card(props) {
  const variantStyle = getVariantStyle(props.variant);
  return (
    <StyledCard sx={variantStyle} elevation={0}>
      <Box
        component="img"
        src={props.topImage}
        width={"84px"}
        height={"84px"}
        sx={{ mx: "auto" }}
      />
      <Typography
        variant="h4"
        fontFamily={fonts.poppins}
        textAlign={"center"}
        marginTop={"14px"}
      >
        {props.headerFirstLine}
      </Typography>
      <Typography variant="h4" fontFamily={fonts.poppins} textAlign={"center"}>
        {props.headerSecondLine}
      </Typography>
      <Typography
        variant="body2"
        marginTop={"12px"}
        color={props.bodyColor || "text.primary"}
      >
        {props.body}
      </Typography>
    </StyledCard>
  );
}

export default Card;
