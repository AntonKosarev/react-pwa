import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PdfManager from "../pdf/PdfManager";
import TabPanel from "./TabPanel";
import {tabsTheme} from "./tabsTheme";

const useStyles         = tabsTheme;
const documentByDefault = 'example.pdf';

function a11yProps(index) {
  return {
    id             : `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes           = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="DEFAULT"   {...a11yProps(0)} />
          <Tab label="SIDEBAR POS"   {...a11yProps(1)} />
          <Tab label="CUSTOM TOOLBAR" {...a11yProps(2)} />
          <Tab label="DARK THEME"  {...a11yProps(3)} />
          <Tab label="READ ONLY"  {...a11yProps(4)} />
          <Tab label="CUSTOM ICONS"  {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <PdfManager containerId="defaultPdf" container="#defaultPdf" document={documentByDefault} pdfStyle="1"/>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={1}>
        <PdfManager containerId="defaultPdf2" container="#defaultPdf2" document={documentByDefault} pdfStyle="2"/>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={2}>
        <PdfManager containerId="defaultPdf3" container="#defaultPdf3" document={documentByDefault} pdfStyle="3"/>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={3}>
        <PdfManager containerId="defaultPdf4" container="#defaultPdf4" document={documentByDefault} pdfStyle="4"/>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={4}>
        <PdfManager containerId="defaultPdf5" container="#defaultPdf5" document={documentByDefault} pdfStyle="5"/>
      </TabPanel>
      <TabPanel className={classes.tabPanel} value={value} index={5}>
        <PdfManager containerId="defaultPdf6" container="#defaultPdf6" document={documentByDefault} pdfStyle="6"/>
      </TabPanel>
    </div>
  );
}
