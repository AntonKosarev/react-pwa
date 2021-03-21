import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box, Paper, Grid, Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

// I was stuck at deleting Tab, however, I found this thread from Rahul-RB on git
// https://gist.github.com/Rahul-RB/273dbb24faf411fa6cc37488e1af2415
// Since I am building an app with react hook only,
// I tried converting it to React Hooks and its works like this

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "60px",
        width: "100%",
        backgroundColor: "#fff"
    },
    appBar: {
        color: "#fff",
        backgroundColor: "#9c1347",
        "& .myTab": {
            backgroundColor: "yellow",
            color: "white"
        }
    }
}));

let maxTabIndex = 0;
let currentTablIndex = 0;

const CustomTabsHook = () => {
    const classes = useStyles();

    const [tabList, setTabList] = useState([
        {
            key: 0,
            id: 0
        }
    ]);

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, value) => {
        currentTablIndex = value;
        setTabValue(value);
    };

    const addTab = () => {

        let id = tabList[tabList.length - 1].id + 1;
        maxTabIndex = id;
        setTabList([...tabList, { key: id, id: id }]);
        handleTabsContent();
    };

    const deleteTab = e => {
        e.stopPropagation();

        if (tabList.length === 1) {
            return;
        }
        let tabId = parseInt(e.target.id);
        let tabIDIndex = 0;

        let tabs = tabList.filter((value, index) => {
            if (value.id === tabId) {
                tabIDIndex = index;
            }
            return value.id !== tabId;
        });

        let curValue = parseInt(tabValue);
        if (curValue === tabId) {
            if (tabIDIndex === 0) {
                curValue = tabList[tabIDIndex + 1].id;
            } else {
                curValue = tabList[tabIDIndex - 1].id;
            }
        }
        setTabValue(curValue);
        setTabList(tabs);
    };

    // Handle Add Tab Content
    const [tabsContent, setTabsContent] = React.useState([
        <TabPanel tabId={tabValue}>Default Panel - {Math.random()}</TabPanel>
    ]);
    const handleTabsContent = () => {
        setTabsContent([
            ...tabsContent,
            <TabPanel tabId={tabValue}>New Tab Panel - {Math.random()}</TabPanel>
        ]);
    };

    return (
      <Paper className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            {console.log(tabValue, "hohoh")}
            <Grid container alignItems="center" justify="center">
                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {tabList.map(tab => (
                            <Tab
                                key={tab.key.toString()}
                                value={tab.id}
                                label={"Node " + tab.id}
                                icon={<Close id={tab.id} onClick={deleteTab} />}
                                className="mytab"
                            />
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
                    <Button variant="outlined" onClick={addTab}>
                        <Add />
                    </Button>
                </Grid>
            </Grid>
        </AppBar>
          <Box padding={2}>{tabsContent.map(child => child)}</Box>
      </Paper>
    );
};

function TabPanel(props) {
    const { children, tabId } = props;
    return (
      <Box
        value={maxTabIndex}
        index={maxTabIndex}
        hidden={tabId !== currentTablIndex}
        key={maxTabIndex}
      >
          {children}
      </Box>
    );
}


export default CustomTabsHook;
