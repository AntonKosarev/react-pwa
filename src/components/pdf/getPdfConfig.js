import PSPDFKit from "pspdfkit";
import requestFullscreen from "./../../utils/requestFullscreen";
import {baseUrl, stylesheets, customIconsToolbar} from "./defines";
import LICENSE_KEY from "./license";

function getPdfConfig(props, scope) {
  const config = {
    document    : props.document,
    toolbarItems: PSPDFKit.defaultToolbarItems,
    theme       : PSPDFKit.Theme.LIGHT,
    styleSheets : stylesheets,
    baseUrl     : baseUrl,
    container   : props.container,
    licenseKey  : LICENSE_KEY
  };

  config.toolbarItems.push({
    type   : "custom",
    id     : "my-custom-button",
    title  : "Open File",
    onPress: function () {
      scope.onPress();
    }
  });

  switch (props.pdfStyle) {
    case "1":
      config.toolbarItems.push({
        type   : "custom",
        id     : "my-fullscreen-button",
        title  : "Full Screen",
        onPress: function () {
          requestFullscreen(document.getElementById(props.containerId));
        }
      });
      break;
    case "2":
      config.styleSheets = [];
      break;
    case "3":
      // PSPDFKit exposes the default list of items as PSPDFKit.defaultToolbarItems
      // This is an Array that can be filtered or customized as you please.
      config.toolbarItems = PSPDFKit.defaultToolbarItems.filter(item => {
        return /\b(sidebar-bookmarks|sidebar-thumbnails|zoom-in|zoom-out)\b/.test(
          item.type
        );
      });
      config.toolbarItems.push({
        type: "spacer"
      });
      config.toolbarItems.push({
        type: "search"
      });
      break;
    case "4":
      config.theme       = PSPDFKit.Theme.DARK;
      config.styleSheets = [];
      break;
    case "5":
      break;
    case "6":
      // PSPDFKit exposes the default list of items as PSPDFKit.defaultToolbarItems
      // This is an Array that can be filtered or customized as you please.
      config.toolbarItems = customIconsToolbar;
      config.styleSheets  = [baseUrl + "my-pspdfkit2.css"];
      break;
    default:
      break;
  }

  return config;
}

export default getPdfConfig;
