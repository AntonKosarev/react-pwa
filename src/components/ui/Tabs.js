import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FileUploader from "./FileUploader";
import PsPdf from "../pdf/PsPdf";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{width: "100%", height: "100%"}}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={0} height="100%">
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
        justifyContent: 'space-between',
        verticalAlign: 'center',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%'
    },
    appBar: {
        backgroundColor: "#ffffff",
    },
    tabPanel: {
        height: '100%'
    },
    fileUploader: {
        alignSelf: 'end',
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One"   {...a11yProps(0)} />
                    <Tab label="Item Two"   {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four"  {...a11yProps(3)} />
                    <Tab label="Item Five"  {...a11yProps(4)} />
                    <FileUploader className={classes.fileUploader}/>
                </Tabs>
            </AppBar>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                <div style={{width: "100%", height: "100%", position: "static"}}>
                    <PsPdf containerId="defaultPdf" container="#defaultPdf" document="example.pdf"/>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                <div style={{width: "100%", height: "100%", position: "static"}}>
                    <PsPdf containerId="defaultPdf2" container="#defaultPdf2" document="example.pdf"/>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                <div style={{width: "100%", height: "100%", position: "static"}}>
                    <PsPdf containerId="defaultPdf3" container="#defaultPdf3" document="example.pdf"/>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                <div style={{width: "100%", height: "100%", position: "static"}}>
                    <PsPdf containerId="defaultPdf4" container="#defaultPdf4" document="example.pdf"/>
                </div>
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                <div style={{width: "100%", height: "100%", position: "static"}}>
                    <PsPdf containerId="defaultPdf5" container="#defaultPdf5" document="example.pdf"/>
                </div>
            </TabPanel>
        </div>
    );
}
