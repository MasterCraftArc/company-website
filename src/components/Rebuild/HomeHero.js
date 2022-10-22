import React from "react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import BackgroundSection from "./HomeBackground";
import { Box, Button, Typography } from "@mui/material";
import palette from "../../theme/palette";
import { fontWeights } from "../../theme/typography";
import GatsbyLink from "gatsby-link";
import HomeHeroBg from "../../assets/png/home-hero-bg.png";

const sentenceAnim = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const tagLineItems = [
  "Aerospace",
  "Defense",
  "Healthcare",
  "Finance",
  "Your Mission.",
];

const DEFAULT_PAUSE = 1000;
const YOU_PAUSE = 3000;

const HomeHero = () => {
  let [heroCount, setHeroCount] = React.useState(0);
  const [pause, setPause] = React.useState(DEFAULT_PAUSE);

  const showYou = () => {
    if (heroCount === 0) {
      setPause(DEFAULT_PAUSE);
    }
    if (heroCount === 4) {
      setHeroCount(0);
      setPause(YOU_PAUSE);
    } else {
      setHeroCount(heroCount + 1);
    }
  };

  return (
    <Box
      component="section"
      backgroundColor="background.paper"
      sx={{
        // NavBar Height
        backgroundImage: `url(${HomeHeroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "70%", md: "center center" },
        gap: "2rem",
        width: "100vw",
        height: "100vh",
        display: "flex",
        marginTop: "-6rem",
        flexDirection: "column",
        justifyContent: "center",
        paddingX: { xs: "2rem", md: "18.563rem" },
      }}
    >
      <Box flexDirection={"column"} display="flex" width="100%" gap={".5rem"}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: 20, md: 32 },
            fontWeight: fontWeights.regular,
          }}
          color="primary.contrastText"
        >
          Secure Software Delivery for
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 72, md: 172 },
            fontWeight: fontWeights.regular,
          }}
          color="primary.contrastText"
          component={motion.h1}
          variants={sentenceAnim}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
            }}
            className="block sm:inline-block"
          >
            <ReactRotatingText
              items={tagLineItems}
              pause={pause}
              emptyPause={700}
              typingInterval={50}
              deletingInterval={50}
              onTypingEnd={() => showYou()}
            />
          </motion.span>
        </Typography>
      </Box>
      <Typography
        color="text.primary"
        variant="h6"
        sx={{
          typography: { xs: "body2", md: "h6" },
          paddingLeft: ".5rem",
          width: { xs: "auto", md: "70%" },
          borderLeft: `solid 4px ${palette.primary.main}`,
        }}
      >
        We are a mission-focused, veteran-owned company that makes software
        delivery easy for the most secure systems in the world.
      </Typography>
      <Button
        to="/contact"
        size="large"
        variant="contained"
        component={GatsbyLink}
        sx={{ width: 149, height: 42 }}
      >
        Get in touch
      </Button>
      {/* <BackgroundSection /> */}
    </Box>
  );
};

export default HomeHero;
