import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TriangleDown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTriangleDown: React.SFC = props => {
  return <System.TriangleDown {...props} style={style} />;
};

export const TriangleDown = withHOC(InnerTriangleDown);

TriangleDown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TriangleDown, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
