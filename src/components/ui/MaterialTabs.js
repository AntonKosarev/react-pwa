import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PsPdf from "../pdf/PsPdf";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} style={{height:"100%"}}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{height: "100%"}}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} height="100%" style={{width: "100%", height: "100%"}}>
        <div style={{width: "100%", height: "100%", position: "static"}}>
            <PsPdf containerId="defaultPdfa" container="#defaultPdfa" document="example.pdf"/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} height="100%" style={{width: "100%", height: "100%"}}>
        <div style={{width: "100%", height: "100%", position: "static"}}>
            <PsPdf containerId="defaultPdfb" container="#defaultPdfb" document="example2.pdf"/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} height="100%" style={{width: "100%", height: "100%"}}>
        <div style={{width: "100%", height: "100%", position: "static"}}>
            <PsPdf containerId="defaultPdfc" container="#defaultPdfc" document="example.pdf"/>
        </div>
      </TabPanel>
      <Box m={0} className="pdfWrapper" display="none">
        <input type="file" id="openFile" />
      </Box>
    </div>
  );
}
