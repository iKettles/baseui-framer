import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Grab";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerGrab: React.SFC = props => {
  return <System.Grab {...props} style={style} />;
};

export const Grab = withHOC(InnerGrab);

Grab.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Grab, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
