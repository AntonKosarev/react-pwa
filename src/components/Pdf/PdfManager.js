import React, {Component} from "react";
import PsPdfType1 from "./PsPdfType1";
import PsPdfType2 from "./PsPdfType2";
import PsPdfType3 from "./PsPdfType3";
import PsPdfType4 from "./PsPdfType4";
import PsPdfType5 from "./PsPdfType5";
import PsPdfType6 from "./PsPdfType6";

export default class PdfManager extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    const instance = getPdfInstance(this.props);

    return (
    <div style={{width: "100%", height: "100%", position: "static"}}>
      {instance}
    </div>
    )
  }
}

function getPdfInstance(props) {
  let instance = <PsPdfType1 containerId={props.containerId} container={props.container} document={props.document}/>;

  switch(props.pdfStyle) {
    case "2":
      instance = <PsPdfType2 containerId={props.containerId} container={props.container} document={props.document}/>;
      break;
    case "3":
      instance = <PsPdfType3 containerId={props.containerId} container={props.container} document={props.document}/>;
      break;
    case "4":
      instance = <PsPdfType4 containerId={props.containerId} container={props.container} document={props.document}/>;
      break;
    case "5":
      instance = <PsPdfType5 containerId={props.containerId} container={props.container} document={props.document}/>;
      break;
    case "6":
      instance = <PsPdfType6 containerId={props.containerId} container={props.container} document={props.document}/>;
      break;
      default: break;
  }

  return instance;
}
