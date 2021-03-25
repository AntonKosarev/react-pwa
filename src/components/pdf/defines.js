const baseUrl     = `${window.location.protocol}//${window.location.host}/`;
const stylesheets = [baseUrl + "my-pspdfkit.css"];

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

export {baseUrl, stylesheets, customIconsToolbar}
