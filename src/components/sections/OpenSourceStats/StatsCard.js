import Stat from "./Stat";
import ZarfBox from "./ZarfBox";
import ButtonLink from "../../ButtonLink";
import useResize from "../../../hooks/onResize";
import { Box, styled, Typography } from "@mui/material";
import { namedLinks } from "../../../assets/data/navLinks";
import { getGithubStats } from "../../../utilities/githubApi";
import StatsCardPng from "../../../assets/png/stats-card.png";
import { hideLarge, hideSmall } from "../../../utilities/display";
import StatsCardSmPng from "../../../assets/png/stats-card-sm.png";
import { fonts, fontWeights } from "../../../theme/typography";
import React, { useCallback, useEffect, useRef, useState } from "react";

const StatsCardWrapper = styled(Box)`
  display: flex;
  max-width: 1236px;
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;

const CardBackground = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 24px;
`;

const MIN_CARD_HEIGHT = 480;
const CARD_HEIGHT_MULTIPLIER = 0.389;

function calculateCardHeight(width) {
  const calculated = width * CARD_HEIGHT_MULTIPLIER;
  return calculated > MIN_CARD_HEIGHT ? calculated : MIN_CARD_HEIGHT;
}

function OpenSourceStats() {
  const [githubStats, setGithubStats] = useState();
  const [cardHeight, setCardHeight] = useState();
  const wrapperRef = useRef();
  const prRef = useRef();

  const retrieveStats = useCallback(async () => {
    setGithubStats(await getGithubStats());
  }, [setGithubStats]);

  useResize(() => {
    if (wrapperRef.current) {
      const newHeight = calculateCardHeight(wrapperRef.current.clientWidth);
      setCardHeight(newHeight);
    }
  });

  useEffect(() => {
    retrieveStats();
  }, [retrieveStats]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
        overflowX: "clip",
        overflowY: "initial",
        paddingX: "32px",
      }}
    >
      <StatsCardWrapper
        ref={wrapperRef}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "fit-content", md: "100%" },
          gap: { xs: "16px", md: "80px" },
          height: { md: cardHeight },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="490px"
          sx={{
            mt: "90px",
            mb: { xs: "32px", md: "90px" },
            px: { xs: "24px", md: "0px" },
          }}
        >
          <Typography
            component="h6"
            color="primary.contrastText"
            sx={{
              typography: { xs: "h5", md: "h6" },
              textTransform: "uppercase",
              mb: "32px",
            }}
          >
            OPEN SOURCE PRODUCT
          </Typography>
          <Typography
            component="h2"
            sx={{
              typography: "h2",
              fontFamily: fonts.teko,
              mb: "16px",
              fontSize: { md: "64px" },
              maxWidth: { md: "351px" },
              color: "text.primary",
              fontWeight: fontWeights.regular,
            }}
          >
            Deliver to Airgap with Zarf
          </Typography>
          <Typography variant="body1" color="text.primary">
            Zarf makes modern software capabilities a reality in disconnected
            environments. We aim to deliver secure software to the worlds most
            important environments.{" "}
          </Typography>
          <Box sx={{ ...hideSmall, mt: "32px" }}>
            <ButtonLink
              {...namedLinks.zarf}
              text="Learn About Zarf"
              size="large"
            ></ButtonLink>
          </Box>
        </Box>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "16px", md: "80px" },
          }}
          justifyContent="space-evenly"
        >
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              gap: { xs: "16px", md: "40px" },
            }}
          >
            <Stat title={githubStats?.stars || ""} subtitle="Stars" />
            <Stat
              title={githubStats?.contributors || ""}
              subtitle="Contributors"
            />
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              position: "relative",
            }}
            ref={prRef}
          >
            <Stat
              title={githubStats?.pullRequests || ""}
              subtitle="Pull Requests"
            />
          </Box>
          <Box sx={{ ...hideLarge, my: "48px" }}>
            <ButtonLink
              {...namedLinks.zarf}
              text="Learn About Zarf"
              size="large"
            ></ButtonLink>
          </Box>
        </Box>
        <CardBackground
          component="img"
          loading="lazy"
          alt="An underwater landscape that represents an Airgap environment."
          src={StatsCardPng}
          sx={hideSmall}
        />
        <CardBackground
          component="img"
          loading="lazy"
          alt="Stats Card Backdrop"
          src={StatsCardSmPng}
          sx={hideLarge}
        />
      </StatsCardWrapper>
      <ZarfBox leftAlignRef={prRef} />
    </Box>
  );
}

export default OpenSourceStats;
