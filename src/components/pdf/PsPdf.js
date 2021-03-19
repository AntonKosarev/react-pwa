import React, {Component} from "react";
import LICENSE_KEY from "./license";
import PSPDFKit from "pspdfkit";
import readFileAsArrayBuffer from "../../utils/utils";

const baseUrl = `${window.location.protocol}//${window.location.host}/`;

const stylesheets = [baseUrl + "my-pspdfkit.css"];

export default class PsPdf extends Component {
  constructor(props, context) {
    super(props, context);
    this._instance  = null;

    this.state = {
      document   : props.document,
      container  : props.container,
      baseUrl    : baseUrl,
      stylesheets: stylesheets,
      licenseKey : LICENSE_KEY,
    };
  }

  onRef (container) {
    // console.log(container);
    // this.setState({container : '#pdfContainer'});
  };

  onPress () {
    const self      = this;
    const formInput = document.getElementById("openFile");
    formInput.click();

    formInput.addEventListener("change", function (e) {
      const files  = e.target.files;

      if(!files.length) {
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

  unload () {
    PSPDFKit.unload(this._instance || this.state.container);
    this._instance = null;
  };

  componentDidMount () {
    const toolbarItems = PSPDFKit.defaultToolbarItems,
          self         = this;
    // A custom item. Inside the onPress callback we can call into PSPDFKit APIs.
    toolbarItems.push({
      type   : "custom",
      id     : "my-custom-button",
      title  : "open file custom",
      onPress: function () {
        self.onPress();
      }
    });

    this.setState({toolbarItems: toolbarItems});

    PSPDFKit.load({
      toolbarItems: toolbarItems,
      document    : this.state.document,
      container   : this.state.container,
      licenseKey  : this.state.licenseKey,
      baseUrl     : this.state.baseUrl,
      styleSheets : this.state.stylesheets
    }).then((instance) => {
      console.log("Successfully mounted PSPDFKit", instance);
      this._instance = instance;
      this._instance.setViewState(viewState => (
        viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.START)
      ));
    }).catch((error) => {
      console.error(error.message);
    });
  };

  componentDidUpdate (prevProps) {
    const nextProps = this.state;
    nextProps.theme = PSPDFKit.Theme.DARK;
    // We only want to reload the document when the documentUrl prop changes.
    if (nextProps.document !== prevProps.document) {
      this.unload();
      PSPDFKit.load(nextProps)
        .then(() => {
          console.log("Successfully remounted PSPDFKit");
        }).catch((error) => {
        console.error(error.message);
      });
    }
  };

  componentWillUnmount () {
    this.unload();
  };

  render () {
    const containerId = this.props.containerId;
    return (
      <div
        id={containerId}
        ref={this.onRef}
        style={{width: "100%", height: "100%", position: "absolute"}}
      />
    );
  }
}
