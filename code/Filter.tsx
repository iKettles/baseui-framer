import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Filter";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerFilter: React.SFC = props => {
  return <System.Filter {...props} style={style} />;
};

export const Filter = withHOC(InnerFilter);

Filter.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Filter, {
  children: merge(controls.children, {}),
  size: merge(controls.size, {}),
  color: merge(controls.color, {}),
  title: merge(controls.title, {})
});
