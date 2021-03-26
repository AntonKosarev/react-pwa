import React, {Component} from "react";
import PSPDFKit from "pspdfkit";
import readFileAsArrayBuffer from "../../utils/readFileAsArrayBuffer";
import pdfConfig from "./pdfConfig";

export default class PsPdfType3 extends Component {
  constructor(props, context) {
    super(props, context);
    this._instance = null;
    const config = pdfConfig(this.props, this);

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

    this.state = {config: config};
  }

  unload() {
    PSPDFKit.unload(this._instance || this.props.container);
    this._instance = null;
  };

  componentDidMount() {
    PSPDFKit.load(this.state.config).then((instance) => {
      this._instance = instance;
      this._instance.setViewState(viewState => (
        viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.START)
      ));
    }).catch((error) => {
      console.error(error.message);
    });
  };

  componentDidUpdate(prevProps) {
    const nextProps = this.state;
    // nextProps.theme = PSPDFKit.Theme.DARK;
    // We only want to reload the document when the documentUrl prop changes.
    if (nextProps.config.document !== prevProps.document) {
      this.unload();
      PSPDFKit.load(nextProps.config)
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
    return (
      <div
        id={this.props.containerId}
        style={{width: "100%", height: "100%", position: "static"}}
      />
    );
  }

  onPress() {
    const openFileButton = document.getElementById("openFile");
    const self = this;
    openFileButton.click();
    openFileButton.addEventListener("change", function (e) {
      const files = e.target.files;
      //check files
      if (!files.length) {
        console.error('No files loaded');
        return false;
      }
      //read PDF as ArrayBuffer
      readFileAsArrayBuffer(files[0])
        .then((blobArray) => {
          let config = self.state.config;
          config.document = blobArray;
          self.setState({config: config});
        }).catch((error) => {
        console.error(error.message);
      });
    });
  };
}
