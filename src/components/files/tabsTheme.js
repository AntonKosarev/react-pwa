import {makeStyles} from "@material-ui/core";

const tabsTheme = makeStyles((theme) => ({
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

export {tabsTheme}
