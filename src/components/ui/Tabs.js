import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FileUploader from "./FileUploader";

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
                <Box p={3}>
                    <Typography>{children}</Typography>
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
        width: '100%'
    },
    appBar: {
        backgroundImage: "linear-gradient(to bottom, #9F1147 192px, #D4175D 100%)",
    },
    tabPanel: {
        height: "100%"
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
                Item One
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={4}>
                Item Three
            </TabPanel>
        </div>
    );
}