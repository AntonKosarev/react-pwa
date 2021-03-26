import {baseUrl} from "../../constants/defines";

const stylesheets       = [baseUrl + "my-pspdfkit.css"];
const altStylesheets    = [baseUrl + "my-pspdfkit2.css"];
const documentByDefault = "example.pdf";

const customIconsToolbar = [
  {
    type: "print",
    icon: "icons/printer.svg"
  },
  {
    type: "zoom-out",
    icon: "icons/zoom-out.svg"
  },
  {
    type: "pager",
  },
  {
    type: "zoom-mode",
    icon: "icons/fit-to-screen.svg"
  },
  {
    type: "ink",
    icon: "icons/marker.svg"
  },
  {
    type: "sidebar-bookmarks",
    icon: "icons/bookmark.svg"
  }
];

export {stylesheets, altStylesheets, customIconsToolbar, documentByDefault}
