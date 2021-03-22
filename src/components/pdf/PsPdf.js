import React, {Component} from "react";
import LICENSE_KEY from "./license";
import PSPDFKit from "pspdfkit";
import readFileAsArrayBuffer from "../../utils/utils";

const baseUrl = `${window.location.protocol}//${window.location.host}/`;

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

export default class PsPdf extends Component {
  constructor(props, context) {
    super(props, context);
    this._instance = null;

    this.state = {
      document   : props.document,
      container  : props.container,
      baseUrl    : baseUrl,
      styleSheets: stylesheets,
      licenseKey : LICENSE_KEY,
    };
  }

  onRef(container) {
    // console.log(container);
    // this.setState({container : '#pdfContainer'});
  };

  onPress() {
    const self      = this;
    const formInput = document.getElementById("openFile");
    formInput.click();

    formInput.addEventListener("change", function (e) {
      const files = e.target.files;

      if (!files.length) {
        console.error('No files loaded');
        return false;
      }

      readFileAsArrayBuffer(files[0])
        .then((blobArray) => {
          self.setState({document: blobArray});
        }).catch((error) => {
        console.error(error.message);
      });
    });
  };

  unload() {
    PSPDFKit.unload(this._instance || this.state.container);
    this._instance = null;
  };

  componentDidMount() {
    let toolbarItems = PSPDFKit.defaultToolbarItems,
        self         = this;
    // A custom item. Inside the onPress callback we can call into PSPDFKit APIs.
    toolbarItems.push({
      type   : "custom",
      id     : "my-custom-button",
      title  : "Open File",
      onPress: function () {
        self.onPress();
      }
    });

    let theme       = PSPDFKit.Theme.LIGHT;
    let styleSheets = this.state.styleSheets;
    
    if(this.props.pdfStyle === '1') {
      toolbarItems.push({
        type   : "custom",
        id     : "my-fullscreen-button",
        title  : "Full Screen",
        onPress: function () {
          requestFullscreen(document.getElementById('defaultPdf'));
        }
      });
    }
    else if(this.props.pdfStyle === '2') {
      styleSheets = [];
    }
    else if (this.props.pdfStyle === '3') {
      // PSPDFKit exposes the default list of items as PSPDFKit.defaultToolbarItems
      // This is an Array that can be filtered or customized as you please.
      toolbarItems = PSPDFKit.defaultToolbarItems.filter(item => {
        return /\b(sidebar-bookmarks|sidebar-thumbnails|zoom-in|zoom-out)\b/.test(
          item.type
        );
      });
      toolbarItems.push({
        type: "spacer"
      });
      toolbarItems.push({
        type: "search"
      });
    } else if (this.props.pdfStyle === '4') {
      theme       = PSPDFKit.Theme.DARK;
      styleSheets = [];
    } else if(this.props.pdfStyle === '6') {
      // PSPDFKit exposes the default list of items as PSPDFKit.defaultToolbarItems
      // This is an Array that can be filtered or customized as you please.
      toolbarItems = customIconsToolbar;
      styleSheets = [baseUrl + "my-pspdfkit2.css"];
    }

    this.setState({toolbarItems: toolbarItems});

    PSPDFKit.load({
      toolbarItems: toolbarItems,
      document    : this.state.document,//url or ArrayBuffer
      container   : this.state.container,
      licenseKey  : this.state.licenseKey,
      baseUrl     : this.state.baseUrl,
      styleSheets : styleSheets,
      theme       : theme
    }).then((instance) => {
      this._instance = instance;
      if (this.props.pdfStyle === '2') {
        this._instance.setViewState(viewState => (
          viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.END)
        ));
      } else if (this.props.pdfStyle === '5') {
        this._instance.setViewState(viewState => (
          viewState.set("readOnly", true)
        ));
      } else {
        this._instance.setViewState(viewState => (
          viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.START)
        ));
      }
    }).catch((error) => {
      console.error(error.message);
    });
  };

  componentDidUpdate(prevProps) {
    const nextProps = this.state;
    // nextProps.theme = PSPDFKit.Theme.DARK;
    // We only want to reload the document when the documentUrl prop changes.
    if (nextProps.document !== prevProps.document) {
      this.unload();
      PSPDFKit.load(nextProps)
        .then(() => {
        }).catch((error) => {
        console.error(error.message);
      });
    }
  };

  componentWillUnmount() {
    this.unload();
  };

  render() {
    const containerId = this.props.containerId;
    return (
      <div
        id={containerId}
        ref={this.onRef}
        style={{width: "100%", height: "100%", position: "static"}}
      />
    );
  }
}
function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
