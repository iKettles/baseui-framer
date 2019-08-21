import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ArrowRight";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowRight: React.SFC = props => {
  return <System.ArrowRight {...props} style={style} />;
};

export const ArrowRight = withHOC(InnerArrowRight);

ArrowRight.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ArrowRight, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
