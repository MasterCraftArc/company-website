import React from "react";
import ButtonLink from "./ButtonLink";
import { Box, styled, Card, Typography } from "@mui/material";
import { LearnWithUsCards } from "../../assets/data/cardData";
import { Section, SectionTitle, SectionDescription } from "./Section";
import CardBackground from "../../assets/png/resource-card-bg.png";

const ResourceRow = styled(Box)``;

const resourceRowSx = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: { xs: "50px", sm: "25px", md: "50px" },
  width: { xs: "100%", lg: "80%", xl: "65%" },
  mx: "auto",
  mt: "48px",
};

const StyledCard = styled(Card)`
  width: 286px;
  height: 284px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  background-image: url(${CardBackground});
  text-align: center;
  align-items: center;
  padding: 24px;
`;

function LearnWithUs() {
  return (
    <Section>
      <SectionTitle>Learn With Us</SectionTitle>
      <SectionDescription>Free DevSecOps Resources</SectionDescription>
      <ResourceRow sx={resourceRowSx}>
        {LearnWithUsCards.map((card) => (
          <StyledCard sx={{ color: "primary.contrastText" }}>
            <Typography variant="h4">{card.title}</Typography>
            <Typography variant="h4">{card.titleLineTwo}</Typography>
            <Typography variant="body2" sx={{ marginTop: "12px" }}>
              {card.body}
            </Typography>
            <ButtonLink
              variant="text"
              color="secondary"
              {...card.link}
              sx={{ mt: "auto" }}
            />
          </StyledCard>
        ))}
      </ResourceRow>
    </Section>
  );
}

export default LearnWithUs;
