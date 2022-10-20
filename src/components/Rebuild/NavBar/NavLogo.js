import React from "react";
import { Link } from "gatsby";
import { Box } from "@mui/material";
import NavBarLogo from "../../../assets/svg/navbar-logo.svg";

function NavLogo() {
  return (
    <Link to="/">
      <Box sx={{ width: "9.025rem", height: "4rem" }}>
        <NavBarLogo width="inherit" height="inherit" />
      </Box>
    </Link>
  );
}

export default NavLogo;
