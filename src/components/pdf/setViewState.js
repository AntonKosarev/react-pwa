import PSPDFKit from "pspdfkit";

function setViewState(instance, type) {
  switch (type) {
    case "2":
      instance.setViewState(viewState => (
        viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.END)
      ));
      break;
    case "5":
      instance.setViewState(viewState => (
        viewState.set("readOnly", true)
      ));
      break;
    default:
      instance.setViewState(viewState => (
        viewState.set("sidebarPlacement", PSPDFKit.SidebarPlacement.START)
      ));
      break;
  }
}

export default setViewState;
