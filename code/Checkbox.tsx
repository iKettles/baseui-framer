import * as React from "react";
import * as System from "baseui";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./generated/Checkbox";
import { withHOC } from "./withHOC";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckbox: React.SFC = props => {
  return <System.Checkbox {...props} style={style} />;
};

export const Checkbox = withHOC(InnerCheckbox);

Checkbox.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Checkbox, {
  children: merge(controls.children, {}),
  checked: merge(controls.checked, {}),
  disabled: merge(controls.disabled, {}),
  required: merge(controls.required, {}),
  isError: merge(controls.isError, {}),
  autoFocus: merge(controls.autoFocus, {}),
  type: merge(controls.type, {}),
  name: merge(controls.name, {}),
  value: merge(controls.value, {}),
  isIndeterminate: merge(controls.isIndeterminate, {}),
  labelPlacement: merge(controls.labelPlacement, {}),
  checkmarkType: merge(controls.checkmarkType, {})
});
