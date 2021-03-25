import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MainListItems from './listItems';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {pageRoutes} from "./routes";
import './Index.css';
import {theme} from "./theme";

const useStyles = theme;

export default function IndexPage() {
  const routeArray        = Object.values(pageRoutes);
  const classes           = useStyles();
  const [open, setOpen]   = React.useState(true);

  const handleDrawerOpen  = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} id="theme-v1">
      <CssBaseline/>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            React PWA
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          <List>
            <div>
              <MainListItems routes={routeArray}/>
            </div>
          </List>
          <Divider/>
          <div className="version">Version 2021 0.0.1</div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container maxWidth="xl" width="100%" height="100%" position="relative"
                     className={classes.container}>
            <Grid container spacing={3} alignItems="stretch"
                  style={{height: "100%", margin: 0, width: "100%"}}>
              <Grid item xs={12} md={12} lg={12} className={classes.grid}>
                <Switch>
                  {routeArray.map((prop, key) => {
                    return (
                      <Route
                        path={prop.path}
                        component={prop.component}
                        exact={prop.exact || false}
                        key={`route-${key}`}
                      />
                    );
                  })}
                  <Route exact path="/">
                    <Redirect to="/home"/>
                  </Route>
                </Switch>
              </Grid>
            </Grid>
          </Container>
        </main>
      </Router>
    </div>
  );
}
