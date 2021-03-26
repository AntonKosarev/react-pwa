import PSPDFKit from "pspdfkit";
import {stylesheets, documentByDefault} from "./defines";
import {baseUrl} from "./../../constants/defines";
import {licenseKey} from "./licenseKey";

function pdfConfig(props, scope) {
  const config = {
    document    : documentByDefault,
    toolbarItems: PSPDFKit.defaultToolbarItems,
    theme       : PSPDFKit.Theme.LIGHT,
    styleSheets : stylesheets,
    baseUrl     : baseUrl,
    container   : props.container,
    licenseKey  : licenseKey
  };

  config.toolbarItems.push({
    type   : "custom",
    id     : "my-custom-button",
    title  : "Open File",
    onPress: function () {
      scope.onPress();
    }
  });

  return config;
}

export default pdfConfig;
