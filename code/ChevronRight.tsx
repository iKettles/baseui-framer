import * as React from "react";
import * as System from "baseui/icon";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ChevronRight";
import { withHOC } from "./withHOC";
import { filterProps } from "./utils/FilterProps";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerChevronRight: React.SFC = props => {
  return <System.ChevronRight {...filterProps(props, ['willChangeTransform'])} style={style} />;
};

export const ChevronRight = withHOC(InnerChevronRight);

ChevronRight.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ChevronRight, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
