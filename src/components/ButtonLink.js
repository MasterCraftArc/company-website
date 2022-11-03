import React from "react";
import Button from "@mui/material/Button";
import { Link as GatsbyLink } from "gatsby";
import { isLocalLink } from "../utilities/navLink";
import { hideLarge, hideSmall } from "../utilities/display";

function ButtonLink(props) {
  return isLocalLink(props.url) ? (
    <LocalButtonLink {...props} />
  ) : (
    <ExternalButtonLink {...props} />
  );
}

function ExternalButtonLink(props) {
  return (
    <>
      <Button
        variant={props.variant || "contained"}
        size="large"
        href={props.url}
        target={props.target}
        color={props.color}
        rel={props.rel}
        sx={{ ...hideSmall, width: "fit-content", ...props.sx }}
      >
        {props.text}
      </Button>
      <Button
        variant={props.variant || "contained"}
        size="medium"
        href={props.url}
        target={props.target}
        color={props.color}
        rel={props.rel}
        sx={{
          ...hideLarge,
          width: "fit-content",
          ...props.sx,
        }}
      >
        {props.text}
      </Button>
    </>
  );
}

function LocalButtonLink(props) {
  return (
    <>
      <Button
        component={GatsbyLink}
        variant="contained"
        size="large"
        to={props.url}
        target={props.target}
        color={props.color}
        sx={{ ...hideSmall, width: "fit-content" }}
      >
        {props.text}
      </Button>
      <Button
        component={GatsbyLink}
        variant="contained"
        size={"medium"}
        to={props.url}
        color={props.color}
        sx={{
          ...hideLarge,
          width: "fit-content",
        }}
      >
        {props.text}
      </Button>
    </>
  );
}

export default ButtonLink;
