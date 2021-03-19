import DraftsIcon from "@material-ui/icons/Drafts";
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import Home from "./components/ui/Home";
import Files from "./components/ui/Files";
import DefaultPage from "./components/ui/DefaultPage";
import Register from "./components/ui/Register";

const pathIds = {
    files: "files",
    home: "home",
    error404: "error-404",
    register: "register"

};

const pathRouting = {
    files: "/files",
    home: "/home",
    defaultPage: "/defaultPage",
    register: "/register"

};

const pageRoutes = {
    [pathIds.home]: {
        path: pathRouting.home,
        sidebarName: "Home",
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
        path: pathRouting.defaultPage,
        sidebarName: "defaultPage",
        icon: DraftsIcon,
        noRender: true,
        component: DefaultPage
    },
    [pathIds.register]: {
        path: pathRouting.register,
        sidebarName: "Register",
        icon: DraftsIcon,
        noRender: true,
        component: Register
    }
};

export { pageRoutes, pathIds, pathRouting };
