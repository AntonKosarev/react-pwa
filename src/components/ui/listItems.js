import React from "react";
var ReactDOM = require('react-dom');
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        // width: "100%",
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper
    }
}));

export default function mainListItems({ routes }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
             <List component="nav" aria-label="main mailbox folders">
                {routes.map(({ path, noRender, sidebarName, ...prop }, index) => {
                    if (noRender) return null;
                    return (
                        <NavLink to={path} key={`route-${index}}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <prop.icon />
                                </ListItemIcon>
                                <ListItemText primary={sidebarName} />
                            </ListItem>
                        </NavLink>
                    );
                })}
             </List>
        </div>
    );
}