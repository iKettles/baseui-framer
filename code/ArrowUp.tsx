import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ArrowUp";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowUp: React.SFC = props => {
  return <System.ArrowUp {...props} style={style} />;
};

export const ArrowUp = withHOC(InnerArrowUp);

ArrowUp.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ArrowUp, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
