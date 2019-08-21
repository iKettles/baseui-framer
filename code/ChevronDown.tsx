import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ChevronDown";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChevronDown: React.SFC = props => {
  return <System.ChevronDown {...props} style={style} />;
};

export const ChevronDown = withHOC(InnerChevronDown);

ChevronDown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ChevronDown, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
