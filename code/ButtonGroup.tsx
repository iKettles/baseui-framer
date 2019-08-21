import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/ButtonGroup";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerButtonGroup: React.SFC = props => {
  return <System.ButtonGroup {...props} style={style} />;
};

export const ButtonGroup = withHOC(InnerButtonGroup);

ButtonGroup.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(ButtonGroup, {
  ariaLabel: merge(controls.ariaLabel, {}),
  children: merge(controls.children, {}),
  disabled: merge(controls.disabled, {}),
  mode: merge(controls.mode, {}),
  selected: merge(controls.selected, {}),
  shape: merge(controls.shape, {}),
  size: merge(controls.size, {})
});
