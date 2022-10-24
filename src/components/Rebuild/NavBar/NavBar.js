import NavTab from "./NavTabs";
import NavLogo from "./NavLogo";
import NavTabMenu from "./NavMenu";
import NavDrawer from "./NavDrawer";
import SocialLinks from "../SocialLinks";
import palette from "../../../theme/palette";
import onScroll from "../../../hooks/onScroll";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useCallback, useState } from "react";
import { navLinks } from "../../../assets/data/navLinks";
import { hideSmall, hideLarge } from "../../../utilities/display";
import { createTabPropsFromNavLink } from "../../../utilities/navLink";
import { AppBar, Box, IconButton, Tabs, Toolbar, styled } from "@mui/material";

const TRANSPARENT_ELEVATION = 0;
const TRANSITION_HEIGHT = 70;
const DEFAULT_ELEVATION = 1;
const BACKGROUND_GRADIENT =
  "linear-gradient(0deg, #163E7B 0%, #1A3873 34%, #252960 75.99%, #2A2153 99.99%)";

const AppBarOpacity = {
  SCROLLED: BACKGROUND_GRADIENT,
  TOP: "",
};

const StyledAppBar = styled(AppBar)`
  width: 100vw;
  height: 6rem;
  margin: 0;
  background-color: transparent;
  transition: background 1s ease-in-out;
`;

function NavBar({ pathname }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [navElevation, setNavElevation] = useState(TRANSPARENT_ELEVATION);
  const [navColor, setNavColor] = useState(AppBarOpacity.TOP);

  const toggleDrawer = useCallback(
    (state) => () => setShowDrawer(state),
    [setShowDrawer]
  );

  onScroll(
    useCallback(() => {
      if (window.scrollY <= TRANSITION_HEIGHT) {
        setNavColor(AppBarOpacity.TOP);
        setNavElevation(TRANSPARENT_ELEVATION);
      } else {
        setNavColor(AppBarOpacity.SCROLLED);
        setNavElevation(DEFAULT_ELEVATION);
      }
    }, [setNavColor])
  );

  return (
    <>
      <StyledAppBar
        elevation={navElevation}
        sx={{ background: navColor }}
        position="sticky"
      >
        <Toolbar sx={{ flexGrow: 1, justifyContent: "space-between" }}>
          {/* Mobile between xs and medium */}
          <IconButton
            size="large"
            aria-label="menu"
            sx={{ ...hideLarge, color: palette.text.primary }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLogo />
          <Box
            component="div"
            sx={{
              flexDirection: "row",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tabs
              value={pathname}
              aria-label="Navigation Tabs"
              textColor={"secondary"}
              indicatorColor={"secondary"}
              sx={hideSmall}
            >
              {navLinks.map((l, i) =>
                l.menuItems ? (
                  <NavTabMenu key={i} tabItem={l} />
                ) : (
                  <NavTab key={i} {...createTabPropsFromNavLink(l, i)} />
                )
              )}
            </Tabs>
            <SocialLinks />
          </Box>
        </Toolbar>
      </StyledAppBar>
      <NavDrawer
        drawerProps={{
          anchor: "left",
          variant: "temporary",
          PaperProps: {
            sx: {
              width: { xs: "100%", sm: "65%" },
              background: BACKGROUND_GRADIENT,
            },
          },
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
        >
          <SocialLinks />
        </Box>
      </NavDrawer>
    </>
  );
}

export default NavBar;
