import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Home from "./components/ui/Home";
import Files from "./components/ui/Files";

const pathIds = {
    files: "files",
    home: "home",
};

const pathRouting = {
    files: "/files",
    home: "/home",

};

const pageRoutes = {
    [pathIds.home]: {
        path: pathRouting.home,
        sidebarName: "HomePage",
        icon: HomeOutlinedIcon,
        component: Home
    },
    [pathIds.files]: {
        path: pathRouting.files,
        sidebarName: "Files",
        icon: InsertDriveFileOutlinedIcon,
        component: Files
    },
    [pathIds.error404]: {
        path: pathRouting.home,
        sidebarName: "Home",
        icon: HomeOutlinedIcon,
        component: Home
    }
};

export { pageRoutes, pathIds, pathRouting };
