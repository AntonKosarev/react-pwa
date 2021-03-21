import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgb(159,17,71)'
    },
    MuiListItemIcon: {
        color: 'rgba(255, 255, 255, 0.81)'
    },
    MuiListItemText: {
        color: 'rgba(255, 255, 255, 0.81)',
        textDecoration: "none"
    },
}));

export default function mainListItems({routes}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders" className="theme-v1">
                {routes.map(({path, noRender, sidebarName, ...prop}, index) => {
                    if (noRender) return null;
                    return (
                        <NavLink to={path} key={`route-${index}}`} className="Mui-list-item">
                            <ListItem button className="theme-v1">
                                <ListItemIcon className={classes.MuiListItemIcon} >
                                    <prop.icon/>
                                </ListItemIcon>
                                <ListItemText className={classes.MuiListItemText} primary={sidebarName}/>
                            </ListItem>
                        </NavLink>
                    );
                })}
            </List>
        </div>
    );
}
