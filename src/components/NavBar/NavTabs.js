import React from "react";
import Tab from "@mui/material/Tab";
import { Link as GatsbyLink } from "gatsby";
import { isLocalLink } from "../../utilities/navLink";

// MUI Tab Components are not matching the api and are not allowing component in tab to be passed.
// The unstyled component does not have this issue.
// So we are converting to the UnstyledTab return type in order to bypass this issue.
// https://github.com/mui/material-ui/issues/16846
// https://mui.com/material-ui/guides/routing/#tabs
function InternalNavTab(props) {
  return (
    <Tab
      component={GatsbyLink}
      {...props}
      to={props.href}
      partiallyActive={true}
    />
  );
}

function ExternalNavTab(props) {
  return <Tab {...props} />;
}

function NavTab(props) {
  return isLocalLink(props.href) ? (
    <InternalNavTab {...props} />
  ) : (
    <ExternalNavTab {...props} />
  );
}
export default NavTab;
