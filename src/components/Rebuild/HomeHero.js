import React from "react";
import ReactRotatingText from "react-rotating-text";
import { motion } from "framer-motion";
import BackgroundSection from "./HomeBackground";
import { Box, Button, Typography } from "@mui/material";
import palette from "../../theme/palette";
import GatsbyLink from "gatsby-link";

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
      sx={{
        // NavBar Height
        marginTop: "-6rem",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        paddingX: { xs: "2rem", md: "18.563rem" },
        gap: "2rem",
      }}
    >
      <Box flexDirection={"column"} display="flex" width="100%" gap={".5rem"}>
        <Typography variant="h4" color="text.primary">
          Secure Software Delivery for
        </Typography>
        <Typography
          variant="h1"
          color="text.primary"
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
              cursor={false}
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
        variant="h5"
        color="text.secondary"
        sx={{
          borderLeft: `solid 4px ${palette.primary.main}`,
          paddingLeft: ".5rem",
          width: { xs: "auto", md: "50%" },
        }}
      >
        We accelerate the success of mission-focused organizations through
        secure continuous software delivery.
      </Typography>

      <Button
        component={GatsbyLink}
        to="/contact"
        variant="contained"
        sx={{ width: "149px" }}
      >
        Get in touch
      </Button>
      <BackgroundSection />
    </Box>
  );
};

export default HomeHero;
