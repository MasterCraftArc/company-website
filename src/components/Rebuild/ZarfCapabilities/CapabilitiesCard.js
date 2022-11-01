import React from "react";
import { Box, Card as MuiCard, Typography, styled } from "@mui/material";
import CardBackground from "../../../assets/png/capabilities-card-bg.png";
import { fonts } from "../../../theme/typography";
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
  padding: 1.5rem;
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

function CapabilitiesCard(props) {
  const variantStyle = getVariantStyle(props.variant);
  return (
    <StyledCard sx={variantStyle} elevation={0}>
      <Box
        component="img"
        src={props.topImage}
        loading="lazy"
        width={"72px"}
        height={"70px"}
        sx={{ mx: "auto" }}
      />
      <Typography
        variant="h4"
        fontFamily={fonts.poppins}
        textAlign={"center"}
        marginTop={"34px"}
        color="primary.contrastText"
      >
        {props.headerFirstLine}
      </Typography>
      <Typography
        variant="h4"
        fontFamily={fonts.poppins}
        textAlign={"center"}
        color="primary.contrastText"
      >
        {props.headerSecondLine}
      </Typography>
      <Typography
        variant="body2"
        marginTop={"12px"}
        color={props.bodyColor || "primary.contrastText"}
        fontSize="15px"
      >
        {props.body}
      </Typography>
    </StyledCard>
  );
}

export default CapabilitiesCard;
