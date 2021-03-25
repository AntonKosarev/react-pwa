import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import React from "react";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      style={{width: "100%", height: "100%"}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={0} height="100%">
        {children}
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index   : PropTypes.any.isRequired,
  value   : PropTypes.any.isRequired,
};

export default TabPanel;
