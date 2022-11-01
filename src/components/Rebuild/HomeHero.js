import React from "react";
import GatsbyLink from "gatsby-link";
import { motion } from "framer-motion";
import palette from "../../theme/palette";
import ReactRotatingText from "react-rotating-text";
import { fontWeights } from "../../theme/typography";
import { Box, Button, Typography } from "@mui/material";
import HomeHeroBg from "../../assets/jpg/home-hero-bg.jpg";

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

const DEFAULT_TAG_LINE_PAUSE = 1000;
const LAST_TAG_LINE_PAUSE = 3000;
const LAST_TAG_LINE_ITEM = tagLineItems.length - 1;
// Change pause on second to last item. So last item lingers
const INDEX_TO_CHANGE_PAUSE = LAST_TAG_LINE_ITEM - 1;

const HomeHero = () => {
  let [heroCount, setHeroCount] = React.useState(0);
  const [pause, setPause] = React.useState(DEFAULT_TAG_LINE_PAUSE);

  const onHeaderTypingEnd = () => {
    if (heroCount === LAST_TAG_LINE_ITEM) {
      setHeroCount(0);
      setPause(DEFAULT_TAG_LINE_PAUSE);
      return;
    }
    if (heroCount === INDEX_TO_CHANGE_PAUSE) {
      setPause(LAST_TAG_LINE_PAUSE);
    }
    setHeroCount(++heroCount);
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
        backgroundPosition: { xs: "70%", md: "bottom" },
        gap: "2rem",
        width: "100vw",
        minHeight: "700px",
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
            fontSize: { xs: 32, md: 40 },
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
              delay: 0.25,
            }}
            className="block sm:inline-block"
          >
            <ReactRotatingText
              items={tagLineItems}
              pause={pause}
              typingInterval={50}
              deletingInterval={50}
              // Throws a console warning but is clearly in the documentation.
              onTypingEnd={() => onHeaderTypingEnd}
            />
          </motion.span>
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          typography: { xs: "body2", md: "h6" },
          paddingLeft: ".5rem",
          borderLeft: `solid 4px ${palette.primary.main}`,
        }}
      >
        We make software delivery easy for the most secure systems in the world.
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
