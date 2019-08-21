import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ArrowDown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowDown: React.SFC = props => {
  return <System.ArrowDown {...props} style={style} />;
};

export const ArrowDown = withHOC(InnerArrowDown);

ArrowDown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ArrowDown, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
