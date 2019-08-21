import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/StatefulCheckbox";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerStatefulCheckbox: React.SFC = props => {
  return <System.StatefulCheckbox {...props} style={style} />;
};

export const StatefulCheckbox = withHOC(InnerStatefulCheckbox);

StatefulCheckbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StatefulCheckbox, {
  disabled: merge(controls.disabled, {}),
  isError: merge(controls.isError, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  isIndeterminate: merge(controls.isIndeterminate, {}),
  children: merge(controls.children, {}),
  autoFocus: merge(controls.autoFocus, {}),
  checkmarkType: merge(controls.checkmarkType, {})
});
