import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ArrowLeft";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerArrowLeft: React.SFC = props => {
  return <System.ArrowLeft {...props} style={style} />;
};

export const ArrowLeft = withHOC(InnerArrowLeft);

ArrowLeft.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ArrowLeft, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
