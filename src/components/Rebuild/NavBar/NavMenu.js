import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { createTabPropsFromNavLink } from "../../../utilities/navLink";
import { Tab } from "@mui/material";
import NavTab from "./NavTabs";
import palette from "../../../theme/palette";

export default function NavTabMenu({ tabItem }) {
  return (
    <PopupState variant="popover" popupId={`${tabItem.text}-popup-menu`}>
      {(popupState) => (
        <React.Fragment>
          <Tab
            {...bindTrigger(popupState)}
            onMouseOver={popupState.open}
            label={tabItem.text}
            sx={{ color: palette.text.primary }}
          />
          <Menu {...bindMenu(popupState)} sx={{ textAlign: "left" }}>
            {tabItem.menuItems.map((l, i) => (
              <MenuItem
                key={`${tabItem.text}-menu-item-${i}`}
                onClick={popupState.close}
                {...createTabPropsFromNavLink(l, i)}
                sx={{ typography: "subtitle1" }}
              >
                {l.text}
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
