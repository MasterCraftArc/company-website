import React from "react";
import { Link } from "gatsby";
import { Box } from "@mui/material";
import NavBarLogo from "../../../assets/svg/navbar-logo.svg";

function NavLogo({ height, width }) {
  return (
    <Link title="Navigate Home" aria-label="Navigate Home" to="/">
      <NavBarLogo
        aria-label="Defense Unicorns Logo"
        width={width || "9.025rem"}
        height={height || "4rem"}
      />
    </Link>
  );
}

export default NavLogo;
