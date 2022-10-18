import NavTab from "./NavTabs";
import NavLogo from "./NavLogo";
import NavDrawer from "./NavDrawer";
import onScroll from "../../hooks/onScroll";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useState } from "react";
import { navLinks } from "../../assets/data/navLinks";
import { hideSmall, hideLarge } from "../../utilities/display";
import { createTabPropsFromNavLink } from "../../utilities/navLink";
import { AppBar, Box, IconButton, Tabs, Toolbar, styled } from "@mui/material";

const TRANSPARENT_ELEVATION = 0;
const TRANSITION_HEIGHT = 65;
const DEFAULT_ELEVATION = 1;

const ZarfAppBarColor = {
  SCROLLED: "inherit",
  TOP: "transparent",
};

const StyledAppBar = styled(AppBar)`
  width: 100vw;
  height: 6rem;
  margin: 0;
  transition: all 0.5s ease-in;
`;

function NavBar({ pathname }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [navElevation, setNavElevation] = useState(TRANSPARENT_ELEVATION);
  const [navColor, setNavColor] = useState(ZarfAppBarColor.TOP);

  const toggleDrawer = useCallback(
    (state) => () => setShowDrawer(state),
    [setShowDrawer]
  );

  onScroll(
    useCallback(() => {
      if (window.scrollY <= TRANSITION_HEIGHT) {
        setNavColor(ZarfAppBarColor.TOP);
        setNavElevation(TRANSPARENT_ELEVATION);
      } else {
        setNavColor(ZarfAppBarColor.SCROLLED);
        setNavElevation(DEFAULT_ELEVATION);
      }
    }, [setNavColor])
  );

  return (
    <>
      <StyledAppBar elevation={navElevation} color={navColor} position="sticky">
        <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
          {/* Mobile between xs and medium */}
          <IconButton
            size="large"
            aria-label="menu"
            color="inherit"
            sx={hideLarge}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLogo />
          <Box
            component="div"
            sx={{ flexDirection: "row", width: "fit-content", display: "flex" }}
          >
            <Tabs value={pathname} aria-label="Navigation Tabs" sx={hideSmall}>
              {navLinks.map((l, i) => (
                <NavTab key={i} {...createTabPropsFromNavLink(l, i)} />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </StyledAppBar>
      <NavDrawer
        drawerProps={{
          anchor: "left",
          variant: "temporary",
          PaperProps: { sx: { width: { xs: "100%", sm: "65%" } } },
          open: showDrawer,
        }}
        closeDrawer={toggleDrawer(false)}
        navLinks={navLinks}
        pathname={pathname}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        ></Box>
      </NavDrawer>
    </>
  );
}

export default NavBar;
