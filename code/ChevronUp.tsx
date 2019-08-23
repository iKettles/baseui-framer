import * as React from "react";
import * as System from "baseui/icon";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ChevronUp";
import { withHOC } from "./withHOC";
import { filterProps } from "./utils/FilterProps";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChevronUp: React.SFC = props => {
  return <System.ChevronUp {...filterProps(props, ['willChangeTransform'])} style={style} />;
};

export const ChevronUp = withHOC(InnerChevronUp);

ChevronUp.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ChevronUp, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
