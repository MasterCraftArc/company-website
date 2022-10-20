import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { namedLinks } from "../../assets/data/navLinks";
import { IconButton } from "@mui/material";
import palette from "../../theme/palette";

// interface SocialLinksProps extends PathOptional {
//   slackSx?: SxProps<Theme>;
//   githubSx?: SxProps<Theme>;
// }

function SocialLinks({ linkedInSx, githubSx }) {
  return (
    <>
      <IconButton
        size="large"
        sx={{
          ...linkedInSx,
          padding: "12px",
        }}
        href={namedLinks.linkedIn.url}
        title={namedLinks.linkedIn.text}
        target={namedLinks.linkedIn.target}
        rel={namedLinks.linkedIn.rel}
      >
        <LinkedIn fontSize="large" htmlColor={palette.text.primary}></LinkedIn>
      </IconButton>
      <IconButton
        size="large"
        sx={{
          ...githubSx,
          padding: "12px",
        }}
        href={namedLinks.github.url}
        title={namedLinks.github.text}
        target={namedLinks.github.target}
        rel={namedLinks.github.rel}
      >
        <GitHub fontSize="large" htmlColor={palette.text.primary}></GitHub>
      </IconButton>
    </>
  );
}

export default SocialLinks;
