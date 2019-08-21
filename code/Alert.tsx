import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Alert";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerAlert: React.SFC = props => {
  return <System.Alert {...props} style={style} />;
};

export const Alert = withHOC(InnerAlert);

Alert.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Alert, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
