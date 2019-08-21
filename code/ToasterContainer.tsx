import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ToasterContainer";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerToasterContainer: React.SFC = props => {
  return <System.ToasterContainer {...props} style={style} />;
};

export const ToasterContainer = withHOC(InnerToasterContainer);

ToasterContainer.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ToasterContainer, {
  placement: merge(controls.placement, {}),
  usePortal: merge(controls.usePortal, {}),
  autoHideDuration: merge(controls.autoHideDuration, {})
});
