import React, {Component} from "react";
import PsPdf from "./PsPdf";

export default class PdfManager extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return (
    <div style={{width: "100%", height: "100%", position: "static"}}>
      <PsPdf containerId={this.props.containerId} container={this.props.container} document={this.props.document} pdfStyle={this.props.pdfStyle}/>
    </div>
    )
  }
}
