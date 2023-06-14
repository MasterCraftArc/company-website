import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, IconButton } from '@mui/material';
import DrawerTab, { DrawerTabs } from './NavDrawerTabs';
import { createTabPropsFromNavLink } from '../../../utilities/navLink';

// Extends the Drawer props so that defaults may still be used.
function NavDrawer({ children, drawerProps, closeDrawer, navLinks, pathname }) {
  // Use the closeDrawer props if no onClose method passed to drawer
  const onClose = (drawerProps && drawerProps.onClose) || closeDrawer;

  return (
    <Drawer {...drawerProps} onClose={onClose}>
      <IconButton
        color="inherit"
        sx={{
          mt: '1.563rem',
          mb: '1.063rem',
          ml: '1.813rem',
          width: '3rem',
          height: '3rem',
          justifyContent: 'center',
        }}
        onClick={closeDrawer}
      >
        <CloseIcon />
      </IconButton>
      <DrawerTabs value={pathname}>
        {navLinks.map((l, i) =>
          l.menuItems ? (
            <React.Fragment key={`menu-item-${l.text}-${i}`}>
              {l.menuItems.map((mL, mI) => (
                <DrawerTab
                  aria-selected={true}
                  key={`drawer-tab-${mL.text}-${i}-${mI}`}
                  {...createTabPropsFromNavLink(mL, mI)}
                />
              ))}
            </React.Fragment>
          ) : (
            <DrawerTab
              aria-selected={true}
              key={`drawer-tab-${l.text}-${i}`}
              {...createTabPropsFromNavLink(l, i)}
            />
          ),
        )}
      </DrawerTabs>
      {children}
    </Drawer>
  );
}

export default NavDrawer;
