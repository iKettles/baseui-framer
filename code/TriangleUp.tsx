import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/TriangleUp";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerTriangleUp: React.SFC = props => {
  return <System.TriangleUp {...props} style={style} />;
};

export const TriangleUp = withHOC(InnerTriangleUp);

TriangleUp.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TriangleUp, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
