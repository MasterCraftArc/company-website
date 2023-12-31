import React from 'react';
import Tab from '@mui/material/Tab';
import { Link as GatsbyLink } from 'gatsby';
import { isLocalLink } from '../../../utilities/navLink';

// MUI Tab Components are not matching the api and are not allowing component in tab to be passed.
// The unstyled component does not have this issue.
// So we are converting to the UnstyledTab return type in order to bypass this issue.
// https://github.com/mui/material-ui/issues/16846
// https://mui.com/material-ui/guides/routing/#tabs
function InternalNavTab(props) {
  return (
    <Tab
      aria-label={props.label}
      component={GatsbyLink}
      {...props}
      to={props.href}
      partiallyActive={true}
      tabIndex={0}
    />
  );
}

function ExternalNavTab(props) {
  return <Tab aria-label={props.label} {...props} tabIndex={0} />;
}

function NavTab(props) {
  return isLocalLink(props.href) ? <InternalNavTab {...props} /> : <ExternalNavTab {...props} />;
}
export default NavTab;
