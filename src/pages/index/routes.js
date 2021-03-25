import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Home from "./../home/Home";
import Files from "./../files/Files";
import ListAltIcon from '@material-ui/icons/ListAlt';

const pathIds = {
  files: "files",
  home : "home",
};

const pathRouting = {
  files: "/files",
  home : "/home",
};

const pageRoutes = {
  [pathIds.home] : {
    path       : pathRouting.home,
    sidebarName: "HomePage",
    icon       : HomeOutlinedIcon,
    component  : Home
  },
  [pathIds.files]: {
    path       : pathRouting.files,
    sidebarName: "Files",
    icon       : ListAltIcon,
    component  : Files
  }
};

export {pageRoutes};
