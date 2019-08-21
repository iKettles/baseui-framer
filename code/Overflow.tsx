import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Overflow";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerOverflow: React.SFC = props => {
  return <System.Overflow {...props} style={style} />;
};

export const Overflow = withHOC(InnerOverflow);

Overflow.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Overflow, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
