import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulButtonGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulButtonGroup: React.SFC = props => {
  return <System.StatefulButtonGroup {...props} style={style} />;
};

export const StatefulButtonGroup = withHOC(InnerStatefulButtonGroup);

StatefulButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulButtonGroup, {
  ariaLabel: merge(controls.ariaLabel, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  mode: merge(controls.mode, {}),
  selected: merge(controls.selected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {})
});
