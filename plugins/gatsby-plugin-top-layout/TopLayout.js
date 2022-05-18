import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import * as React from "react";

export default function TopLayout(props) {
  return (
    <React.Fragment>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {props.children}
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
